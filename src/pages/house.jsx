import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/House/house.css'
import Carrousel from '../components/House/carrousel'
import Info from '../components/House/info'
import CollapseHouse from '../components/House/collapseHouse'
import Houses from '../datas/logements.json'

function House () {
    const { id } = useParams()
    const specificHouse = Houses.find(house => {
        return house.id === id
    })

    useEffect(() => {
        document.title = `Kasa - ${specificHouse.title}`
    }, [specificHouse.title])


    return (
        <div className="house__container">
            <Carrousel img={specificHouse.pictures}/>
            <Info house={specificHouse}/>
            <div className='houseCollapse'>
                <CollapseHouse category='description' description={specificHouse.description}/>
                <CollapseHouse category='equipement' stuff={specificHouse.equipments}/>
            </div>
        </div>
    )
}

export default House