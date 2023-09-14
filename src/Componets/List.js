import React,{useState} from 'react';
import classess from './List.module.css';
import { useNavigate } from 'react-router-dom';
export default function List(props) {
  const navigate = useNavigate();
  console.log(props)
    const [modal,setModal]=useState(false)
    const ModalHandler=()=>{
      
      setModal((prevModal) => !prevModal);
    }
    const onCancelHandler=()=>{
        setModal(false)
    }
    const openModal = () => {
      setModal(true);
    };
    
    const moveHandler =()=>{
      navigate("/next",{state:{data:props.url}})
    }

  return (
    <>
    <div style={{width:'350px',paddingLeft:'20px'}}>
    <li  onClick={openModal} className={classess.card} style={{backgroundImage:`url(${props.url})`}}>{props.name}</li>
    {modal&&
      <div className={classess.modalBackrop} onClick={onCancelHandler}>
        <div className={classess.modalContent} style={{backgroundImage:`url(${props.url})`}}>
          <h2>모달 내용</h2>
          <p>모달 내용을 이곳에 추가합니다.</p>
          <button className={classess.closeBtn} onClick={onCancelHandler}>x</button>
          <button onClick={moveHandler}>링크1</button>
     

        </div>
      </div>
}
    </div>
    </>
     
  )
}
