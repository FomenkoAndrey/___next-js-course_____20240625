import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ImageSlider.css'

const ImageSlider = () => {
  const settings = {
    dots: true
  }

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/id/0/1920/768" alt="" />
        </div>
        <div>
          <img src="https://picsum.photos/id/1/1920/768" alt="" />
        </div>
        <div>
          <img src="https://picsum.photos/id/2/1920/768" alt="" />
        </div>
        <div>
          <img src="https://picsum.photos/id/3/1920/768" alt="" />
        </div>
        <div>
          <img src="https://picsum.photos/id/4/1920/768" alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default ImageSlider
