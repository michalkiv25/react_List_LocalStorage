import React from 'react';
import '../App.css'


function EditStudent({
    handleSubmit,
    values,
    handleChange,
    errors,
    setpageinput
}){
        
  return (
    <div className="container my-3">
        <form onSubmit={handleSubmit} >
            <div className="form-group">
                <label>First Name</label>
                <input
                    value={values.firstName}
                    name="firstName"
                    type="text"
                    className="form-control form-control-sm"
                    onChange={handleChange}
                />
            </div>

            <span className="form-text span">{errors.firstName}</span>

            <div className="form-group">
                <label>Last Name</label>
                <input
                value={values.lastName}
                name="lastName"
                type="text"
                className="form-control form-control-sm"
                onChange={handleChange}
                />
            </div>

            <span className="form-text span">{errors.lastName}</span>

            <div className="form-group">
                <label>City</label>
                <input
                value={values.city}
                name="city"
                type="text"
                className="form-control form-control-sm"
                onChange={handleChange}
                 />
            </div>

            <span className="form-text span">{errors.city}</span>

            <div className="form-group">
                <label>Age</label>
                <input
                value={values.age}
                name="age"
                type="text"
                className="form-control form-control-sm"
                onChange={handleChange}
                />
            </div>

            <span className="form-text span">{errors.age}</span>

            <div className="form-group">
                <label>Gender</label>
                <input
                value={values.gender}
                name="gender"
                type="text"
                className="form-control form-control-sm"
                onChange={handleChange}
                />
            </div>

            <span className="form-text span" >{errors.gender}</span>

            <div className='buttonInput'>
                <button type="submit" className="btn btn-primary btn-sm">Edit</button>
                <button type="submit" className="btn btn-primary btn-sm cencel" onClick={()=>{setpageinput()}}>Cencel</button>
            </div>
            
        </form>
    </div>
  )
}

export default EditStudent