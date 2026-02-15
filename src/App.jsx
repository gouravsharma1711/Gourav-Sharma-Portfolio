
import Home from "./components/Home/Home.jsx";
import Layout from "./Layout.jsx";
import HomeAnimation from "./components/HomeAnimation/HomeAnimation.jsx";
import { useState } from "react";
function App() {
  const [loadingAnimationDone,setLoadingAnimationDone] = useState(false);

  return (
    <>
      {!loadingAnimationDone && (
        <HomeAnimation onComplete={() => setLoadingAnimationDone(true)} />
      )}
     <Layout loadingAnimationDone={loadingAnimationDone}>
      {loadingAnimationDone && <Home />}
     </Layout>
    </>
  );
}

export default App;
