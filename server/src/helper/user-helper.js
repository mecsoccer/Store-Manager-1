const Roles = [
  'admin',
  'agent',
];

const Validation = {
  validateRole(validatedUser) {
    if (!validateUser.value.role) {
      validateUser.errors.push('"role" is required');
      return validateUser;
    }
    if (!Roles.includes(validateUser.value.role)) {
      validateUser.errors.push('"role" should be one of: '+Roles.join(","));
    }
  }

  validateFullName(validateUser) {
    if (!validateUser.value.fullname) {
      validateUser.errors.push('"fullname" is required');
      return validateUser;
    }
    if (validateUser.value.fullname.length < 5) {
      validateUser.errors.push('"fullname" length must be at least 5 characters long');
    }
    if (validateUser.value.fullname.length > 15) {
      validateUser.errors.push('"fullname" length must be at most 15 characters long');
    }
    return validateUser;
  },
  validateEmail(validateUser) {
    if (!validateUser.value.email) {
      validateUser.errors.push('"email" is required');
      return validateUser;
    }
    if (validateUser.value.email.length < 10) {
      validateUser.errors.push('"email" must be greater than 10');
    }
    return validateUser;
  },
  validate(user) {
    const validateUser = {};
    validateUser.errors = [];
    validateUser.value = user;
    this.validateRole(validateUser);
    this.validateFullName(validateUser);
    this.validateEmail(validateUser);
    return validateUser;
  },
};

export default Validation;
