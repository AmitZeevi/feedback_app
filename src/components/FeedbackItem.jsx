import {FaTimes} from 'react-icons/fa'
import Card from './Shared/Card'
import PropTypes from 'prop-types'


function FeedbackItem({item, handleDelet}) {
   
  return (
    <Card>
      <div className="num-display">{item.rating} </div>
      <button onClick={() => handleDelet(item.id)} className='close'>
        <FaTimes color='black'/> 
      </button>
      <div className="text-display">{item.text}   </div>
    </Card>
  )
}

FeedbackItem.propTypes ={
  item: PropTypes.object,
}

export default FeedbackItem
