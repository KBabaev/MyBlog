import './FollowersCard.css'
import { FOLLOWERS } from '../../Data/FollowersData'

export const FollowersCard = () => {
  return (
        <div className="FollowersCard">
            <h3>Who is following you</h3>

            {
                FOLLOWERS.map((follower, id) => {
                  return (
                        <div className='follower'>
                            <div>
                                <img src={follower.img} alt='avatar' className='followerImg'/>
                                <div className="name">
                                    <span>{follower.name}</span>
                                    <span>{follower.userName}</span>
                                </div>
                            </div>

                            <button className='button fc-button'>follow</button>
                        </div>
                  )
                })
            }
        </div>
  )
}
