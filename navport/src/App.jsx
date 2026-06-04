import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Components/landing";
import Profile from "./Components/profile";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;