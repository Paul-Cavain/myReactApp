import { Link } from "react-router-dom";

const Post = ({ post }) => {
    return(
        <article className="py-3 text-start mx-2">
            <Link to={`/post/${post.id}`}>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p>{post.datetime}</p>
                
            </Link>
            <p>
                {
                    (post.body).length <=25
                        ? post.body
                        : `${(post.body).slice(0, 25)}....`
                
                }
            </p>
            <hr className="" />
        </article>
    )
}
export default Post;