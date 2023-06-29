import arrow from '../../img/arrow.svg'
import { useState } from "react"
import '../../styles/House/carrousel.css'

function Carrousel (props) {
    const CarrouselImg = props.img

    const [imageNumber, updateImageNumber] = useState(0)

    const goToPreviousImage = () => {
        imageNumber === 0 ? updateImageNumber(CarrouselImg.length - 1) : updateImageNumber(imageNumber-1)
    }

    const goToNextImage = () => {
        imageNumber === CarrouselImg.length - 1 ? updateImageNumber(0) : updateImageNumber(imageNumber+1)
    }

    return CarrouselImg.length === 1 ? (
        <div className='carrousel__container'>
            <img src={CarrouselImg[imageNumber]} alt="house" className='house__img' />
        </div>
    ) :  (
        <div className='carrousel__container'>
            <img src={arrow} alt="arrow to navigate in images to the left" className='arrow arrow--left' onClick={goToPreviousImage} />
            <img src={CarrouselImg[imageNumber]} alt="house" className='house__img' />
            <p className='house__img__number'>{`${imageNumber + 1} / ${CarrouselImg.length}`}</p>
            <img src={arrow} alt="arrow to navigate in images to the right" className='arrow arrow--right' onClick={goToNextImage} />
        </div>
    )

    

   
}
  
export default Carrousel