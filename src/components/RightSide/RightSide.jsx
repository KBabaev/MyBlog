import './RightSide.css'
import Home from '../../img/home.png'
import Notification from '../../img/noti.png'
import Comment from '../../img/comment.png'
import {UilSetting} from "@iconscout/react-unicons";
import {TrendCard} from "../TrendCard/TrendCard";


export const RightSide = () => {

    return (
        <div className="RightSide">
            <div className='navIcons'>
                <img src={Home} alt="Home icon"/>
                <UilSetting/>
                <img src={Notification} alt="Notification icon"/>
                <img src={Comment} alt="Comment icon"/>
            </div>
            <TrendCard/>
        </div>
    )
}
