import './index.css'

const TechnologyCards = props => {
  const {cardItem} = props
  const {id, title, description, imgUrl, className} = cardItem

  return (
    <div className={className}>
      <div className="course-details-container">
        <h1 className="course-name">{title}</h1>
        <p className="course-des">{description}</p>
        <img src={imgUrl} className="content-img" alt="avtar" />
      </div>
    </div>
  )
}

export default TechnologyCards
