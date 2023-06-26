import active from '../../img/star-active.svg'
import inactive from '../../img/star-inactive.svg'

let elementToDisplay = []


function rateLoop(rate) {
    elementToDisplay = []
    const rateBlank = 5 - rate

    for ( let i = 1; i <= rate; i++){
        elementToDisplay.push(<img src={active} alt='full star' key={`full star ${i}`}/>)
    }
    for ( let i = 1; i <= rateBlank; i++){
        elementToDisplay.push(<img src={inactive} alt='empty star' key={`empty star ${i}`}/>)
    }
}

function Rating (props) {
    const rate = parseInt(props.rate)

    rateLoop(rate);

    return (
        <div>
            {elementToDisplay}
        </div>
    )
}


export default Rating