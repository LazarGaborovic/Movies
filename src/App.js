import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Movies from "./components/Movies";
import SingleMovie from "./components/SingleMovie";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Movies />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/:id" element={<SingleMovie />} />
          <Route
            path="*"
            element={<p style={{ color: "#fff" }}>Something went wrong! 404</p>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
