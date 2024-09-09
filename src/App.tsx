import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignIn from "./pages/SignIn";
import DevLinks from "./pages/DevLinks";
import Preview from "./pages/Preview";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/app" element={<DevLinks />} />
        {/* <Route path="/app/profile" element={<Profile />} /> */}
        <Route path="/preview" element={<Preview />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
