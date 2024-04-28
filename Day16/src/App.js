import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './About';
import Home from './Home';
import Missing from './Missing';
import NewPost from './NewPost';
import PostPage from './PostPage';
import { format } from 'date-fns';
import api from './api/posts'

function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  // api useEffect
  useEffect(() => {
    const fetchPost = async() => {
      try{
        const response = await api.get('/posts');
        setPosts(response.data)
      }catch(err){
        console.log(`Error: ${err.message}`);
      }
    }
    fetchPost();
  }, []);

  useEffect(() => {
    const filteredResults = posts.filter (post => 
      ((post.body).toLowerCase()).includes(search.toLocaleLowerCase()) || ((post.title).toLowerCase()).includes(search.toLocaleLowerCase()));

    setSearchResult(filteredResults.reverse());
  }, [posts, search])  

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title: postTitle, datetime, body: postBody};
    const allPosts = [ ...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
  }

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    // location.push('/')
  }

  return (
    <section className='place-items-center text-center bg-gray-100 h-[100vh] mx-20 overflow-scroll flex-grow justify-center place-content-center'>
      <Header title={'React Js Blog'}/>
      <Navbar 
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path='/' element={<Home 
          posts = {searchResult}
          
        />} />
        <Route path='/post' element={<NewPost 
          postTitle = {postTitle}
          setPostTitle = {setPostTitle}
          postBody = {postBody}
          setPostBody = {setPostBody}
          handleSubmit={handleSubmit}
        />} />
        <Route path='/post/:id' element={<PostPage 
          posts={posts}
          handleDelete={handleDelete}
        />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
