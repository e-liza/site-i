import React, { useMemo } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { ReactComponent as PlusIcon } from '../../../../assets/solutions/plus-icon.svg';
import advantageImage from '../../../../assets/careers/join-us.jpg';
import ObjectFitImage from '../../../../components/ObjectFitImage/ObjectFitImage';

import styles from './Advantages.module.scss';

const advantages: string[] = [
  'layout.careers.benefitsSection.firstBenefits.firstBenefit',
  'layout.careers.benefitsSection.firstBenefits.secondBenefit',
  'layout.careers.benefitsSection.firstBenefits.thirdBenefit',
  'layout.careers.benefitsSection.secondBenefits.firstBenefit',
  'layout.careers.benefitsSection.secondBenefits.secondBenefit',
  'layout.careers.benefitsSection.secondBenefits.thirdBenefit',
];

const Advantages = () => {
  const [t] = useTranslation();
  return (
    <div className={styles.root}>
      {useMemo(
        () =>
          advantages.map((advantage, index) => (
            <div key={advantage} className={classNames(styles.element, styles[`element${index}`])}>
              <div className={styles.advantage}>
                <PlusIcon className={styles.icon} />
                <div className={styles.title}>{t(advantage)}</div>
              </div>
            </div>
          )),
        [t],
      )}
      <div className={styles.imageContainer}>
        <ObjectFitImage
          fit="cover"
          position="bottom"
          className={styles.image}
          src={advantageImage}
          alt={t(advantages[0])}
        />
      </div>
    </div>
  );
};

export default Advantages;
