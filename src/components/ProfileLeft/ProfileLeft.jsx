import {LogoSearch} from "../LogoSearch/LogoSearch";
import {FollowersCard} from "../FollowersCard/FollowersCard";
import {InfoCard} from "../InfoCard/InfoCard";
import '../ProfileSide/ProfileSide.css'


export const ProfileLeft = () => {

    return (
        <div className="ProfileSide">
            <LogoSearch/>
            <InfoCard/>
            <FollowersCard/>
        </div>
    )
}
