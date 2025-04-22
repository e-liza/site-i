// import React, { useCallback, useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { Form } from 'antd';
// import { Alert } from 'antd';
// import { useHistory } from 'react-router';

// import FullPageModal from 'src/components/FullPageModal/FullPageModal';
// import Link from 'src/components/Link/Link';
// import { Routes } from 'src/constants/routes';

// import Input from '../../../../components/Input/Input';
// import Button from '../../../../components/Button/Button';
// import Checkbox from '../../../../components/Checkbox/Checkbox';
// import { IGlobalState } from '../../../../store';
// import { authSignIn } from '../../../../store/auth/slice';
// import ResetPasswordForm from '../ResetPasswordForm/ResetPasswordForm';

// import styles from './SignInForm.module.scss';

// export interface IFormData {
//   email: string;
//   password: string;
//   remember: boolean;
// }

// export interface IValidateErrorEntity {
//   values: IFormData;
//   errorFields: {
//     name: (string | number)[];
//     errors: string[];
//   }[];
//   outOfDate: boolean;
// }

// const SignInForm: React.FC = () => {
//   const history = useHistory();
//   const [isOpen, setIsOpen] = useState(false);
//   const [form] = Form.useForm();
//   const dispatch = useDispatch();
//   const { fetching, error } = useSelector((state: IGlobalState) => state.auth);

//   const dispatchFormData = (data: IFormData) => {
//     dispatch(authSignIn(data));
//   };

//   const openResetModal = useCallback(() => {
//     setIsOpen(true);
//   }, []);

//   const closeResetModal = useCallback(() => {
//     setIsOpen(false);
//   }, []);

//   useEffect(() => {
//     if (history.location.hash === '#reset') {
//       openResetModal();
//     }
//   }, [history.location.hash, openResetModal]);

//   useEffect(() => {
//     if (!isOpen) {
//       history.push({ hash: '' });
//     }
//   }, [history, isOpen]);

//   return (
//     <Form
//       form={form}
//       name="sign-in-form"
//       initialValues={{ remember: true }}
//       onFinish={dispatchFormData}
//       className={styles.form}
//     >
//       <Form.Item
//         label="Email"
//         name="email"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your email!',
//             type: 'email',
//             transform: (value) => value.trim(),
//           },
//         ]}
//       >
//         <Input size="large" placeholder="Enter your email" className={styles.inputField} />
//       </Form.Item>
//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[{ required: true, message: 'Please input your password!' }]}
//       >
//         <Input
//           size="large"
//           type="password"
//           placeholder="Enter your password"
//           className={styles.inputField}
//         />
//       </Form.Item>
//       <Form.Item>
//         <div className={styles.button}>
//           <Button
//             type="primary"
//             htmlType="submit"
//             className={styles.signInButton}
//             loading={fetching}
//             size="large"
//           >
//             Sign In
//           </Button>
//           {error && (
//             <Alert message={error.message} type="error" className={styles.alert} showIcon />
//           )}
//         </div>
//       </Form.Item>
//       <div className={styles.checkboxContainer}>
//         <Form.Item name="remember" valuePropName="checked">
//           <Checkbox className={styles.rememberCheckbox}>Remember me</Checkbox>
//         </Form.Item>
//         <Link
//           to={{
//             pathname: Routes.SignIn,
//             hash: 'reset',
//           }}
//           className={styles.resetPasswordLink}
//           onClick={openResetModal}
//         >
//           Reset password
//         </Link>
//       </div>
//       <FullPageModal isOpen={isOpen} onClose={closeResetModal}>
//         <ResetPasswordForm onClose={closeResetModal} />
//       </FullPageModal>
//     </Form>
//   );
// };

// export default SignInForm;
import React, { useState } from 'react';
import { Form } from 'antd';
import { Alert } from 'antd';

import Button from '../../../../components/Button/Button'; // Adjusted path
import Input from '../../../../components/Input/Input'; // Adjusted path
import CheckBox from '../../../../components/CheckBox/CheckBox'; // Match the casing exactly
import Link from '../../../../components/Link/Link'; // Adjusted path
import FullPageModal from '../../../../components/FullPageModal/FullPageModal'; // Adjusted path
import ResetPasswordForm from '../ResetPasswordForm/ResetPasswordForm'; // Adjusted path
import { Routes } from '../../../../constants/routes'; // Adjust path accordingly

import styles from './SignInForm.module.scss';

export interface IFormData {
  email: string;
  password: string;
  remember: boolean;
}

const SignInForm: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [form] = Form.useForm();

  const handleSubmit = (values: IFormData) => {
    // Always show an error message for the mockup
    setErrorMessage('This email address does not exist.');
  };

  const [isOpen, setIsOpen] = useState(false);

  const openResetModal = () => {
    setIsOpen(true);
  };

  const closeResetModal = () => {
    setIsOpen(false);
  };

  return (
    <Form
      form={form}
      name="sign-in-form"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
      className={styles.form}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
            type: 'email',
            transform: (value) => value.trim(),
          },
        ]}
      >
        <Input size="large" placeholder="Enter your email" className={styles.inputField} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input
          size="large"
          type="password"
          placeholder="Enter your password"
          className={styles.inputField}
        />
      </Form.Item>
      <Form.Item>
        <div className={styles.button}>
          <Button type="primary" htmlType="submit" className={styles.signInButton} size="large">
            Sign In
          </Button>
          {errorMessage && (
            <Alert message={errorMessage} type="error" className={styles.alert} showIcon />
          )}
        </div>
      </Form.Item>
      <div className={styles.checkboxContainer}>
        <Form.Item name="remember" valuePropName="checked">
          <CheckBox name="remember" className={styles.rememberCheckbox}>
            Remember me
          </CheckBox>
        </Form.Item>
        <Link
          to={{
            pathname: Routes.SignIn,
            hash: 'reset',
          }}
          className={styles.resetPasswordLink}
          onClick={openResetModal}
        >
          Reset password
        </Link>
      </div>
      <FullPageModal isOpen={isOpen} onClose={closeResetModal}>
        <ResetPasswordForm onClose={closeResetModal} />
      </FullPageModal>
    </Form>
  );
};

export default SignInForm; // This is the change: export default SignInForm.
