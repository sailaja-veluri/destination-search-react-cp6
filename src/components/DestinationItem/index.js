// Write your code here
import './index.css'

const DestinationItems = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails
  return (
    <li className="list">
      <img src={imgUrl} className="destination-pic" alt={name} />
      <h1 className="destination-name">{name}</h1>
    </li>
  )
}

export default DestinationItems
