import React, {useEffect} from 'react';
import Banner from '../components/Shared/banner'
import Gallery from '../components/Home/gallery'
import home__banner from '../img/home__banner.png'

function Home () {
    useEffect(() => {
        document.title = `Kasa - Liste des appartements`
    }, [])

    return( 
        <React.Fragment>
          <Banner img={home__banner} text={'Chez vous, partout et ailleurs'}/>
          <Gallery/>
        </React.Fragment>
    )
}

export default Home