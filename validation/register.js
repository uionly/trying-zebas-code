const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    //check name
    if (Validator.isEmpty(data.name)) {
        errors.name = " :   Name field is required";
    }
    // check email
    if (Validator.isEmpty(data.email)) {
        errors.email = " :   Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = " :   Email is invalid";
    }
    // check password
    if (Validator.isEmpty.password){
        errors.password = " :   Password field is required";
    }
    if(!Validator.isLength(data.password,{min:6, max:30})){
        errors.password = " :   Password min 6 characters";
    }
    return{
        errors,
        isValid: isEmpty(errors)
    };

};