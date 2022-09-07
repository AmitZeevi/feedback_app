import {useState} from 'react'
import FeedbackStats from './components/FeedbackStats'
import PropTypes from 'prop-types'
import Header from "./components/Header"
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'
// @todo - npm i uuid
// import {v4 as uuidv4} from 'uuid'





function App(){
    const [feedback, setFeedback] = useState(FeedbackData)

    const deletFeedback = (id) =>{
        if(window.confirm('Are you sure you want to delet?')){
            setFeedback(feedback.filter((item) => item.id !== id))
            console.log('Feedback', id, 'was deleted')

        }
    }

    const addFeedback = (newFeedback) =>{
        // degault for now
        newFeedback.id = 0
        console.log('Feedback: ', newFeedback, 'was added')
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <>
            <Header  />
            <div className="container">
            <FeedbackForm handleAdd={addFeedback} >Form</FeedbackForm>
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelet={deletFeedback} /> 
             </div>
        </>
        
    )
}

FeedbackList.propTypes ={
    feedback: PropTypes.array,
  }


export default App
 

