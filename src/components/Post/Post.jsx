import './Post.css'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'

export const Post = ({data}) => {

    return (
        <div className="Post">
            <img src={data.img} alt='post image'/>
            <div className='postItem'>
                <img src={data.liked ? Heart : NotLike} alt=''/>
                <img src={Comment} alt=''/>
                <img src={Share} alt=''/>
            </div>

            <span style={{color: 'var(--gray)', fontSize: '12px'}}>{data.likes} likes</span>

            <div className="detail">
                <span><b>{data.name}</b></span>
                <span>{data.description}</span>
            </div>
        </div>
    )
}
