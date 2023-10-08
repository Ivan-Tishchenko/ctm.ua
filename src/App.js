import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/new" element={<div>new</div>} />
          <Route path="/best" element={<div>best</div>} />
          <Route path="/sale" element={<div>sale</div>} />
          <Route
            path="/product"
            element={<div>product</div>}
          />
          <Route path="/day" element={<div>day</div>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
