import LeftSection from "./components/leftSection/LeftSection";
import RightSection from "./components/rightSection/RightSection";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-sky-700 fixed top-0 w-full h-screen to-sky-200  ">
      {/* LEFTSECTION COMPONENT */}
      <LeftSection />

      {/* RIGHTSECTION COMPONENT*/}
      <RightSection />
    </div>
  );
};

export default App;
