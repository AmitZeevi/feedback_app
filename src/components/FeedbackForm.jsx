import Card from './Shared/Card'
import {useState} from 'react'
import Button from './Shared/Button'
import RatingSelect from './RatingSelect'



function FeedbackForm({handleAdd}) {
    const [text,setText] = useState('')
    const [btnDisabled,setbtnDisabled] = useState(true)
    const [message,setMessage] = useState('')
    const [rating,setRating] = useState(10)


    const handleTextChanges = (e) => {
        setText(e.target.value)
        // @todo - why changed on 12? 
        if(text === ''){
            setMessage(null)
            setbtnDisabled(true)
        } else if(text !== '' && text.trim().length <= 10) {
            setbtnDisabled(true)
            setMessage('Text must be at least 10 charecters')
        } else{
            setbtnDisabled(false)
            setMessage(null)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback={
                text,
                rating,
            }
            handleAdd(newFeedback)
            // setting back to empty string
            setText('')
        }
    }

  return (
    <Card>
      <form onSubmit={handleSubmit}> 
        <h2> How would you rate us?</h2>
        <RatingSelect select = {(rating) => setRating(rating)}/> 
        <div className='input-group'>
            <input
            onChange={handleTextChanges}
            type='text'
            placeholder='Write a review'
            value={text}
            />
            <Button type='submit' isDisabled={btnDisabled}>Send</Button>
         </div>
         {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
