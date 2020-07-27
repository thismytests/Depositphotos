import * as yup from 'yup';

export default yup.object().shape({
  inputField: yup
    .date(),
  outputField: yup
    .date()
});
