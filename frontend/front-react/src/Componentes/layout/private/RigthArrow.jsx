import React from 'react'
import '../../../Assets/css/Components/layout/private/RightArrow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const RigthArrow = () => {
  return (
    <div className='circle-arrow'>
      <FontAwesomeIcon icon={faArrowRight} className='arrow-right'></FontAwesomeIcon>
    </div>
  )
}

export default RigthArrow;

