import '../../styles/House/host.css'

function Host (props) {
    const host = props.host

    return (
        <div className="host__container">
            <p className="host__name">{host.name}</p>
            <img className="host__img" src={host.picture} alt="host"/>
        </div>
    )
}

export default Host