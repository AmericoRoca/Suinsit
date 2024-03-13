import React from 'react'
import '../../../Assets/css/Components/LeftArrow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export const LeftArrow = () => {
  return (
    <div className='circle-arrow'>
      <FontAwesomeIcon icon={faArrowLeft} className='arrow-left'></FontAwesomeIcon>
    </div>
  )
}

export default LeftArrow;