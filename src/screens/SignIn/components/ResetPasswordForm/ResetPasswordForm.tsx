// import React, { useCallback, useEffect, useState } from 'react';

// import Form, { useForm } from 'antd/lib/form/Form';
// import { useHistory } from 'react-router';

// import { ASYNC_STATUS } from 'src/utils/hooks';
// import Input from 'src/components/Input/Input';
// import FormItem from 'src/components/FormItem/FormItem';
// import { IPasswordRecoveryDto, passwordRecoveryApi } from 'src/api/password-recovery';
// import { DEFAULT_ERROR_MESSAGE } from 'src/constants/common';
// import { CODES } from 'src/constants/codes';
// import ThankYouModal from 'src/components/ThankYouModal/ThankYouModal';
// import Button from 'src/components/Button/Button';
// import useToggler from 'src/hooks/useToggler';
// import { Routes } from 'src/constants/routes';

// import styles from './ResetPasswordForm.module.scss';

// const REDIRECT_TIME = 5000;

// interface IResetPasswordFormProps {
//   onClose: () => void;
// }

// const ResetPasswordForm: React.FC<IResetPasswordFormProps> = ({ onClose }) => {
//   const [form] = useForm();
//   const [isOpen, toggleThankYouModal] = useToggler(false);
//   const [status, setStatus] = useState(ASYNC_STATUS.Idle);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [disabled, setDisabled] = useState(true);
//   const history = useHistory();

//   const handleFinish = useCallback(async (values: IPasswordRecoveryDto) => {
//     try {
//       setStatus(ASYNC_STATUS.Pending);
//       await passwordRecoveryApi.requestPasswordReset({
//         email: values.email,
//       });
//       setStatus(ASYNC_STATUS.Success);
//     } catch (error) {
//       setStatus(ASYNC_STATUS.Error);
//       if (error?.code === CODES.SERVER.NOT_FOUND) {
//         setErrorMessage('There are no users with the entered email address');
//       } else {
//         setErrorMessage(error?.message || DEFAULT_ERROR_MESSAGE);
//       }
//     }
//   }, []);

//   const handleFieldsChange = useCallback(() => {
//     setErrorMessage(null);

//     const requiredFieldList = ['email'];
//     const isAllFieldsTouched = form.isFieldsTouched(requiredFieldList, true);
//     const fieldsError = form.getFieldsError();
//     const hasErrors = fieldsError.some(({ errors }) => errors.length);

//     setDisabled(!isAllFieldsTouched || hasErrors);
//   }, [form]);

//   const redirectToSignIn = useCallback(() => {
//     history.push(Routes.SignIn);
//     onClose();
//   }, [history, onClose]);

//   useEffect(() => {
//     let timeoutId: NodeJS.Timeout;
//     if (status === ASYNC_STATUS.Success) {
//       toggleThankYouModal();
//       timeoutId = setTimeout(redirectToSignIn, REDIRECT_TIME);
//     }
//     return () => {
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//     };
//   }, [redirectToSignIn, status, toggleThankYouModal]);

//   return (
//     <div className={styles.root}>
//       <div className={styles.content}>
//         <h1 className={styles.title}>Reset Password</h1>
//         <p className={styles.description}>
//           Enter the email address that was used to create your account and we will send you
//           instructions to reset your password.
//         </p>
//         <Form
//           form={form}
//           className={styles.form}
//           onFieldsChange={handleFieldsChange}
//           onFinish={handleFinish}
//         >
//           <FormItem
//             label="Email"
//             name="email"
//             className={styles.formItem}
//             {...(errorMessage ? { validateStatus: 'error', help: errorMessage } : {})}
//             rules={[
//               {
//                 required: true,
//                 message: 'Enter your email',
//               },
//               {
//                 type: 'email',
//                 message: 'Please input a valid email',
//               },
//             ]}
//           >
//             <Input placeholder="Enter your email" />
//           </FormItem>
//           <div className={styles.actions}>
//             <Button type="default" className={styles.cancelButton} onClick={onClose}>
//               Cancel
//             </Button>
//             <Button
//               className={styles.submitButton}
//               type={disabled ? 'ghost' : 'primary'}
//               htmlType="submit"
//               loading={status === ASYNC_STATUS.Pending}
//               disabled={disabled}
//             >
//               Submit
//             </Button>
//           </div>
//         </Form>
//         <ThankYouModal
//           fullPage
//           isOpen={status === ASYNC_STATUS.Success && isOpen}
//           message="Email with reset instructions was sent to the specified email address. Please check your email"
//           messageClassName={styles.message}
//           onClose={redirectToSignIn}
//         />
//       </div>
//     </div>
//   );
// };

// export default ResetPasswordForm;
import React, { useState } from 'react';
import { Form } from 'antd';

import Button from '../../../../components/Button/Button'; // Adjusted path
import Input from '../../../../components/Input/Input'; // Adjusted path

import styles from './ResetPasswordForm.module.scss';

const ResetPasswordForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [form] = Form.useForm();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = () => {
    // Mockup logic: Always show error that account doesn't exist
    setErrorMessage('This email address does not exist.');
  };

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.title}>Reset Password</h1>
        <p className={styles.description}>
          Enter the email address that was used to create your account and we will send you
          instructions to reset your password.
        </p>
        <Form form={form} className={styles.form} onFinish={handleSubmit}>
          <Form.Item
            label="Email"
            name="email"
            className={styles.formItem}
            {...(errorMessage ? { validateStatus: 'error', help: errorMessage } : {})}
            rules={[
              {
                required: true,
                message: 'Enter your email',
              },
              {
                type: 'email',
                message: 'Please input a valid email',
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <div className={styles.actions}>
            {/* Cancel button with onClick */}
            <Button
              type="default" // Use default type
              className={styles.cancelButton}
              onClick={onClose} // Pass onClick handler here for cancel button
            >
              Cancel
            </Button>

            {/* Submit button without onClick (it will trigger form submission automatically) */}
            <Button
              className={styles.submitButton}
              type={disabled ? 'default' : 'primary'}
              htmlType="submit" // This automatically triggers the form submission
              disabled={disabled}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
