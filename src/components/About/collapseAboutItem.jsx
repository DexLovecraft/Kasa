import { useState } from "react"
import '../../styles/About/collapseAbout.css'
import arrow from '../../img/arrow.svg'

function CollapseAboutItem (props) {
    const {title, text} = props

    const [isOpen, updateIsOpen] = useState(false)

    const handleClick = () => {
        updateIsOpen(!isOpen)
    };

    return(
    <div className="collapse__container">
        <div className="collapse" onClick={handleClick}>
            <p className="collapse__text">{title}</p>
            <img src={arrow} alt="arrow" className="collapse__button"/>
        </div>
        {!isOpen ? '' : 
            <div className="description">
            <p className="description__text">{text}</p>
        </div>
        }
    </div> 
    )
}

export default CollapseAboutItem