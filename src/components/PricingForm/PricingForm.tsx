// import React, { useRef, useState, useMemo } from 'react';
// import { Form, Input, Select, Checkbox, Button, notification } from 'antd';
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// // import ReCAPTCHA from 'react-google-recaptcha'; // Removed for mock
// import classNames from 'classnames';
// import { isEmail, isMobilePhone } from 'class-validator';

// import { SERVICE, COMPANY_SIZE } from '../../constants/forms';
// import { Countries } from '../../constants/countries';
// import { Routes } from '../../constants/routes';

// import styles from './PricingForm.module.scss';

// const { Option } = Select;

// export interface ISubmittedPricingFormData {
//   recaptchaToken: string;
//   services?: string[];
//   fullName: string;
//   companyName: string;
//   companySize: COMPANY_SIZE;
//   destination: string[];
//   location: string;
//   email: string;
//   phone: string;
//   additionalInfo: string;
// }

// interface IPricingFormProps {
//   checkBox: boolean;
//   onAccept: (
//     data: ISubmittedPricingFormData,
//     captchaValue: string,
//     finishedLoadCallback: () => void,
//   ) => void;
// }

// // Toggle for using real vs mock captcha
// const useMockCaptcha = true;

// const PricingForm: React.FC<IPricingFormProps> = ({ checkBox, onAccept }) => {
//   const { t } = useTranslation();
//   const [form] = Form.useForm();
//   const [formDataLoadStatus, setFormDataLoadStatus] = useState(false);

//   const countriesForSelect = useMemo(
//     () => Countries.map((country) => ({ name: country.name, value: country.name })),
//     [],
//   );

//   const SelectItems = [
//     { name: '1-50', value: COMPANY_SIZE.SMALL },
//     { name: '51-150', value: COMPANY_SIZE.MIDDLE },
//     { name: '151-500', value: COMPANY_SIZE.BIG },
//     { name: '501-1000', value: COMPANY_SIZE.LARGE },
//     { name: '1000+', value: COMPANY_SIZE.EXTRA_LARGE },
//   ];

//   const submitForm = async (captchaToken: string | null) => {
//     if (captchaToken) {
//       try {
//         const values = await form.validateFields();
//         onAccept({ ...values, recaptchaToken: captchaToken }, captchaToken, () =>
//           setFormDataLoadStatus(false),
//         );
//       } catch (error) {
//         console.error('Validation failed:', error);
//         setFormDataLoadStatus(false);
//       }
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       await form.validateFields();
//       setFormDataLoadStatus(true);

//       if (useMockCaptcha) {
//         // Simulate a successful captcha result after a brief delay
//         setTimeout(() => {
//           submitForm('mock-token');
//         }, 500);
//       } else {
//         // Here you would call real reCAPTCHA
//         console.warn('reCAPTCHA is disabled. Enable it by setting `useMockCaptcha` to false.');
//       }
//     } catch (error) {
//       console.error('Form validation failed:', error);
//     }
//   };

//   return (
//     <div className={styles.formContainer}>
//       <Form form={form} layout="vertical">
//         {checkBox && (
//           <Form.Item name="services" className={styles.servicesContainer}>
//             <Checkbox.Group options={Object.values(SERVICE)} />
//           </Form.Item>
//         )}

//         <Form.Item
//           name="fullName"
//           label={t('layout.forms.pricingForm.fields.names.fullName')}
//           rules={[
//             {
//               required: true,
//               message: t('layout.forms.pricingForm.fields.errors.fullName.notFilled'),
//             },
//             { max: 100, message: t('layout.forms.pricingForm.fields.errors.fullName.maxLength') },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           name="companyName"
//           label={t('layout.forms.pricingForm.fields.names.companyName')}
//           rules={[
//             {
//               required: true,
//               message: t('layout.forms.pricingForm.fields.errors.companyName.notFilled'),
//             },
//             {
//               max: 100,
//               message: t('layout.forms.pricingForm.fields.errors.companyName.maxLength'),
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           name="companySize"
//           label={t('layout.forms.pricingForm.fields.names.companySizeSelect')}
//         >
//           <Select>
//             {SelectItems.map((item) => (
//               <Option key={item.value} value={item.value}>
//                 {item.name}
//               </Option>
//             ))}
//           </Select>
//         </Form.Item>

//         <Form.Item
//           name="destination"
//           label={t('layout.forms.pricingForm.fields.names.destinationCountry')}
//         >
//           <Select mode="multiple" maxTagTextLength={10} maxTagCount={1}>
//             {countriesForSelect.map((country) => (
//               <Option key={country.value} value={country.value}>
//                 {country.name}
//               </Option>
//             ))}
//           </Select>
//         </Form.Item>

//         <Form.Item
//           name="phone"
//           label={t('layout.forms.pricingForm.fields.names.phone')}
//           rules={[
//             {
//               validator: (_, value) =>
//                 !value || isMobilePhone(value, undefined)
//                   ? Promise.resolve()
//                   : Promise.reject(t('layout.forms.pricingForm.fields.errors.phone')),
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item>
//           <div className={styles.controlsContainer}>
//             <Link className={styles.link} to={Routes.Security}>
//               {t('layout.forms.pricingForm.controls.link')}
//             </Link>
//             <Button type="primary" onClick={handleSubmit}>
//               {t('layout.forms.pricingForm.controls.submit')}
//             </Button>
//           </div>
//         </Form.Item>
//       </Form>

//       {formDataLoadStatus && <div className={styles.loadOverlay} />}
//     </div>
//   );
// };
// export default PricingForm;

import React, { useState, useMemo } from 'react';
import { Form, Input, Select, Checkbox, Button, notification } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { isEmail, isMobilePhone } from 'class-validator';
import emailjs from '@emailjs/browser';
import { CheckCircleOutlined } from '@ant-design/icons';

import { SERVICE, COMPANY_SIZE } from '../../constants/forms';
import { Countries } from '../../constants/countries';
import { Routes } from '../../constants/routes';

import styles from './PricingForm.module.scss';

const { Option } = Select;

emailjs.init('Q2yahmR3QEuxzKV3v');

export interface ISubmittedPricingFormData {
  recaptchaToken: string;
  services?: string[];
  fullName: string;
  companyName: string;
  companySize: COMPANY_SIZE;
  destination: string[];
  location: string;
  email: string;
  phone: string;
  additionalInfo: string;
}

interface IPricingFormProps {
  checkBox: boolean;
  onAccept: (
    data: ISubmittedPricingFormData,
    captchaValue: string,
    finishedLoadCallback: () => void,
  ) => void;
}

const PricingForm: React.FC<IPricingFormProps> = ({ checkBox }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [formDataLoadStatus, setFormDataLoadStatus] = useState(false);
  const [devPreview, setDevPreview] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const countriesForSelect = useMemo(
    () => Countries.map((country) => ({ name: country.name, value: country.name })),
    [],
  );

  const SelectItems = [
    { name: '1-50', value: COMPANY_SIZE.SMALL },
    { name: '51-150', value: COMPANY_SIZE.MIDDLE },
    { name: '151-500', value: COMPANY_SIZE.BIG },
    { name: '501-1000', value: COMPANY_SIZE.LARGE },
    { name: '1000+', value: COMPANY_SIZE.EXTRA_LARGE },
  ];

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      setFormDataLoadStatus(true);

      const values = form.getFieldsValue();

      const templateParams = {
        name: values.fullName,
        email: values.email,
        phone: values.phone || 'No phone number provided.',
        company: values.companyName,
        message: values.additionalInfo || 'No message provided.',
        title: 'Email for IVY Solutions',
      };

      await emailjs.send('service_6ynjiim', 'template_38eea4o', templateParams);

      form.resetFields();

      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 2000);
    } catch (error) {
      console.error('Email send or validation error:', error);
      notification.error({
        message: 'Error',
        description: 'Something went wrong while sending your message.',
      });
    } finally {
      setFormDataLoadStatus(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      {showSuccessMessage && (
        <div className={styles.successOverlay}>
          <div className={styles.successModal}>
            <div className={styles.iconHeadingContainer}>
              <CheckCircleOutlined size={60} />
              <h2>Thank You! </h2>
            </div>
            <p>Your email is submitted, we will contact you shortly</p>
          </div>
        </div>
      )}

      {/* {(formDataLoadStatus || devPreview) && (
        <div className={styles.successOverlay}>
          <div className={styles.successModal}>
            <div className={styles.iconHeadingContainer}>
              <CheckCircleOutlined size={60} />
              <h2>Thank You! </h2>
            </div>
            <p>Your email is submitted, we will contact you shortly</p>
          </div>
        </div>
      )} */}
      <Form form={form} layout="vertical">
        {checkBox && (
          <Form.Item name="services" className={styles.servicesContainer}>
            <Checkbox.Group options={Object.values(SERVICE)} />
          </Form.Item>
        )}

        <Form.Item
          name="fullName"
          label={t('layout.forms.pricingForm.fields.names.fullName')}
          rules={[
            {
              required: true,
              message: t('layout.forms.pricingForm.fields.errors.fullName.notFilled'),
            },
            { max: 100, message: t('layout.forms.pricingForm.fields.errors.fullName.maxLength') },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="companyName"
          label={t('layout.forms.pricingForm.fields.names.companyName')}
          rules={[
            {
              required: true,
              message: t('layout.forms.pricingForm.fields.errors.companyName.notFilled'),
            },
            {
              max: 100,
              message: t('layout.forms.pricingForm.fields.errors.companyName.maxLength'),
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="companySize"
          label={t('layout.forms.pricingForm.fields.names.companySizeSelect')}
        >
          <Select>
            {SelectItems.map((item) => (
              <Option key={item.value} value={item.value}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="destination"
          label={t('layout.forms.pricingForm.fields.names.destinationCountry')}
        >
          <Select mode="multiple" maxTagTextLength={10} maxTagCount={1}>
            {countriesForSelect.map((country) => (
              <Option key={country.value} value={country.value}>
                {country.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please provide a valid email address' },
            {
              validator: (_, value) =>
                !value || isEmail(value)
                  ? Promise.resolve()
                  : Promise.reject('Invalid email address'),
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label={t('layout.forms.pricingForm.fields.names.phone')}
          rules={[
            {
              validator: (_, value) =>
                !value || isMobilePhone(value, undefined)
                  ? Promise.resolve()
                  : Promise.reject(t('layout.forms.pricingForm.fields.errors.phone')),
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="additionalInfo"
          label="Message"
          rules={[{ max: 1000, message: 'Message is too long' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <div className={styles.controlsContainer}>
            <Link className={styles.link} to={Routes.Security}>
              {t('layout.forms.pricingForm.controls.link')}
            </Link>
            <Button type="primary" onClick={handleSubmit} loading={formDataLoadStatus}>
              {t('layout.forms.pricingForm.controls.submit')}
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PricingForm;
