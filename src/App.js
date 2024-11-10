import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/projects" element={<Projects />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
