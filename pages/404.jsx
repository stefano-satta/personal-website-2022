import Image from "next/image";
import Star from "../components/common/star/Star";
import astronaut from '../public/astronaut.png'

const Custom404Page = () => {

    return (<>
        <div className="w-100 vh-100 bg-dark overflow-hidden position-relative">
            <div className="moon"></div>
            <div className="moon__crater"></div>
            <Star top={'13%'} right={'53%'}/>
            <Star top={'70%'} right={'30%'}/>
            <Star top={'5%'} right={'33%'}/>
            <Star top={'44%'} right={'40%'}/>
            <Star top={'40%'} right={'22%'}/>
            <Star top={'90%'} right={'5%'}/>
            <Star top={'10%'} right={'10%'}/>
            <Star top={'95%'} right={'50%'}/>
            <div className="astronaut"/>
        </div>
    </>)
}

export default Custom404Page;