import { ISubmittedPricingFormData } from '../components/PricingForm/PricingForm';
import { IJobDescriptionFormData } from '../components/JobPositionForm/JobPositionForm';
import objectToFormData, { Serializable } from '../utils/object-to-form-data';
import removeEmptyStrings from '../utils/remove-empty-strings';

import axios from './axios';

export const postDemoFormData = (formData: Serializable<ISubmittedPricingFormData>) => {
  const data = removeEmptyStrings(formData);
  return axios.post<ISubmittedPricingFormData>('/cms/forms/demo', data);
};

export const postQuoteFormData = (formData: Serializable<ISubmittedPricingFormData>) => {
  const data = removeEmptyStrings(formData);
  return axios.post<ISubmittedPricingFormData>('/cms/forms/quote', data);
};

export const postServiceFormData = (formData: Serializable<ISubmittedPricingFormData>) => {
  const data = removeEmptyStrings(formData);
  return axios.post<ISubmittedPricingFormData>('/cms/forms/service', data);
};

export const postJobPositionFormData = (fromData: Serializable<IJobDescriptionFormData>) => {
  const convertedData = objectToFormData(fromData);
  return axios.post<IJobDescriptionFormData>('/cms/forms/position', convertedData);
};
