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
          <Route
            path="/product/:productID"
            element={<div>product</div>}
          />
          <Route
            path="/corporative-clients"
            element={<div>/corporative-clients</div>}
          />
          <Route
            path="/for-dealers"
            element={<div>/for-dealers</div>}
          />
          <Route
            path="/about-as"
            element={<div>/about-as</div>}
          />
          <Route
            path="/delivery"
            element={<div>/delivery</div>}
          />
          <Route
            path="/guarantee"
            element={<div>/guarantee</div>}
          />
          <Route
            path="/return-exchange"
            element={<div>/return-exchange</div>}
          />
          <Route path="/sale" element={<div>/sale</div>} />
          <Route
            path="/contacts"
            element={<div>/contacts</div>}
          />

          <Route
            path="/category"
            element={<div>categories</div>}
          />
          <Route
            path="/category/:categoryName"
            element={<div>smartphones</div>}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
