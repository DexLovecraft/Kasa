import '../../styles/House/houseContainer.css'
import house from '../../datas/logements.json'
import Carrousel from './carrousel'
import Info from './info'
import CollapseHouse from './collapseHouse'

function House () {
    return (
        <div className="house__container">
            <Carrousel img={house[6].pictures}/>
            <Info house={house[6]}/>
            <div className='houseCollapse'>
                <CollapseHouse category='description' description={house[6].description} stuff={house[6].equipments}/>
                <CollapseHouse category='equipement' description={house[6].description} stuff={house[6].equipments}/>
            </div>
        </div>
    )
}

export default House