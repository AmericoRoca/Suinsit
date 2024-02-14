import React from 'react'
import '../Assets/css/Components/RightArrow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const RigthArrow = () => {
  return (
    <div className='circle-arrow'>
      <FontAwesomeIcon icon={faArrowRight} className='arrow-right'></FontAwesomeIcon>
    </div>
  )
}

