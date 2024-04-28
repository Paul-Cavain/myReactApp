import Feed from "./Feed";

const Home = ({ posts }) => {
    return(
        <main className="pt-40 pb-20 bg-gray-100">
            {posts.length ? (
                <Feed posts = {posts} /> 
            ) : (
                <p className="text-red-500 text-center text-xl place-items-center">
                    No post to display
                </p>
            )}
        </main>
    );
}
export default Home