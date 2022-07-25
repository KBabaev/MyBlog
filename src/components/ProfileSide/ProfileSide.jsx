import './ProfileSide.css';
import {LogoSearch} from "../LogoSearch/LogoSearch";
import {ProfileCard} from "../ProfileCard/ProfileCard";
import {FollowersCard} from "../FollowersCard/FollowersCard";

export const ProfileSide = () => {
    return (
        <div className="ProfileSide">
            <LogoSearch/>
            <ProfileCard/>
            <FollowersCard/>
        </div>
    );
}

