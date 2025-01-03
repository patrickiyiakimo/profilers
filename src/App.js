import Hero from "./components/Hero";
import Profiles from "./components/Profiles";

function App() {
  return (
    <div className="App">
      <>
        <Hero />
      </>
      <>
        <Profiles />
      </>
    </div>
  );
}

export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Hero from "./components/Hero";
// import Profiles from "./components/Profiles";
// import UserDetails from "./components/UserDetails";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/profiles" element={<Profiles />} />
//         <Route path="/profiles/:username" element={<UserDetails />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
