import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import tick from '../assets/img/tick.svg'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import arrow1 from '../assets/img/arrow1.svg'
import arrow2 from '../assets/img/arrow2.svg'
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  const skills = ['Data Structure & Algorithm', 'HTML5 + CSS3 + JS', 'React & Vue', 'Python Flask', 'Webpack', 'English Writing & Communication', 'Node.js', 'Leaflet.js', 'Echarts.js', 'Ant Design']
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I believe that continuous learning and growth are the keys to a person's ongoing progress. Therefore, I invest time and energy into learning new skills to enhance my competitiveness and advance my career. I am always passionate about life, enjoy trying new things, challenging myself,
                and achieving success.
              </p>
              <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, idx) => (
                  <div className="item">
                    <img key={idx} src={tick} alt="Image" />
                    <h5>{skill}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
