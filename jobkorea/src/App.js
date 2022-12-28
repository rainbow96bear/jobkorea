import { BrowserRouter } from "react-router-dom";

import Components from "./components/index";

import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Components></Components>
    </BrowserRouter>
  );
}

export default App;
