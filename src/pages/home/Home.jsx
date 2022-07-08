import './Home.css';
import {ProfileSide} from "../../components/ProfileSide/ProfileSide";

export const Home = () => {
    return (
        <div className="Home">
            <ProfileSide/>
            <div className="postSide">Posts</div>
            <div className="rightSide">Rightside</div>
        </div>
    );
}

