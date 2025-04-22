import React from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import Button from '../Button/Button';

import styles from './Subscription.module.scss';

interface ISubscriptionData {
  email: string;
}

interface ISubscriptionProps {
  onAccept(object: ISubscriptionData): void;
}

const Subscription: React.FC<ISubscriptionProps> = ({ onAccept }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      onAccept(values);
    } catch (errorInfo) {
      console.error('Validation Failed:', errorInfo);
    }
  };

  return (
    <Form form={form} className={styles.subscription}>
      <Form.Item
        name="email"
        extra={t('layout.subscription.inputField.extra')}
        rules={[
          {
            type: 'email',
            message: t('layout.form.fields.errors.email.notCorrect'),
          },
          {
            required: true,
            message: t('layout.form.fields.errors.email.notFilled'),
          },
        ]}
      >
        <Input
          className={styles.inputField}
          placeholder={t('layout.subscription.inputField.name')}
        />
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

export default Subscription;
