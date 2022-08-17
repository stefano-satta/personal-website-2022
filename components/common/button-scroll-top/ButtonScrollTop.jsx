import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fas);

const ButtonScrollTop = () => {

    const scrollToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }


    return (
        <div className="cursor-pointer" id="btn-scroll-top" onClick={scrollToTop}>
            <FontAwesomeIcon icon={['fas', 'chevron-up']} size={'2x'} className="text-white"/>
        </div>
    )

}

export default ButtonScrollTop;