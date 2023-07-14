import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  model: yup.string().required(),
  price: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
});
