import React, { useState, useMemo } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { notification } from 'antd';

import PricingForm from '../../components/PricingForm/PricingForm';
import { ISubmittedPricingFormData } from '../../components/PricingForm/PricingForm';
import ThanksMessage from '../../components/ThanksMessage/ThanksMessage';
import { postQuoteFormData } from '../../api/forms';
import Benefits, { IBenefit } from '../../components/Benefits/Benefits';

import styles from './Pricing.module.scss';

const Pricing: React.FC = () => {
  const [t] = useTranslation();
  const [submitStatus, setSubmitStatus] = useState(false);

  const questions: IBenefit[] = useMemo(
    () => [
      {
        title: t('layout.pricing.questions.first.title'),
        description: t('layout.pricing.questions.first.text'),
      },
      {
        title: t('layout.pricing.questions.second.title'),
        description: t('layout.pricing.questions.second.text'),
      },
      {
        title: t('layout.pricing.questions.third.title'),
        description: t('layout.pricing.questions.third.text'),
      },
      {
        title: t('layout.pricing.questions.fourth.title'),
        description: t('layout.pricing.questions.fourth.text'),
      },
    ],
    [t],
  );

  const handleSubmit = (
    data: ISubmittedPricingFormData,
    captchaValue: string,
    finishedLoadCallback: () => void,
  ) => {
    postQuoteFormData({ ...data, recaptchaToken: captchaValue })
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
        <h1 className={styles.title}>{t('layout.pricing.form.title')}</h1>
        <p className={styles.text}>{t('layout.pricing.form.text')}</p>
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
      <div className={classNames(styles.footer)}>
        <Benefits formStatus={submitStatus} items={questions} />
      </div>
    </section>
  );
};
export default Pricing;
