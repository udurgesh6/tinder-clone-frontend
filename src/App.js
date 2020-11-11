import './App.css';
import Header from "./Header";
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    //Following BEM Convention
    <div className="app">
      {/* Header */}
      <Header/>
      {/* Tinder Cards */}
      <TinderCards/>
      {/* Swipe Buttons */}
      <SwipeButtons/>
    </div>
  );
}

export default App;
