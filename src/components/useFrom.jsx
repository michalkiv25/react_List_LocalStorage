import { useState,useEffect } from 'react';
import validate from './validate';

const useFrom = (
  dataListStudent,
  setDataListStudent,
  idStudent,
  setpageinput
  )=>{

    const [errors, setErrors] = useState({}); // obg error
    const [isSubmit,setisSubmit]=useState(false)
    const [values,setValues]= useState({ // value for input
        firstName:'',
        lastName:'',
        city:'',
        age: '',
        gender:'',
    });

    const handleChange= event =>{ // clickChench-value
        const { name, value } = event.target;
        setValues({
          ...values,
          [name]: value //[event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => { //submit form
      event.preventDefault();
      setErrors(validate(values))
      setisSubmit(true)
    };

      useEffect(()=>{

        if(Object.keys(errors).length === 0 && isSubmit ){
          let newrowListStudent = dataListStudent
          newrowListStudent[idStudent - 1] = values;
          setDataListStudent(newrowListStudent);
          localStorage.setItem("studentsList", JSON.stringify(newrowListStudent))
          setpageinput()  
        }
      },[errors])


  return {handleChange,values,handleSubmit,errors,isSubmit,setValues}

};

export default useFrom;