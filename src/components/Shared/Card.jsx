import PropTypes from 'prop-types'

function Card({children, reverse}) {
  return <div className={`card ${reverse && 'reverse'}`}> {children} </div>
  }


Card.defualtProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}
export default  Card 