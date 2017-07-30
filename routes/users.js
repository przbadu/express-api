import express from 'express';
import validator from 'validator';
import { isEmpty } from 'lodash';

let router = express.Router();

function validateInput(data) {
  let errors = {};

  if (validator.isEmpty(data.username)) {
    errors.username = "is required"
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'is required';
  }

  if (!validator.isEmail(data.email)) {
    errors.email = 'invalid email!';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'is required';
  }

  if (validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'is required';
  }

  if (!validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = "Passwords must match";
  }

  if (validator.isEmpty(data.timezone)) {
    errors.timezone = 'is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}


router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if(!isValid) {
    res.status(400).json(errors);
  }
});

export default router;
