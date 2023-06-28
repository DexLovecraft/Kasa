import { useEffect } from 'react'
import '../../styles/Home/gallery.css'
import logements from '../../datas/logements.json'
import Thumbnail from './thumbnail'

function Gallery(props) {
    const updateWhichHouse = props.updateWhichHouse

    useEffect(() => {
        document.title = `Kasa - Liste des appartements`
    }, [])

    return (
        <div className='gallery'>
            {logements.map((logement) => (
                <Thumbnail
                    img={logement.cover}
                    name={logement.title}
                    id={logement.id}
                    key={`${logement.title} ${logement.id}`}
                    updateWhichHouse={updateWhichHouse}
                />
            ))}
        </div>
    )
}

export default Gallery
