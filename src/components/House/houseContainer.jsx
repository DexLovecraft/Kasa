import '../../styles/House/houseContainer.css'
import house from '../../datas/logements.json'
import Carrousel from './carrousel'

function House () {
    return (
        <div className="house__container">
            <Carrousel img={house[0].pictures}/>
        </div>
    )
}

export default House