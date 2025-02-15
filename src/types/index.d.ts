interface IRecaptchaOptions {
  useRecaptchaNet: boolean;
}

export declare global {
  interface Window {
    recaptchaOptions: IRecaptchaOptions;
    grecaptcha?: object;
  }
}
