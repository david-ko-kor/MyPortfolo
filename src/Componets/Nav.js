import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React,{useState} from 'react'
import { useLocation,Link } from 'react-router-dom'; 
function Home() {
   const location=useLocation();
 console.log(location)
  return (
    <>
      <Navbar bg="primary" style={{height:'100px'}} data-bs-theme="dark">

        <Container style={{width:'70%'}}>
         
          <Navbar.Brand href="/">Goremi</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/post">Post</Nav.Link>
            <Nav.Link href="/data">Portfolio</Nav.Link>
          </Nav>
        
        </Container>
    
      </Navbar>
      <br />

    </>
  );
}

export default Home;


// import React,{useState} from 'react'
// import { useLocation,Link } from 'react-router-dom'; 
// export default function Home() {
//  const location=useLocation();
//  console.log(location)
//  const [urldata,setData]=useState(location)
//     //    const location =useLocation()
//     //    console.log(location.state)
//     // const location = useLocation();
//     // const user = location.state.user;
//     // console.log(user)
  
//   return (
//    <>
//    <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/post">Post</Link>
//         </li>
//         <li>
//           <Link to="/data">data</Link>
//         </li>
//       </ul>
//     </nav>

//    </>
//   )
// }
