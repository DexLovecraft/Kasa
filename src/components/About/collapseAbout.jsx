import { useEffect } from 'react'
import CollapseAboutItem from "./collapseAboutItem"
import collapseValue from "../../datas/collapse.json"
import '../../styles/About/collapseAbout.css'

function CollapseAbout () {
    useEffect(() => {
        document.title = `Kasa - A propos`
    }, [])

    return (
        <div className="collapsesGeneral__container">
        {collapseValue.map((item) => (
            <CollapseAboutItem title={item.title} text={item.description} key={item.title}/>
        ))}
        </div>
    )
}

export default CollapseAbout