// import { FaTimes} from 'react-icon/fa'
// @todo - npm i react-icons
import Card from './Shared/Card'
import PropTypes from 'prop-types'


function FeedbackItem({item, handleDelet}) {
   
  return (
    <Card>
      <div className="num-display">{item.rating} </div>
      <button onClick={() => handleDelet(item.id)} className='close'>
        Botton
        {/* FaTimes color=purple */}
      </button>
      <div className="text-display">{item.text}   </div>
    </Card>
  )
}

FeedbackItem.propTypes ={
  item: PropTypes.object,
}

export default FeedbackItem
