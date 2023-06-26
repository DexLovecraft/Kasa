import { useState } from "react"
import React from 'react';
import '../../styles/House/collapseHouse.css'
import arrow from '../../img/arrow.svg'

function CollapseHouse (props) {
    const stuff = props.stuff
    const description = props.description
    const category = props.category

    const [isOpen, updateIsOpen] = useState(false)

    const handleClick = () => {
        updateIsOpen(!isOpen)
    };

    return !isOpen ? (
        <div className="collapseHouse__container">
            <div className="collapseHouse" onClick={handleClick}>
                <p className="collapseHouse__title">{category === 'description' ? 'Description' : 'Équipements'}</p>
                <img src={arrow} alt="arrow" className="collapseHouse__button"/>
            </div>
        </div>
    ) : (
        <div className="collapseHouse__container">
            <div className="collapseHouse" onClick={handleClick}>
                <p className="collapseHouse__title">{category === 'description' ? 'Description' : 'Équipements'}</p>
                <img src={arrow} alt="arrow" className="collapseHouse__button collapseHouse__button--open"/>
            </div>
            <div className="collapseHouse__text__container">
                <p className="collapseHouse__text">{category === 'description' ? description : stuff.map((oneStuff, index)=>  
                <React.Fragment key={index}>
                    {oneStuff}
                    <br />
                </React.Fragment>
      )}</p>
            </div>
        </div>
    )
}

export default CollapseHouse