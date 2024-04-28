import React from "react";

const NewPost = ({ postTitle, postBody, setPostTitle, setPostBody, handleSubmit }) => {
    return(
        <section className="pt-40">
            <h1 className="text-start text-xl mx-8">New Post</h1>
            <form onSubmit={handleSubmit} className="mx-8 space-y-4">
                <label htmlFor="Post Title" className="hidden">Post Title</label>
                <input 
                    type="text"
                    required
                    placeholder="Post Title.."
                    className="px-2 h-10 w-full border-2 border-black"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="Post Body" className="hidden">Post Body</label>
                <textarea 
                    type="text"
                    required
                    placeholder="Post Body...."
                    className="w-full px-2 h-32 border-2 border-black"
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full rounded-md bg-gray-300 h-10  border-2 border-black"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}
export default NewPost;