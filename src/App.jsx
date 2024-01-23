import './App.css';
import LikeImgHOC from './components/HOC/likeImgHOC';
import LikePostHOC from './components/HOC/likePostHOC';
import LikeImage from './components/RenderProps/LikeImage'
import LikePost from './components/RenderProps/LikePost'

function App() {
  return (
    <div>
      <h3>Using HOC</h3>
          <LikeImgHOC/>
          <LikePostHOC/>
      <h3>Using Render Props</h3>
        <LikeImage/>
        <LikePost/>
    </div>
  );
}

export default App;