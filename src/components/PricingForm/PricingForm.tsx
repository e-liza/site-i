import React, { useRef, useState, useMemo } from 'react';
import { Form, notification } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from 'react-google-recaptcha';
import { Validator } from 'class-validator';
import classNames from 'classnames';

import InputField from '../InputField/InputField';
import TextArea from '../TextArea/TextArea';
import SelectInput from '../SelectInput/SelectInput';
import GroupCheckBox, { ICheckBoxValue } from '../CheckBoxGroup/GroupCheckBox';
import Button from '../Button/Button';
import { SERVICE, COMPANY_SIZE } from '../../constants/forms';
import { Countries } from '../../constants/countries';
import { Routes } from '../../constants/routes';

import styles from './PricingForm.module.scss';

interface IFormData {
  recaptchaToken: string;
  services?: ICheckBoxValue[];
  fullName: string;
  companyName: string;
  companySize: COMPANY_SIZE;
  destination: string;
  location: string;
  email: string;
  phone: string;
  additionalInfo: string;
}

export type ISubmittedPricingFormData =
  | {
      services?: SERVICE[];
    }
  | IFormData;

interface IPricingFormProps extends FormComponentProps {
  checkBox: boolean;
  onAccept(
    data: ISubmittedPricingFormData,
    captchaValue: string,
    finishedLoadCallback: () => void,
  ): void;
}

const PricingFormComponent: React.FC<IPricingFormProps> = ({ form, checkBox, onAccept }) => {
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
      form.validateFieldsAndScroll((err, values: IFormData) => {
        if (!err) {
          const services = values.services
            ?.filter((service) => service.value)
            .map((service) => service.key as SERVICE);
          onAccept(
            {
              ...values,
              services: services,
            },
            captchaToken,
            () => {
              setFormDataLoadStatus(false);
            },
          );
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

  const SelectItems = [
    {
      name: `1-50`,
      value: COMPANY_SIZE.SMALL,
    },
    {
      name: `51-150`,
      value: COMPANY_SIZE.MIDDLE,
    },
    {
      name: `151-500`,
      value: COMPANY_SIZE.BIG,
    },
    {
      name: `501-1000`,
      value: COMPANY_SIZE.LARGE, // TODO: need to change when it will be ready on backend
    },
    {
      name: `1000+`,
      value: COMPANY_SIZE.EXTRA_LARGE, // TODO: need to change when it will be ready on backend
    },
  ];

  return (
    <div className={styles.formContainer}>
      <Form className={styles.form}>
        {checkBox ? (
          <div className={styles.services}>
            <Form.Item className={styles.servicesContainer}>
              {getFieldDecorator('services', {
                initialValue: Object.values(SERVICE).map((service) => ({
                  key: service,
                  name: t(`layout.forms.pricingForm.services.${service}`),
                  value: false,
                })),
              })(<GroupCheckBox title={t('layout.forms.pricingForm.services.title')} />)}
            </Form.Item>
          </div>
        ) : null}
        <div className={styles.row}>
          <Form.Item className={classNames(styles.fieldWithOutExtra, styles.singleInRow)}>
            {getFieldDecorator('fullName', {
              rules: [
                {
                  required: true,
                  message: t('layout.forms.pricingForm.fields.errors.fullName.notFilled'),
                },
                {
                  max: 100,
                  message: t('layout.forms.pricingForm.fields.errors.fullName.maxLength'),
                },
              ],
            })(<InputField name={t('layout.forms.pricingForm.fields.names.fullName')} />)}
          </Form.Item>
        </div>
        <div className={styles.row}>
          <Form.Item className={styles.fieldWithOutExtra}>
            {getFieldDecorator('companyName', {
              rules: [
                {
                  required: true,
                  message: t('layout.forms.pricingForm.fields.errors.companyName.notFilled'),
                },
                {
                  max: 100,
                  message: t('layout.forms.pricingForm.fields.errors.companyName.maxLength'),
                },
              ],
            })(<InputField name={t('layout.forms.pricingForm.fields.names.companyName')} />)}
          </Form.Item>
          <Form.Item extra={t('layout.forms.pricingForm.fields.extraInfo.companySize')}>
            {getFieldDecorator('companySize')(
              <SelectInput
                showSearch={false}
                name={t('layout.forms.pricingForm.fields.names.companySizeSelect')}
                selectItems={SelectItems}
              />,
            )}
          </Form.Item>
        </div>
        <div className={styles.row}>
          <Form.Item
            className={styles.fieldsWithInfo}
            extra={t('layout.forms.pricingForm.fields.extraInfo.destinationCountry')}
          >
            {getFieldDecorator('destination')(
              <SelectInput
                showSearch={true}
                name={t('layout.forms.pricingForm.fields.names.destinationCountry')}
                selectItems={countriesForSelect}
                mode="multiple"
                maxTagTextLength={10}
                maxTagCount={1}
              />,
            )}
          </Form.Item>
          <Form.Item
            className={styles.fieldsWithInfo}
            extra={t('layout.forms.pricingForm.fields.extraInfo.location')}
          >
            {getFieldDecorator('location', {
              rules: [
                {
                  max: 255,
                  message: t('layout.forms.pricingForm.fields.errors.location.maxLength'),
                },
              ],
            })(<InputField name={t('layout.forms.pricingForm.fields.names.location')} />)}
          </Form.Item>
        </div>
        <div className={styles.row}>
          <Form.Item className={styles.fieldWithOutExtra}>
            {getFieldDecorator('email', {
              rules: [
                {
                  validator: (rule, value, callback) => {
                    if (!value) {
                      callback(t('layout.forms.pricingForm.fields.errors.email.notFilled'));
                      return;
                    }
                    if (!validator.isEmail(value)) {
                      callback(t('layout.forms.pricingForm.fields.errors.email.notCorrect'));
                      return;
                    }
                    callback();
                  },
                },
              ],
            })(<InputField name={t('layout.forms.pricingForm.fields.names.email')} />)}
          </Form.Item>
          <Form.Item
            className={styles.fieldsWithInfo}
            extra={t('layout.forms.pricingForm.fields.extraInfo.phone')}
          >
            {getFieldDecorator('phone', {
              rules: [
                {
                  validator: (rule, value, callback) => {
                    if (!value || validator.isPhoneNumber(value, 'ZZ')) {
                      callback();
                      return;
                    }
                    callback(t('layout.forms.pricingForm.fields.errors.phone'));
                  },
                },
              ],
            })(<InputField name={t('layout.forms.pricingForm.fields.names.phone')} />)}
          </Form.Item>
        </div>
        <div className={styles.formTextArea}>
          <Form.Item
            className={styles.fieldsWithInfo}
            extra={t('layout.forms.pricingForm.fields.extraInfo.addInfo')}
          >
            {getFieldDecorator('additionalInfo', {
              rules: [
                {
                  max: 255,
                  message: t('layout.forms.pricingForm.fields.errors.addInfo'),
                },
              ],
            })(<TextArea name={t('layout.forms.pricingForm.fields.names.addInfo')} />)}
          </Form.Item>
        </div>
        <div className={styles.contorlsRow}>
          <Form.Item className={styles.formControls}>
            <div className={styles.сontrolsContainer}>
              <Link className={styles.link} to={Routes.Security}>
                {t('layout.forms.pricingForm.controls.link')}
              </Link>
              <Button
                type="primary"
                name={t('layout.forms.pricingForm.controls.submit')}
                className={styles.sendButton}
                onClick={handleSubmit}
              />
            </div>
          </Form.Item>
        </div>
      </Form>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
        size="invisible"
        onErrored={onCaptchaError}
        onChange={submitForm}
      />
      {formDataLoadStatus ? <div className={styles.loadOverlay} /> : null}
    </div>
  );
};

const PricingForm = Form.create<IPricingFormProps>({ name: 'pricing' })(PricingFormComponent);

export default PricingForm;
