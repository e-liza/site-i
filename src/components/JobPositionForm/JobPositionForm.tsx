import React, { useRef, useState, useMemo } from 'react';
import { Form, notification } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from 'react-google-recaptcha';
import { Validator } from 'class-validator';
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

interface IJobPositionFormProps extends FormComponentProps {
  onAccept(
    data: IJobDescriptionFormData,
    captchaValue: string,
    finishedLoadCallback: () => void,
  ): void;
}

const JobPositionFormComponent: React.FC<IJobPositionFormProps> = ({ form, onAccept }) => {
  const { getFieldDecorator } = form;
  const [t] = useTranslation();
  const [formDataLoadStatus, setFormDataLoadStatus] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const validator = useMemo(() => new Validator(), []);
  const countriesForSelect = useMemo(
    () => Countries.map((country) => ({ name: country.name, value: country.name })),
    [],
  );

  const submitForm = (captchaToken: string | null) => {
    if (captchaToken) {
      form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          onAccept(values, captchaToken, () => {
            setFormDataLoadStatus(false);
          });
        }
      });
    }
  };

  const handleSubmit = () => {
    const recaptchaToken = recaptchaRef.current?.getValue();
    if (recaptchaToken) {
      recaptchaRef.current?.reset();
    }
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        setFormDataLoadStatus(true);
        recaptchaRef.current?.execute();
      }
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
      <Form className={styles.form}>
        <div className={styles.row}>
          <Form.Item className={classNames(styles.fieldWithOutExtra, styles.singleInRow)}>
            {getFieldDecorator('fullName', {
              rules: [
                {
                  required: true,
                  message: t('layout.forms.jobPositionForm.fields.errors.fullName.notFilled'),
                },
                {
                  max: 100,
                  message: t('layout.forms.jobPositionForm.fields.errors.fullName.maxLength'),
                },
              ],
            })(<InputField name={t('layout.forms.jobPositionForm.fields.names.fullName')} />)}
          </Form.Item>
        </div>
        <div className={styles.row}>
          <Form.Item className={styles.fieldWithOutExtra}>
            {getFieldDecorator('email', {
              rules: [
                {
                  validator: (rule, value, callback) => {
                    if (!value) {
                      callback(t('layout.forms.jobPositionForm.fields.errors.email.notFilled'));
                      return;
                    }
                    if (!validator.isEmail(value)) {
                      callback(t('layout.forms.jobPositionForm.fields.errors.email.notCorrect'));
                      return;
                    }
                    callback();
                  },
                },
              ],
            })(<InputField name={t('layout.forms.jobPositionForm.fields.names.email')} />)}
          </Form.Item>
          <Form.Item className={styles.fieldWithOutExtra}>
            {getFieldDecorator('phone', {
              rules: [
                {
                  validator: (rule, value, callback) => {
                    if (value && validator.isPhoneNumber(value, 'ZZ')) {
                      callback();
                      return;
                    }
                    callback(t('layout.forms.jobPositionForm.fields.errors.phone'));
                  },
                },
              ],
            })(<InputField name={t('layout.forms.jobPositionForm.fields.names.phone')} />)}
          </Form.Item>
        </div>
        <div className={styles.row}>
          <Form.Item className={styles.fieldWithOutExtra}>
            {getFieldDecorator('linkedInProfileLink', {
              rules: [
                {
                  validator: (rule, value, callback) => {
                    if (!value) {
                      callback(t('layout.forms.jobPositionForm.fields.errors.linkedIn.notFilled'));
                      return;
                    }
                    if (value.length > 255) {
                      callback(t('layout.forms.jobPositionForm.fields.errors.linkedIn.length'));
                      return;
                    }
                    if (!validator.isURL(value)) {
                      callback(t('layout.forms.jobPositionForm.fields.errors.linkedIn.notCorrect'));
                      return;
                    }
                    callback();
                  },
                },
              ],
            })(<InputField name={t('layout.forms.jobPositionForm.fields.names.linkedIn')} />)}
          </Form.Item>
          <Form.Item className={styles.fieldWithOutExtra}>
            {getFieldDecorator('country', {
              rules: [
                {
                  required: true,
                  message: t('layout.forms.jobPositionForm.fields.errors.country'),
                },
              ],
            })(
              <SelectInput
                showSearch={true}
                name={t('layout.forms.jobPositionForm.fields.names.country')}
                selectItems={countriesForSelect}
              />,
            )}
          </Form.Item>
        </div>
        <div className={styles.formTextArea}>
          <Form.Item
            className={styles.fieldsWithInfo}
            extra={t('layout.forms.jobPositionForm.fields.extraInfo.addInfo')}
          >
            {getFieldDecorator('additionalInfo', {
              rules: [
                {
                  max: 255,
                  message: t('layout.forms.jobPositionForm.fields.errors.addInfo'),
                },
              ],
            })(<TextArea name={t('layout.forms.jobPositionForm.fields.names.addInfo')} />)}
          </Form.Item>
        </div>
        <div className={styles.fileValueBlock}>
          {form.getFieldValue('coverLetter') ? (
            <div className={styles.fileValue}>
              <span>{form.getFieldValue('coverLetter')?.name}</span>
              <CancelIcon
                onClick={() => form.resetFields(['coverLetter'])}
                className={styles.clearFile}
              />
            </div>
          ) : null}
          {form.getFieldValue('resume') ? (
            <div className={styles.fileValue}>
              <span>{form.getFieldValue('resume')?.name}</span>
              <CancelIcon
                onClick={() => form.resetFields(['resume'])}
                className={styles.clearFile}
              />
            </div>
          ) : null}
        </div>
        <div className={styles.contorlsRow}>
          <Form.Item extra={t('layout.forms.jobPositionForm.fields.extraInfo.addInfo')}>
            {getFieldDecorator('coverLetter', {
              rules: [
                {
                  validator: (rule, value, callback) => {
                    if (!value) {
                      callback();
                      return;
                    }

                    if (
                      value.type ===
                        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
                      value.type === 'application/msword' ||
                      value.type === 'application/pdf'
                    ) {
                      callback();
                      return;
                    }
                    callback(t('layout.forms.jobPositionForm.fields.errors.letter.wrongFormat'));
                  },
                },
              ],
            })(
              <FileInput
                id="letter"
                className={styles.letterButton}
                labelName={t('layout.forms.jobPositionForm.fields.names.letter')}
                acceptFileTypes="application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/msword, application/pdf"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('resume', {
              rules: [
                {
                  validator: (rule, value, callback) => {
                    if (!value) {
                      callback(t('layout.forms.jobPositionForm.fields.errors.cv.notFilled'));
                    }

                    if (
                      value.type ===
                        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
                      value.type === 'application/msword' ||
                      value.type === 'application/pdf'
                    ) {
                      callback();
                      return;
                    }
                    callback(t('layout.forms.jobPositionForm.fields.errors.cv.wrongFormat'));
                  },
                },
              ],
            })(
              <FileInput
                className={styles.cvButton}
                id="cv"
                labelName={t('layout.forms.jobPositionForm.fields.names.cv')}
                acceptFileTypes="application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/msword, application/pdf"
              />,
            )}
          </Form.Item>
          <Form.Item className={styles.formControls}>
            <Button
              type="primary"
              name={t('layout.forms.jobPositionForm.controls.submit')}
              className={styles.sendButton}
              onClick={handleSubmit}
            />
          </Form.Item>
        </div>
      </Form>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
        size="invisible"
        onChange={submitForm}
        onErrored={onCaptchaError}
      />
      {formDataLoadStatus ? <div className={styles.loadOverlay} /> : null}
    </div>
  );
};

const JobDescriptionForm = Form.create<IJobPositionFormProps>({ name: 'pricing' })(
  JobPositionFormComponent,
);

export default JobDescriptionForm;
