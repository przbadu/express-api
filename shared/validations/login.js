import validator from 'validator';
import { isEmpty } from 'lodash';

export default function validateInput(data) {
  let errors = {};

  if (validator.isEmpty(data.identifier)) {
    errors.identifier = "is required field";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "is required field";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
