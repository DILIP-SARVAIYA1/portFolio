import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Projects from "./components/Projects";
import MainPage from "./components/MainPage";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/" element={<AboutMe />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
