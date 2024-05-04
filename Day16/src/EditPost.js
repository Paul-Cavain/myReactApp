import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditPost = ({ posts, handleEdit, editTitle, editBody, setEditTitle, setEditBody }) => {
    const { id } = useParams();
    const post = posts.find(post =>(post.id).toString() === id);
    
    useEffect(() => {
        if(post){
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody])
    return(
        <main className="pt-40">
            {editTitle &&
                <>
                    <h1 className="text-start text-xl mx-8">Edit Post</h1>
                    <form onSubmit={(e) => e.preventDefault()} className="mx-8 space-y-4">
                        <label htmlFor="Post Title" className="hidden">Post Title</label>
                        <input 
                            type="text"
                            required
                            placeholder="Post Title.."
                            className="px-2 h-10 w-full border-2 border-black"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <label htmlFor="Post Body" className="hidden">Post Body</label>
                        <textarea 
                            type="text"
                            required
                            placeholder="Post Body...."
                            className="w-full px-2 h-32 border-2 border-black"
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="w-full rounded-md bg-gray-300 h-10  border-2 border-black"
                            onClick={(e) => handleEdit(post.id)}
                        >
                            Submit
                        </button>
                    </form>
                </>
            }
            {!editTitle &&
                <>
                    <main className="pt-40 space-y-1">
                        <h2 className="text-xl">Post Not Found</h2>
                        <p>Well, that is disapointing</p>
                        <p className="text-blue-800 underline">
                            <Link to={'/'}>
                                Visit Our Home Page
                            </Link>
                        </p>
                    </main>
                </>
            }
        </main>
    );
}
export default EditPost;