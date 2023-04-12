const validate = (userData) => {
    const error = {};
    const regexEmail =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    // Validacion de Email
    if (!regexEmail.test(userData.email)) error.email = "Email no Valido";
    if (userData.email > 35) error.email = "el email debe ser mas corto";

    //Validacion Password
    if (userData.password.length < 6 || userData.password.length > 10) {
        error.password = "Debe contener entre 6 a 10 caracteres";
    }
    if (!/\d/.test(userData.password)) {
        error.password = "Debe contener al menos un numero";
    }

    return error;
};

export default validate;
