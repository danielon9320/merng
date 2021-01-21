module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username no debe estar vacio";
  }

  if (email.trim() === "") {
    errors.username = "email no debe estar vacio";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Ingrese un email valido";
    }
  }
  if (password.trim() === "") {
    errors.password = "La contraseña no debe estar vacia";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Las contraseñas deben coincidir";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username no debe estar vacio";
  }
  if (password.trim() === "") {
    errors.username = "La contraseña no debe estar vacio";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
