import General from "./pages/General";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";
import VideoDetails from "./components/Video/VideoDetails/VideoDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<General />} />
        <Route path="video/:videoId" element={<VideoDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
