import active from '../../img/star-active.svg'
import inactive from '../../img/star-inactive.svg'
import '../../styles/House/rating.css'

function Rating (props) {
    const rate = parseInt(props.rate)

    let elementToDisplay = []

    for (let i = 1; i <= 5; i++){
        if (i <= rate){
            elementToDisplay.push(<img src={active} alt='full star' key={`full star ${i}`} className='star'/>)
        } else {
            elementToDisplay.push(<img src={inactive} alt='empty star' key={`empty star ${i}`} className='star'/>)
        }
    }

    return (
        <div  className='star__container'>
            {elementToDisplay}
        </div>
    )
}


export default Rating