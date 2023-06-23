import '../../styles/House/houseContainer.css'
import house from '../../datas/logements.json'
import Carrousel from './carrousel'
import MainInfo from './mainInfo'

function House () {
    return (
        <div className="house__container">
            <Carrousel img={house[2].pictures}/>
            <MainInfo title={house[2].title} location={house[2].location} tagText={house[2].tags}/>
        </div>
    )
}

export default House