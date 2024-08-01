import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
const Landing = dynamic(() => import("@/app/components/LandingPage"),{ssr:true,loading:()=><p>Loading</p>});
const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white ">
      <Navbar />
      <Landing />
    </div>
  );
};

export default Home;
