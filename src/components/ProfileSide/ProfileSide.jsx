import './ProfileSide.css';
import {LogoSearch} from "../LogoSearch/LogoSearch";
import {ProfileCard} from "../ProfileCard/ProfileCard";

export const ProfileSide = () => {
    return (
        <div className="ProfileSide">
            <LogoSearch/>
            <ProfileCard/>
        </div>
    );
}

