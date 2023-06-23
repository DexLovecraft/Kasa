import CollapseAboutItem from "./collapseAboutItem"
import collapseValue from "../../datas/collapse.json"
import '../../styles/About/collapseAbout.css'

function CollapseAbout () {
    return (
        <div className="collapsesGeneral__container">
        {collapseValue.map((item) => (
            <CollapseAboutItem title={item.title} text={item.description}/>
        ))}
        </div>
    )
}

export default CollapseAbout