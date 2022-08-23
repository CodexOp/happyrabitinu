import './App.css';
import FirstPage from './pages/first';
import SecondPage from './pages/second';
import getWindowDimensions from './../src/components/window-dimensions/window';
import Guide from './components/guide/Guide';
import Community from './components/community/Community';
import Partners from './components/partners/Partners';
import Roadmap from './components/roadmap/Roadmap';

function App() {
  return (
    <>
      <div className={'App'} style={{maxWidth: getWindowDimensions()[0], maxHeight: getWindowDimensions()[1]}}>
        <div className="galaxy">
            <FirstPage/>
            {/* <SecondPage/> */}
            <Roadmap />
            <Partners />
          <Community />
          <Guide />

    
          
    </div>
      </div>
      </>
  );
}

export default App;
