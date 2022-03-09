import NewsFeed from "./Components/NewsFeed";
import Nav from "./Components/Nav";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import {BrowserRouter as Router,Routes,
  Route} from "react-router-dom";
import {useState} from "react";

function App() {
  const [country,setCountry] = useState("in");
  return (
    <div className="App">
      <Router>
      <Nav setCountry={setCountry} country={country}/>
      <Routes>
        <Route index element={<NewsFeed category="general" key="general" country={country}/>} />
        <Route path="technology" element={<NewsFeed category="technology" key="technology" country={country} />} />
        <Route path="health" element={<NewsFeed category="health" key="health" country={country} />} />
        <Route path="business" element={<NewsFeed category="business" key="business" country={country}  />} />
        <Route path="entertainment" element={<NewsFeed category="entertainment" key="entertainment" country={country} />} />
        <Route path="science" element={<NewsFeed category="science" key="science"  country={country}  />} />
        <Route path="sports" element={<NewsFeed category="sports" key="sports"  country={country} />} />
        <Route path="about" element={<About/>} />
        <Route path="*" element={<NotFound />} />
    </Routes>
      </Router>
    </div>
  );
}

export default App;
