import {BrowserRouter, Routes , Route} from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Portfolio from "./Component/Portfolio/Portfolio";
import Service from "./Component/Services/Service";
import Client from "./Component/Client/Client";
import Blog from "./Component/Blog/Blog";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import WebDesign from "./Component/WebDesigning/WebDesign";
import WebApp from "./Component/WebDesigning/WebApp";
import SmallBusiness from "./Component/WebDesigning/SmallBusiness";
import EcommericeWeb from "./Component/WebDesigning/EcommericeWeb";
import EcommerceApp from "./Component/WebDesigning/EcommerceApp"
import LogoDesign from "./Component/WebDesigning/LogoDesign";
import CorporateIdentityDesign from "./Component/WebDesigning/CorporateIdentityDesign";
import BrochureDesign from "./Component/WebDesigning/BrochureDesign";
import VideoCreation from "./Component/WebDesigning/VideoCreation";
import ContentCreation from "./Component/WebDesigning/ContentCreation";
import MobileAppDevelopment from "./Component/WebDesigning/MobileAppDevelopment";
import AndroidAppDeveloment from "./Component/WebDesigning/AndroidAppDeveloment";
import IOSDevelopment from "./Component/WebDesigning/iOSDevelopment";
import ReactNativeAppDevelopment from "./Component/WebDesigning/ReactNativeAppDevelopment";
import HybridAppDevelopment from "./Component/WebDesigning/HybridAppDevelopment";
import ScrollToTop from "./Component/ScrollToTop/ScrollToTop";
import "./App.css";

import Uparrow from "./Component/images/ui/arrow-down.png"

// import "./Animation.css";

function App() {

  return (
    <div>
      <BrowserRouter>
      <ScrollToTop />
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
      {/* <Route path="/service" element={<Service></Service>}></Route> */}
      <Route path="/client" element={<Client></Client>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/web-design" element={<WebDesign></WebDesign>}></Route>
      <Route path="/web-app" element={<WebApp></WebApp>}></Route>
      <Route path="/small-businss-website" element={<SmallBusiness></SmallBusiness>}></Route>
      <Route path="/ecommerice-web" element={<EcommericeWeb></EcommericeWeb>}></Route>
      <Route path="/e-commerce-app" element={<EcommerceApp></EcommerceApp>}></Route>
      <Route path="/logo-design" element={<LogoDesign></LogoDesign>}></Route>
      <Route path="/corporate-identity" element={<CorporateIdentityDesign />}></Route>
      <Route path="/brochure-design" element={<BrochureDesign />}></Route>
      <Route path="/video-creation" element={<VideoCreation />}></Route>
      <Route path="/content-creation" element={<ContentCreation />}></Route>
      <Route path="/mobile-app" element={<MobileAppDevelopment></MobileAppDevelopment>}></Route>
      <Route path="/android-app" element={<AndroidAppDeveloment></AndroidAppDeveloment>}></Route>
      <Route path="/ios" element={<IOSDevelopment></IOSDevelopment>}></Route>
      <Route path="/reach-native" element={<ReactNativeAppDevelopment></ReactNativeAppDevelopment>}></Route>
      <Route path="/hybrid-app" element={<HybridAppDevelopment></HybridAppDevelopment>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App
