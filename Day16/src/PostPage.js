import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    return(
        <main className="pt-40">
            <article>
                {post &&
                    <main className="text-start mx-2">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="pt-2 text-red-700">{post.datetime}</p>
                        <p className="pt-2">{post.body}</p>
                        <button onClick={() => handleDelete(post.id)} className="bg-red-600 text-white rounded-md w-28 h-10 mt-4">
                            Delete Post
                        </button>
                    </main>
                }
                { !post &&
                    <main className="pt-40 space-y-1">
                        <h2 className="text-xl">Post Not Found</h2>
                        <p>Well, that is disapointing</p>
                        <p className="text-blue-800 underline">
                            <Link to={'/'}>
                                Visit Our Home Page
                            </Link>
                        </p>
                    </main>
                }
            </article>
        </main>
    );
}
export default PostPage;