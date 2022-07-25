import './Posts.css'
import {POSTS_DATA} from "../../Data/PostsData";
import {Post} from "../Post/Post";

export const Posts = () => {

    return (
        <div className="Posts">
            {
                POSTS_DATA.length && POSTS_DATA.map((post, id) => {
                    return <Post data={post} id={id}/>
                })
            }
        </div>
    )
}
