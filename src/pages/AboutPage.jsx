import Card from "../components/Shared/Card"
import {Link} from 'react-router-dom'


function AboutPage() {
  return (
    <Card> 
        <div>
        <h1> About this page </h1>
          <p> This is the about AboutPage to the leave feedback component </p>
          <p> Version 1.0.0  </p>
        </div>
        <p>  
          <Link to= '/'> Back to Home </Link>
        </p>
    </Card>
  )
}

export default AboutPage
