import "./App.css";
import Basic from "./Components/Basic";
import Navbar from "./Components/Navbar";
import PostList from "./Components/PostList";
import PostForm from "./API/PostForm";

function App() {
  return (
    <div className="App">
      <PostForm />
      <PostList />
      <Basic />
      <Navbar />
    </div>
  );
}

export default App;
