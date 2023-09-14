
import React,{useState} from 'react'
import { useLocation,Link } from 'react-router-dom'; 
import Nav from './Nav';
export default function Detail() {
  
    const location=useLocation();
    console.log(location)
  return (
    <>
    <Nav/>
     <section>
        <div style={{backgroundImage:'contain', background:`url(${location.state.data})`,backgroundPosition:'center',width:'100%',height:'500px',backgroundRepeat:'no-repeat'}}>

        </div>
    </section> 

    </>
  )
}
