import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/edit" element={<EditPage />} />
    </Routes>
  );
}

export default App;
