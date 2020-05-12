import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // withRouter
  // Link
} from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Services";
import PricingPlan from "./Pages/Pricing-plan";
import Appointment from "./Pages/Appointment";
import History from "./Pages/History";
import SingleService from "./Pages/Single-service";
import Testimonials from "./Pages/Testimonials";
import Blog from "./Pages/Blog";
import SingleBlog from "./Pages/Single-blog";
import BlogLeftSidebar from "./Pages/Blog-left-sidebar";
import BlogRightSidebar from "./Pages/Blog-right-sidebar";
import Contact from "./Pages/Contact";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Router>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact>
            {/* <Content /> */}
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/pricing-plan">
            <PricingPlan />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/single-service">
            <SingleService />
          </Route>
          <Route path="/testimonials">
            <Testimonials />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/single-blog">
            <SingleBlog />
          </Route>
          <Route path="/blog-left-sidebar">
            <BlogLeftSidebar />
          </Route>
          <Route path="/blog-right-sidebar">
            <BlogRightSidebar />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
