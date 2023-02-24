import { Col } from 'react-bootstrap'

export const ProjectCard = ({ title, description, imgUrl, pageUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={pageUrl} style={{ color: '#fff', textDecoration: 'none' }} target="_blank" rel="noreferrer">
            <span>{description}</span>
          </a>
        </div>
      </div>
    </Col>
  )
}
