export default function validateInfo(user) {
    let errors = {};
  
    if (!user.firstName.trim()) {
      errors.firstName = 'FirstName required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }

    if (!user.lastName.trim()) {
        errors.lastName = 'LastName required';
      } 
  
    if (!user.emailId) {
      errors.emailId = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(user.emailId)) {
      errors.emailId = 'Email address is invalid';
    }

    if (!user.mobileNo) {
      errors.mobileNo = 'Password is required';
    } else if (user.mobileNo.length > 1 && user.mobileNo.length < 10) {
      errors.mobileNo = 'Phone no. needs to be 10 characters long';
    }
  
    if (!user.cfpwd) {
      errors.cfpwd = 'Password is required';
    } else if (user.cfpwd !== user.password){
      errors.cfpwd = 'Passwords do not match';
    }
    return errors;
  }