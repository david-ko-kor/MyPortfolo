import React,{useState,useEffect} from 'react'
import List from './List'
import Nav from './Nav';

export default function FormList() {
    const [photos,setPhotos]= useState([]);
 
    useEffect(()=>{
    fetch('/data').then(res=>res.json().then(data=>setPhotos(data)))
    
    },[])
    console.log(photos)
     const {photodata}=photos
    
     console.log(photodata)
  return (
    <>
    <Nav/>
     <ul className='phto' style={{display:'flex',width:'1200px', flexWrap:'wrap',justifyContent:'center',padding:'0',marginTop:'50px'}}>
    {photodata&&photodata.length>0&&
      photodata.map((item,index)=><List key={index} name={item.name} url={item.url}/>)
   
    }
    </ul>
  
    </>
  )
}
