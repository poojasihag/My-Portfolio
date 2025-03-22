import LeftSection from "./components/leftSection/LeftSection";
import RightSection from "./components/rightSection/RightSection";
const App = () => {
  return (
    <div className="bg-gradient-to-r from-sky-700 relative  md:fixed md:top-0 md:w-full md:h-screen to-sky-200" >
   
      {/* LEFTSECTION COMPONENT */}
      <LeftSection />
      {/* RIGHTSECTION COMPONENT*/}
      <RightSection />
    </div>
  );
};

export default App;
