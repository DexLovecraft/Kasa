import { useState } from "react"
import '../styles/collapseAbout.css'
import arrow from '../img/arrow.svg'

function CollapseAboutItem (props) {
    const collapseTitle = props.title
    const collapseText = props.text

    const [isOpen, updateIsOpen] = useState(false)

    const handleClick = () => {
        updateIsOpen(!isOpen)
    };

    return !isOpen ? (
        <div className="collapse__container">
            <div className="collapse" onClick={handleClick}>
                <p className="collapse__text">{collapseTitle}</p>
                <img src={arrow} alt="arrow" className="collapse__button"/>
            </div>
        </div>
    ) : (
        <div className="collapse__container">
            <div className="collapse" onClick={handleClick}>
                <p className="collapse__text">{collapseTitle}</p>
                <img src={arrow} alt="arrow" className="collapse__button collapse__button--open"/>
            </div>
            <div className="description">
                <p className="description__text">{collapseText}</p>
            </div>
        </div>
    )
}

export default CollapseAboutItem