
import Home from "./components/Home/Home.jsx";
import Layout from "./Layout.jsx";
import HomeAnimation from "./components/HomeAnimation/HomeAnimation.jsx";
import Summary from './components/About/Summary.jsx'
import Skills from "./components/Skills/Skills.jsx";
import { useRef, useState } from "react";
function App() {
  const [loadingAnimationDone,setLoadingAnimationDone] = useState(false);
  const videoRef=useRef(null);

  return (
    <>
      {!loadingAnimationDone && (
        <HomeAnimation onComplete={() => setLoadingAnimationDone(true)} />
      )}
     <Layout loadingAnimationDone={loadingAnimationDone}>
      {loadingAnimationDone  
      && 
        <>
          <Home videoRef={videoRef}/>
          <Summary videoRef={videoRef}/>
          <Skills/>
        </>
      }
     </Layout>
    </>
  );
}

export default App;
