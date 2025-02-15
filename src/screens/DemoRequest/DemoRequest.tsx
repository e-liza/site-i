import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { notification } from 'antd';
import classNames from 'classnames';

import PricingForm from '../../components/PricingForm/PricingForm';
import { ISubmittedPricingFormData } from '../../components/PricingForm/PricingForm';
import ThanksMessage from '../../components/ThanksMessage/ThanksMessage';
import { postDemoFormData } from '../../api/forms';

import Benefits from './component/Benefits/Benefits';
import styles from './DemoRequest.module.scss';

const DemoRequest: React.FC = () => {
  const [t] = useTranslation();
  const [submitStatus, setSubmitStatus] = useState(false);

  const handleSubmit = (
    data: ISubmittedPricingFormData,
    captchaValue: string,
    finishedLoadCallback: () => void,
  ) => {
    postDemoFormData({ ...data, recaptchaToken: captchaValue })
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
        <h1 className={styles.title}>{t('layout.demoRequest.form.title')}</h1>
        <p className={styles.text}>{t('layout.demoRequest.form.text')}</p>
      </div>
      <div className={styles.content}>
        {submitStatus ? (
          <div className={styles.submitMsg}>
            <ThanksMessage msgTitle={t('layout.thanksMessage.title1')} />
          </div>
        ) : (
          <div className={styles.form}>
            <PricingForm checkBox={false} onAccept={handleSubmit} />
          </div>
        )}
      </div>
      <div className={classNames(styles.footer, { [styles.benefitsFormSubmited]: submitStatus })}>
        <Benefits />
      </div>
    </section>
  );
};
export default DemoRequest;
