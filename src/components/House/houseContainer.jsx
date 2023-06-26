import '../../styles/House/houseContainer.css'
import house from '../../datas/logements.json'
import Carrousel from './carrousel'
import Info from './info'

function House () {
    return (
        <div className="house__container">
            <Carrousel img={house[1].pictures}/>
            <Info house={house[1]}/>
        </div>
    )
}

export default House