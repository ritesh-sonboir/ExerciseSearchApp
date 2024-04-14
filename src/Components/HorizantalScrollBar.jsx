import React from 'react'
import Bodyparts from './Bodyparts'
function HorizantalScrollBar({data,bodyPart,setBodyPart}) {
  return (
    <div>
      <div className='flex flex-row flex-wrap justify-center items-center w-[1000px] justify-self-center'>
        {
          data.map((item)=>(
            <div
            key={item.id||item}
            >
              <Bodyparts item = {item} bodyPart = {bodyPart} setBodyPart = {setBodyPart}/>
            </div>
          ))
        }
        </div>

    </div>
  )
}

export default HorizantalScrollBar