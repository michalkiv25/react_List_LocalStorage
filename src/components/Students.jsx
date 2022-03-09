import React, {useEffect,useState} from 'react';
import {BsFillTrashFill} from 'react-icons/bs'; //icon
import {FiEdit2} from 'react-icons/fi';//icon

// import from project
import {dataApi} from '../data/DataApi'; // function api
import Paginate from './Paginate/Paginate';
import DisplayStudent from './DisplayStudent';
import EditStudent from './EditStudent';
import useFrom from './useFrom';


function Students() {
  // useState && useForm=function global
  const [dataListStudent, setDataListStudent] = useState(getDateLocalStorege()) // All list data student
  const [idStudent, setidStudent] = useState(null)
  const [pageinput,setpageinput]= useState(false)
  const {handleChange,handleSubmit,values,errors,setValues,isSubmit} = useFrom(dataListStudent,setDataListStudent,idStudent,setpageinput);
 

  //pagintaion
  const [pageNumber,setpageNumber]= useState(0)
  const usersPerPage= 6; // min 6 on Browser
  const pageVisit = pageNumber * usersPerPage;
  const pageCount = Math.ceil(dataListStudent.length / usersPerPage)

  //All function 
  //pagintaion- change page
  const pageChange = ({selected})=>{
    setpageNumber(selected)
  }

  //Get Date from LocalStorege
  function getDateLocalStorege(){
    try{
      const arrayOfData= localStorage.getItem("studentsList")
      const data = (arrayOfData !== null) ? JSON.parse(arrayOfData) : [];
      return data
    }catch(error){
      console.log(error)
    }
  }

  //set Date from LocalStorege- ui Browser
  const setDataLocalStorege = async () => {
    try{
      const data_api= await dataApi()
      let date_api_add_key = data_api.map((student,index)=>{
          return {//Add ket select and id for data
          select: false,
          id:index + 1,
          firstName: student.firstName, 
          lastName:student.lastName,
          city:student.city,
          age:student.age, 
          gender:student.gender
        }
      })
      localStorage.setItem("studentsList", JSON.stringify(date_api_add_key))
    }catch(err){
      console.log(err)
    }
  }

    //Display list data on Browser in table
    const displayStudent= dataListStudent
    .slice(pageVisit, pageVisit + usersPerPage )
    .map((student,index)=>{
        return (
            <tr key={index}>
                <td>
                  <input 
                    className='checkbox'
                    type="checkbox" 
                    onChange={(e)=>{ //chek if key= select is true- for function delete
                      let checked= e.target.checked;
                      setDataListStudent(
                        dataListStudent.map((data)=>{
                          if(data.id === student.id ){
                            data.select = checked;
                          }
                          return data;
                        })
                      )
                    }}>
                  </input>
                </td>
                <th>{student.firstName}</th>
                <td>{student.lastName}</td>
                <td>{student.city}</td>
                <td>{student.age}</td>
                <td>{student.gender}</td>
                <td>
                    <button type="button" className="btn btn-primary" onClick={()=>edit(student.id)}>
                      <FiEdit2></FiEdit2>
                    </button>
                </td>
            </tr>
        )
    });

    //edit student
    const edit= (id)=>{
      let editDate= dataListStudent.find((item)=>{
        setidStudent(id)
        return item.id === id
      })
      setValues(editDate)
      setpageinput(true)
    }


    //Function Delete
    const hendeleDelete= ()=>{
      let student_after_delete=dataListStudent.filter(student => student.select === false);
      setDataListStudent(student_after_delete)
      localStorage.setItem("studentsList", JSON.stringify(student_after_delete))
    }

    //componentDidMount and componentDidUpdate-dataListStudent only
    useEffect(()=>{
      setDataLocalStorege()
    },[dataListStudent])
    

  return (
    <div className='container'>
        <button 
          type="button" 
          onClick={hendeleDelete} 
          className="btn btn-primary delete">
          <BsFillTrashFill></BsFillTrashFill> Delete
        </button>
        <table className="table table-hover">
            {/*Title table */}
            <thead className="table-light">
                <tr>
                    <th className='title_table'>
                        {/*All checkbox true*/}
                        <input 
                          type="checkbox" 
                          className='checkbox'
                          onChange={(e)=>{
                            let checked = e.target.checked;
                            setDataListStudent(
                              dataListStudent.map( item => {
                                item.select= checked
                                return item
                              })
                            )
                          }}>
                        </input>
                    </th>
                    <th className='title_table'>First Name</th>
                    <th className='title_table'>Last Name</th>
                    <th className='title_table'>City</th>
                    <th className='title_table'>Age</th>
                    <th className='title_table'>Gender</th>
                    <th className='title_table'>Edit</th>
                </tr>
            </thead>
            <tbody> 
               {/*All data */}
              <DisplayStudent displayStudent={displayStudent}></DisplayStudent>
            </tbody>
    </table>
    {/*Paginate */}
    <Paginate pageCount={pageCount} pageChange={pageChange}></Paginate> 
    {pageinput &&(
    <EditStudent
    setpageinput={setpageinput}
      handleSubmit={handleSubmit}
      handleChange={handleChange} 
      errors={errors}
      setValues={setValues}
      values={values}>
    </EditStudent>
    )}
 
    </div>
   
  )
}

export default Students