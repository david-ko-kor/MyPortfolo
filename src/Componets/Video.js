import React from 'react'

export default function Video() {
  return (
   <>
   <div style={{textAlign:'center'}}>
   <video width="70%" height="70%" loop autoPlay muted >
  <source src="/sea.mp4" type="video/mp4" />
    비디오파일입니다
</video>
</div>
   
   </>
  )
}
