import PostList from './feature/posts/PostsList';
import AddPostForm from './feature/posts/AddPostForm';
import './App.css';

function App() {
  return (
    <main className="App">
      <AddPostForm/>
      <PostList/>
    </main>
  );
}

export default App;
