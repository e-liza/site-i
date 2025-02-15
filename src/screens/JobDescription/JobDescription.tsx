import React, { useEffect, useState } from 'react';
import { Link, useHistory, RouteChildrenProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { notification, Alert } from 'antd';

import JobPositionForm from '../../components/JobPositionForm/JobPositionForm';
import ThanksMessage from '../../components/ThanksMessage/ThanksMessage';
import { IJobDescriptionFormData } from '../../components/JobPositionForm/JobPositionForm';
import Plus from '../../components/Plus/Plus';
import { Routes } from '../../constants/routes';
import { postJobPositionFormData } from '../../api/forms';
import { IPositionDetailed, getPositionById } from '../../api/positions';
import Spinner from '../../components/Spinner/Spinner';

import styles from './JobDescription.module.scss';

const JobPosition: React.FC<RouteChildrenProps<{ id: string }>> = ({ match }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [jobData, setJobData] = useState<IPositionDetailed | null>(null);
  const [submitStatus, setSubmitStatus] = useState(false);
  const [t] = useTranslation();
  const history = useHistory();
  const id = match ? parseInt(match.params.id, 10) : null;

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      setError(null);
      getPositionById(id)
        .then(setJobData)
        .catch((err) => {
          setError(err);
          history.push(Routes.Careers);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      history.push(Routes.Careers);
    }
  }, [history, id]);

  const handleSubmit = (
    data: IJobDescriptionFormData,
    captchaValue: string,
    finishedLoadCallback: () => void,
  ) => {
    if (!id) {
      return;
    }

    postJobPositionFormData({
      ...data,
      positionId: id,
      recaptchaToken: captchaValue,
    })
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
    <React.Fragment>
      <section className={styles.jobSection}>
        <div className={styles.jobBlock}>
          {isLoading && <Spinner className={styles.spinner} />}
          {error && (
            <Alert message={error.message} type="error" showIcon className={styles.alert} />
          )}
          {jobData && (
            <>
              <div className={styles.jobTitleContainer}>
                <h1>{jobData.title}</h1>
              </div>
              <p className={styles.jobIntro}>{jobData.description}</p>
              <div className={styles.infoBlock}>
                <div className={styles.info}>
                  <span className={styles.location}>{`${jobData.city} / ${jobData.country}`}</span>
                  <span className={styles.employmentType}>{`${t(
                    'layout.jobDescription.emplType',
                  )}: ${jobData.employmentType}`}</span>
                </div>
              </div>
              <div
                className={styles.jobContent}
                dangerouslySetInnerHTML={{ __html: jobData.content }}
              />
            </>
          )}
        </div>
      </section>
      <section className={styles.applyJobSection}>
        <div className={styles.applyJobBlock}>
          <div className={styles.applyJobTitle}>
            <Plus className={styles.plus} />
            <span>{t('layout.jobDescription.applyJobSection.title')}</span>
          </div>
          {submitStatus ? (
            <div className={styles.submitMsg}>
              <ThanksMessage msgTitle={t('layout.thanksMessage.title2')} />
            </div>
          ) : (
            <div className={styles.applyJobForm}>
              <JobPositionForm onAccept={handleSubmit} />
            </div>
          )}
        </div>
      </section>
      <section className={styles.technologySection}>
        <div className={styles.technologyBlock}>
          <h2>{t('layout.jobDescription.technologySection.title')}</h2>
          <p>{t('layout.jobDescription.technologySection.text')}</p>
          <Link className={styles.link} to={Routes.AboutUs}>
            {t('layout.jobDescription.technologySection.link')}
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
};

export default JobPosition;
