import '../../styles/House/houseContainer.css'
import Carrousel from './carrousel'
import Info from './info'
import CollapseHouse from './collapseHouse'

function House (props) {
    const house= props.house

    return (
        <div className="house__container">
            <Carrousel img={house.pictures}/>
            <Info house={house}/>
            <div className='houseCollapse'>
                <CollapseHouse category='description' description={house.description} stuff={house.equipments}/>
                <CollapseHouse category='equipement' description={house.description} stuff={house.equipments}/>
            </div>
        </div>
    )
}

export default House