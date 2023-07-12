import { useState , React} from "react"
import '../../styles/Shared/collapse.css'
import arrow from '../../img/arrow.svg'

function Collapse (props) {
    const {title,content, modifier} = props
    const [isOpen, updateIsOpen] = useState(false)

    const handleClick = () => {
        updateIsOpen(!isOpen)
    };

    return (
        <div className={`collapse__container--${modifier}`}>
          <div className={`collapse collapse--${modifier}`} onClick={handleClick}>
            <p className={`collapse__title collapse__title--${modifier}`}>{title}</p>
            <img src={arrow} alt="arrow" className={`collapse__button`} />
          </div>
          {!isOpen ? null : <div className={`collapse__content collapse__content--${modifier}`}><p className={`collapse__text collapse__text--${modifier}`}>{content}</p></div>}
        </div>
    );
}

export default Collapse