import React, { useEffect } from 'react';
import Banner from '../components/Shared/banner'
import Collapse from '../components/Shared/collapse';
import collapseValue from "../datas/collapse.json"
import about__banner from '../img/about__banner.png'

function About () {
    useEffect(() => {
        document.title = `Kasa - A propos`
    }, [])

    return ( 
        <React.Fragment>
            <Banner img={about__banner} text={''} modif='about'/>
            <div className="collapsesGeneral__container">
                {collapseValue.map((item) => (
                    <Collapse title={item.title} content={item.description} modifier="about" key={item.title}/>
                ))}
            </div>  
        </React.Fragment>
    )
}

export default About