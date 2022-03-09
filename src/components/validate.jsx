export default function validate(values){
    let errors={};
  
    if (!values.firstName) {
      errors.firstName = 'firstName required';
    } else if (values.firstName.length <= 2) { // return true/false
      errors.firstName = 'firstName is invalid';
    }

    if (!values.lastName) {
      errors.lastName = 'lastName is required';
    } else if (values.lastName.length <= 2) {
      errors.lastName = 'lastName needs to be 2 characters or more';
    }

    if (!values.city) {
      errors.city = 'city is required';
    } else if (values.city.length <= 2) {
      errors.city = 'city needs to be 2 characters or more';
    }

    if (!values.age) {
      errors.age = 'lastName is required';
    } else if (values.age.length <= 10) {
      errors.age = 'lastName needs to be 10 characters or more';
    }
    
    return errors;
};
