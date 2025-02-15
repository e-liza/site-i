import React from 'react';
import { Form, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { useTranslation } from 'react-i18next';

import Button from '../Button/Button';

import styles from './Subscription.module.scss';

interface ISubscriptionData {
  email: string;
}

interface ISubscriptionProps extends FormComponentProps {
  onAccept(object: ISubscriptionData): void;
}

const SubscriptionComponent: React.FC<ISubscriptionProps> = ({ form, onAccept }) => {
  const { getFieldDecorator } = form;
  const [t] = useTranslation();

  const handleSubmit = () => {
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        onAccept(values);
      }
    });
  };

  return (
    <Form className={styles.subscription}>
      <Form.Item extra={t('layout.subscription.inputField.extra')}>
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: t('layout.form.fields.errors.email.notCorrect'),
            },
            {
              required: true,
              message: t('layout.form.fields.errors.email.notFilled'),
            },
          ],
        })(
          <Input
            className={styles.inputField}
            placeholder={t('layout.subscription.inputField.name')}
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button
          className={styles.signButton}
          name={t('layout.subscription.signUpButton')}
          onClick={handleSubmit}
        />
      </Form.Item>
    </Form>
  );
};
const Subscription = Form.create<ISubscriptionProps>({ name: 'subscription' })(
  SubscriptionComponent,
);

export default Subscription;
