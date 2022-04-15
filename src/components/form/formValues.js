import * as yup from 'yup';
const initialValues = {
  name: '',
  phone: '',
  address: '',
  city: '',
  state: '',
}

const validationSchema = yup.object().shape({
  name: yup.string()
    .min(3, 'Escreva um nome maior')
    .required('Campo obrigatório'),

  phone: yup.number()
      .required('Campo obrigatório'),

  address: yup.string()
    .min(10, 'Escreva o endereço completo')
    .required('Campo obrigatório'),

  city: yup.string()
   .required('Campo obrigatório'),

  state: yup.string()
    .required('Campo obrigatório'),
})

export {
  initialValues,
  validationSchema,
}