import React, { useEffect } from 'react';
import Banner from '../components/Shared/banner'
import CollapseAbout from '../components/About/collapseAbout';
import about__banner from '../img/about__banner.png'

function About () {
    useEffect(() => {
        document.title = `Kasa - A propos`
    }, [])

    return ( 
        <React.Fragment>
            <Banner img={about__banner} text={''} modif='about'/>
            <CollapseAbout/>
        </React.Fragment>
    )
}

export default About