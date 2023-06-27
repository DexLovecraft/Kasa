import active from '../../img/star-active.svg'
import inactive from '../../img/star-inactive.svg'
import '../../styles/House/rating.css'


let elementToDisplay = []


function rateLoop(rate) {
    elementToDisplay = []
    // const rateBlank = 5 - rate

    for ( let i = 1; i <= 5; i++){
        if (i <= rate){
            elementToDisplay.push(<img src={active} alt='full star' key={`full star ${i}`} className='star'/>)
            continue
        }
        elementToDisplay.push(<img src={inactive} alt='empty star' key={`empty star ${i}`} className='star'/>)
        }
}

function Rating (props) {
    const rate = parseInt(props.rate)

    rateLoop(rate);

    return (
        <div  className='star__container'>
            {elementToDisplay}
        </div>
    )
}


export default Rating