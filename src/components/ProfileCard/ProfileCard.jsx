import './ProfileCard.css';
import Cover from "../../img/cover.jpg"
import Profile from "../../img/profileImg.jpg"

export const ProfileCard = () => {
    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={Cover} alt=""/>
                <img src={Profile} alt=""/>
            </div>
            <div className="ProfileName">
                <span>Veronika Foya</span>
                <span>Middle Frontend Developer</span>
            </div>
            <div className="followStatus">
                <hr/>
                <div>
                    <div className="follow">
                        <span>3,125</span>
                        <span>followings</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>87</span>
                        <span>followers</span>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    );
}

