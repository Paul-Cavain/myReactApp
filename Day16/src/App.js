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
import EditPost from './EditPost';

function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');

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

  const handleSubmit = async(e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title: postTitle, datetime, body: postBody};
    try{
      const response = await api.post('/posts', newPost);
      const allPosts = [ ...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
    }catch(err){
      console.log(`Error: ${err.message}`);
    }
  }

  const handleEdit = async(id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = {id, title: editTitle, datetime, body: editBody};
    try{
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map(post => post.id === id ? {...response.data} : post));
      setEditTitle('');
      setEditBody('');
    }catch(err){
      console.log(`Error: ${err.message}`);
    }
  }

  const handleDelete = async(id) => {
    try{
      await api.delete(`/posts/${id}`); 
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList);
    }catch(err){
      console.log(`Error: ${err.message}`);
    }
  }

  return (
    <section className='place-items-center text-center bg-gray-100 h-[100vh] overflow-scroll justify-center place-content-center flex-grow-0 mx-6'>
      <Header title={'React Js Blog'}/>
      <Navbar 
        search={search}
        setSearch={setSearch}
      />
      <Routes>  
        <Route 
          path='/' 
          element={
            <Home 
              posts = {searchResult}
            />
          } 
        />
        <Route path='/post' element={<NewPost 
          postTitle = {postTitle}
          setPostTitle = {setPostTitle}
          postBody = {postBody}
          setPostBody = {setPostBody}
          handleSubmit={handleSubmit}
        />} />
        <Route path='/edit/:id' element={<EditPost 
          posts = {posts} 
          editTitle = {editTitle}
          setEditTitle = {setEditTitle}
          editBody = {editBody}
          setEditBody = {setEditBody}
          handleEdit={handleEdit}
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
