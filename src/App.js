import {useState} from 'react'
import FeedbackStats from './components/FeedbackStats'
import PropTypes from 'prop-types'
import Header from "./components/Header"
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import AboutIconComp from './components/AboutIconComp'





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
        <Router>
        <Header />
        <div className="container">
            <Routes>
                <Route exact path='/' element = {
                    <>
                      <FeedbackForm handleAdd={addFeedback} >Form</FeedbackForm>
                    <FeedbackStats feedback={feedback}/>
                    <FeedbackList feedback={feedback} handleDelet={deletFeedback} />
                    </>
                }> 
                </Route> 
                <Route path='/about' element = {<AboutPage/>} />
            </Routes>
            </div>
            <AboutIconComp/>
        </Router>
         
        
    )
}

FeedbackList.propTypes ={
    feedback: PropTypes.array,
  }


export default App
 

