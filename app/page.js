import Navbar from "./components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import LandingPage from "./components/LandingPage";
const Home = () => {
  return (
    <>
    {/* <Navbar/> */}
      <LandingPage />
    </>
  );
};

export default Home;
