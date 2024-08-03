import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import LandingPage from "./components/LandingPage";
const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white ">
      <Navbar />
      <LandingPage />
    </div>
  );
};

export default Home;
