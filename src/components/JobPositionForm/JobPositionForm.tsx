import React, { useRef, useState, useMemo } from 'react';
import { Form, notification } from 'antd';
import type { FormInstance } from 'antd';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from 'react-google-recaptcha';
import { isEmail, isPhoneNumber, isURL } from 'class-validator';
import classNames from 'classnames';

import InputField from '../InputField/InputField';
import FileInput from '../FileInput/FileInput';
import TextArea from '../TextArea/TextArea';
import SelectInput from '../SelectInput/SelectInput';
import Button from '../Button/Button';
import { Countries } from '../../constants/countries';
import { ReactComponent as CancelIcon } from '../../assets/cancel.svg';

import styles from './JobPositionForm.module.scss';

export interface IJobDescriptionFormData {
  positionId: number;
  recaptchaToken: string;
  fullName: string;
  linkedInProfileLink: string;
  country: string;
  email: string;
  phone: string;
  additionalInfo: string;
  resume: File;
  coverLetter: File;
}

interface IJobPositionFormProps {
  onAccept(
    data: IJobDescriptionFormData,
    captchaValue: string,
    finishedLoadCallback: () => void,
  ): void;
}

const JobPositionForm: React.FC<IJobPositionFormProps> = ({ onAccept }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [formDataLoadStatus, setFormDataLoadStatus] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const countriesForSelect = useMemo(
    () => Countries.map((country) => ({ name: country.name, value: country.name })),
    [],
  );

  const submitForm = (captchaToken: string | null) => {
    if (captchaToken) {
      form
        .validateFields()
        .then((values) => {
          onAccept(values, captchaToken, () => setFormDataLoadStatus(false));
        })
        .catch((err) => {
          console.error('Validation failed:', err);
        });
    }
  };

  const handleSubmit = () => {
    const recaptchaToken = recaptchaRef.current?.getValue();
    if (recaptchaToken) {
      recaptchaRef.current?.reset();
    }
    form
      .validateFields()
      .then(() => {
        setFormDataLoadStatus(true);
        recaptchaRef.current?.execute();
      })
      .catch((err) => {
        console.error('Validation failed:', err);
      });
  };

  const onCaptchaError = () => {
    setFormDataLoadStatus(false);
    notification.error({
      message: t('layout.forms.formErrors.captchaError.message'),
      description: t('layout.forms.formErrors.captchaError.description'),
    });
  };

  return (
    <div className={styles.formContainer}>
      <Form form={form} className={styles.form}>
        {/* Full Name Field */}
        <div className={styles.row}>
          <Form.Item
            className={classNames(styles.fieldWithOutExtra, styles.singleInRow)}
            name="fullName"
            rules={[
              {
                required: true,
                message: t('layout.forms.jobPositionForm.fields.errors.fullName.notFilled'),
              },
              {
                max: 100,
                message: t('layout.forms.jobPositionForm.fields.errors.fullName.maxLength'),
              },
            ]}
          >
            <InputField name={t('layout.forms.jobPositionForm.fields.names.fullName')} />
          </Form.Item>
        </div>

        {/* Email and Phone Fields */}
        <div className={styles.row}>
          <Form.Item
            className={styles.fieldWithOutExtra}
            name="email"
            rules={[
              {
                validator: (_, value) =>
                  !value
                    ? Promise.reject(
                        t('layout.forms.jobPositionForm.fields.errors.email.notFilled'),
                      )
                    : isEmail(value)
                      ? Promise.resolve()
                      : Promise.reject(
                          t('layout.forms.jobPositionForm.fields.errors.email.notCorrect'),
                        ),
              },
            ]}
          >
            <InputField name={t('layout.forms.jobPositionForm.fields.names.email')} />
          </Form.Item>

          <Form.Item
            className={styles.fieldWithOutExtra}
            name="phone"
            rules={[
              {
                validator: (_, value) =>
                  value && isPhoneNumber(value, undefined)
                    ? Promise.resolve()
                    : Promise.reject(t('layout.forms.jobPositionForm.fields.errors.phone')),
              },
            ]}
          >
            <InputField name={t('layout.forms.jobPositionForm.fields.names.phone')} />
          </Form.Item>
        </div>

        {/* LinkedIn and Country Fields */}
        <div className={styles.row}>
          <Form.Item
            className={styles.fieldWithOutExtra}
            name="linkedInProfileLink"
            rules={[
              {
                validator: (_, value) =>
                  !value
                    ? Promise.reject(
                        t('layout.forms.jobPositionForm.fields.errors.linkedIn.notFilled'),
                      )
                    : value.length > 255
                      ? Promise.reject(
                          t('layout.forms.jobPositionForm.fields.errors.linkedIn.length'),
                        )
                      : isURL(value)
                        ? Promise.resolve()
                        : Promise.reject(
                            t('layout.forms.jobPositionForm.fields.errors.linkedIn.notCorrect'),
                          ),
              },
            ]}
          >
            <InputField name={t('layout.forms.jobPositionForm.fields.names.linkedIn')} />
          </Form.Item>

          <Form.Item
            className={styles.fieldWithOutExtra}
            name="country"
            rules={[
              { required: true, message: t('layout.forms.jobPositionForm.fields.errors.country') },
            ]}
          >
            <SelectInput
              showSearch={true}
              name={t('layout.forms.jobPositionForm.fields.names.country')}
              selectItems={countriesForSelect}
            />
          </Form.Item>
        </div>

        {/* Submit Button */}
        <div className={styles.contorlsRow}>
          <Form.Item>
            <Button
              type="primary"
              name={t('layout.forms.jobPositionForm.controls.submit')}
              className={styles.sendButton}
              onClick={handleSubmit}
            />
          </Form.Item>
        </div>
      </Form>

      {/* reCAPTCHA */}
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
        size="invisible"
        onChange={submitForm}
        onErrored={onCaptchaError}
      />

      {/* Loading Overlay */}
      {formDataLoadStatus && <div className={styles.loadOverlay} />}
    </div>
  );
};

export default JobPositionForm;
