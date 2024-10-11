const ValidateEmail = ({ email, setEmailError }) => {
  const emailRegular =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email && !email.match(emailRegular)
    ? setEmailError("Email not valid")
    : setEmailError("");
};

const ValidateFirstName = ({ firstName, setFirstNameError }) => {
  return firstName && firstName.length <= 2
    ? setFirstNameError("First name is too short")
    : firstName && firstName.length > 20
    ? setFirstNameError("Try to make short and meanfull")
    : setFirstNameError("");
};

const ValidateLastName = ({ lastName, setLastNameError }) => {
  return lastName && lastName.length <= 2
    ? setLastNameError("last name is too short")
    : lastName && lastName.length > 20
    ? setLastNameError("Try to make short and meanfull")
    : setLastNameError("");
};

export {ValidateEmail, ValidateFirstName, ValidateLastName}