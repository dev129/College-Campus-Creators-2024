import { SpeedInsights } from "@vercel/speed-insights/next";
import LandingPage from "./components/LandingPage";
const Home = () => {
  return (<>
    <SpeedInsights/>
      <LandingPage />
  </>
    
  );
};

export default Home;
