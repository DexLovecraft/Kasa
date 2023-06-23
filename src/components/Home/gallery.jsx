import '../../styles/Home/gallery.css'
import logements from '../../datas/logements.json'
import Thumbnail from './thumbnail'

function Gallery() {
    return (
        <div className='gallery'>
            {logements.map((logement) => (
                <Thumbnail
                    img={logement.cover}
                    name={logement.title}
                    id={logement.id}
                    key={`${logement.title} ${logement.id}`}
                />
            ))}
        </div>
    )
}

export default Gallery
