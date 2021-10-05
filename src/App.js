import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Courses from "./Components/Pages/Courses";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/body">
            <Body></Body>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <Body></Body>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;