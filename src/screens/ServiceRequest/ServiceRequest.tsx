import React, { useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { notification } from 'antd';

import PricingForm from '../../components/PricingForm/PricingForm';
import { ISubmittedPricingFormData } from '../../components/PricingForm/PricingForm';
import ThanksMessage from '../../components/ThanksMessage/ThanksMessage';
import serviceRequest from '../../assets/service-request/service-request.jpg';
import { postServiceFormData } from '../../api/forms';
import ObjectFitImage from '../../components/ObjectFitImage/ObjectFitImage';

import styles from './ServiceRequest.module.scss';

const ServiceRequest: React.FC = () => {
  const [t] = useTranslation();
  const [submitStatus, setSubmitStatus] = useState(false);

  const handleSubmit = (
    data: ISubmittedPricingFormData,
    captchaValue: string,
    finishedLoadCallback: () => void,
  ) => {
    postServiceFormData({ ...data, recaptchaToken: captchaValue })
      .then(() => {
        setSubmitStatus(true);
      })
      .catch((error) => {
        notification.error({
          message: t(`common.error.${error.code}`),
          description: error.message,
        });
        finishedLoadCallback();
      });
  };

  return (
    <section className={styles.root}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('layout.serviceRequest.form.title')}</h1>
        <p className={styles.text}>{t('layout.serviceRequest.form.text')}</p>
      </div>
      <div className={styles.content}>
        {submitStatus ? (
          <div className={styles.submitMsg}>
            <ThanksMessage msgTitle={t('layout.thanksMessage.title1')} />
          </div>
        ) : (
          <div className={styles.form}>
            <PricingForm checkBox={true} onAccept={handleSubmit} />
          </div>
        )}
      </div>
      <div className={classNames(styles.footer)}>
        <ObjectFitImage
          fit="cover"
          className={styles.img}
          src={serviceRequest}
          alt={t('layout.serviceRequest.form.title')}
        />
      </div>
    </section>
  );
};
export default ServiceRequest;
