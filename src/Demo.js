import React, { useEffect, useState } from 'react'
import Dimensions from './Dimensions'

const Demo = () => {
  const [isVisible, setVisible] = useState(true, false);
  return (
    <div>
      <button onClick={()=> setVisible(true)}>Show</button>
      <button onClick={()=> setVisible(false)}>Hide</button>
      {isVisible && <Dimensions/>}
    </div>
  )
}

export default Demo
