import React,{useState} from 'react'
import Home from './Nav';

export default function Form() {
    const [data,setData]= useState();
    const submitHandler=(e)=>{
        e.preventDefault();
        const formData = new FormData();
          formData.append('file',data)
        fetch('/api',{
          method:'POST',
          body:formData
        }).then(res => res.json()).then(data=>console.log(data)).catch((error)=>console.log(error))
      }
      const changeHandler=(e)=>{
        const selectedFile= e.target.files[0];
           setData(selectedFile)
       }
     
  return (
    <>
    <Home/>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'500px'}}>
      <form onSubmit={submitHandler}encType="multipart/form-data">
      <input type="file" name='file' onChange={changeHandler}/>
      <button type='submit' value='upload'>upload</button>
    </form>
    </div> 

    </>
  )
}
