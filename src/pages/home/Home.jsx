import './Home.css';
import {ProfileSide} from "../../components/ProfileSide/ProfileSide";
import {PostSide} from "../../components/PostSide/PostSide";

export const Home = () => {
    return (
        <div className="Home">
            <ProfileSide/>
            <PostSide/>
            <div className="rightSide">Rightside</div>
        </div>
    );
}

