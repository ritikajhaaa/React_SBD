// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import logo from "../images/logo-white.png";
// import logo1 from "../images/logo.png";
// import "../Header/Header.css";

// export default function Header(){

//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const [isPhoneView, setIsPhoneView] = useState(false);
//     const [previousHeaderHeight, setPreviousHeaderHeight] = useState(551); // Default height when sidebar is closed

//     useEffect(() => {
//         function handleResize() {
//             setIsPhoneView(window.innerWidth < 768); // Set to true if viewport width is less than 768px (phone view)
//         }

//         handleResize(); // Initial call to set the initial state based on viewport width
//         window.addEventListener('resize', handleResize); // Listen for window resize events

//         return () => {
//             window.removeEventListener('resize', handleResize); // Cleanup
//         };
//     }, []);

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//         setPreviousHeaderHeight(sidebarOpen ? 551 : 85); // Toggle header height
//     };

    // const [color, setColor] = useState(false);
    // const changeColor = () => {
    //     if(window.scrollY >= 90 ){
    //         setColor(true);
    //     } else {
    //         setColor(false);
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', changeColor);
    //     return () => {
    //         window.removeEventListener('scroll', changeColor);
    //     };
    // }, []);

//     return(
//         <div>
//             <div id="homepage">


//             <div id="wrapper">


//             {/* <header className={color ? 'header header-bg' : 'haeder'} style={{ height: `${headerHeight}px` }}> */}
//             <header className={color ? 'header header-bg header-mobile' : 'header header-mobile'}  style={{ height: isPhoneView && sidebarOpen ? '551px' : isPhoneView ? '85px' : 'auto' }}>
                    

//                 <div className="container">
//                 <div className="row">
//                     <div className="col-md-12">
//                          <div id="logo">
//                             <a href="index.html">
//                                 <img className="logo" src={logo} alt="" />
//                                 <img className="logo-2" src={logo1} alt="" />
//                             </a>
//                         </div>
                         
//                         <span id="menu-btn" onClick={toggleSidebar}></span>
//                         <nav className={sidebarOpen ? 'open' : ''}>
//                             <ul id="mainmenu">
//                                 <li><Link to="/" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Home<span></span></Link></li>
//                                 <li><Link to="/about" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>About us<span></span></Link></li>
//                                 <li><Link to="/portfolio" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Portfolio<span></span></Link></li>
//                                 <li><Link to="#" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Our Services<span></span></Link>
//                                     <ul class="mega">
// 										<li>
// 											<div className="container">
// 												<div className="menu-content">
// 													<div className="row">
// 														<div className="col-md-3">
// 															<ul>
//                                                                 <li><Link to="/web-design" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Web Design & Development</Link></li>
//                                                                 <li><Link to="/web-app" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Web App Development</Link></li>
//                                                                 <li><Link to="/small-businss-website" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Small Businss Website</Link></li>
//  															</ul>
// 														</div>
// 														<div className="col-md-3">
// 															<ul>
//                                                                 <li><Link to="/ecommerice-web" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>eCommerce Website Design</Link></li>
//                                                                 <li><Link to="/e-commerce-app" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>eCommerce App</Link></li>
//  															</ul>
// 														</div>
// 														<div className="col-md-3">
// 															<ul>
//                                                                 <li><Link to="/logo-design" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Logo Design</Link></li>
//                                                                 <li><Link to="/corporate-identity" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Corporate Identity Design</Link></li>
//                                                                 <li><Link to="/brochure-design" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Brochure Design</Link></li>
//                                                                 <li><Link to="/video-creation" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Video Creation</Link></li>
//                                                                 <li><Link to="/content-creation" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Content Creation</Link></li>
// 															</ul>
// 														</div>
														
														
														
// 														<div className="col-md-3">
// 															<ul>
//                                                                 <li><Link to="/mobile-app" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Mobile App Development</Link></li>
//                                                                 <li><Link to="/android-app" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Android App Develpment</Link></li>
//                                                                 <li><Link to="/ios" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>iOS App Development</Link></li>
//                                                                 <li><Link to="/reach-native" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Reach Native App Development</Link></li>
//                                                                 <li><Link to="/hybrid-app" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Hybrid App Develpmen</Link></li>
//  															</ul>
// 														</div>
														
// 														<div className="clearfix"></div>
// 													</div>
// 												</div>
// 											</div>
// 										</li>                                        
//                                     </ul>

//                                 </li>
                                
//                                 <li><Link to="/client" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Client<span></span></Link></li>
//                                 <li><Link to="" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Blog<span></span></Link></li>
//                                 <li><Link to="/contact" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Contact Us<span></span></Link></li>                      
//                             </ul>
//                         </nav>
//                     </div>
					 
//                 </div>
//             </div>
//         </header>

//            </div>


//             </div>
//         </div>
//     )
// }





// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import logo from "../images/logo-white.png";
// import logo1 from "../images/logo.png";
// import "../Header/Header.css";

// export default function Header() {
//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const [isPhoneView, setIsPhoneView] = useState(false);
//     const [headerHeight, setHeaderHeight] = useState('auto'); // Default header height
//     const [isActive, setIsActive] = useState(false);

//     useEffect(() => {
//         function handleResize() {
//             setIsPhoneView(window.innerWidth < 768);
//         }

//         handleResize();
//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//         if (isPhoneView) {
//             setHeaderHeight(sidebarOpen ? '80px' : '551px');
//         }
//     };

//     const toggleServices = () => {
//         if (isPhoneView) {
//             setHeaderHeight(isActive ? '1500px' : '551px');
//             setIsActive(!isActive);
//         }
//     };
//     return (
//         <div>
//             <div id="homepage">
//                 <div id="wrapper">
//                     <header className={isPhoneView ? 'header header-mobile' : 'header'} style={{ height: headerHeight }}>
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-md-12">
//                                     <div id="logo">
//                                         <a href="index.html">
//                                             <img className="logo" src={logo} alt="" />
//                                             <img className="logo-2" src={logo1} alt="" />
//                                         </a>
//                                     </div>
//                                     <span id="menu-btn" onClick={toggleSidebar}></span>
//                                     <nav className={sidebarOpen ? 'open' : ''}>
//                                         <ul id="mainmenu">
//                                             <li><Link to="/" onClick={toggleSidebar}>Home<span></span></Link></li>
//                                             <li><Link to="/about" onClick={toggleSidebar}>About us<span></span></Link></li>
//                                             <li><Link to="/portfolio" onClick={toggleSidebar}>Portfolio<span></span></Link></li>
//                                             <li>
//                                                 <span onClick={toggleServices}>Our Services</span>
//                                                 <ul className={isActive && isPhoneView ? 'mega active' : 'mega'} style={{ height: isActive && isPhoneView ? '0px' : 'auto' }}>
//                                                     <li>
// 											<div className="container">
// 												<div className="menu-content">
// 													<div className="row">
// 														<div className="col-md-3">
// 															<ul>
//                                                                 <li><Link to="/web-design" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Web Design & Development</Link></li>
//                                                                 <li><Link to="/web-app" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Web App Development</Link></li>
//                                                                 <li><Link to="/small-businss-website" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Small Businss Website</Link></li>
//  															</ul>
// 														</div>
// 														<div className="col-md-3">
// 															<ul>
//                                                                 <li><Link to="/ecommerice-web" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>eCommerce Website Design</Link></li>
//                                                                 <li><Link to="/e-commerce-app" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>eCommerce App</Link></li>
//  															</ul>
// 														</div>
// 														<div className="col-md-3">
// 															<ul>
//                                                                 <li><Link to="/logo-design" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Logo Design</Link></li>
//                                                                 <li><Link to="/corporate-identity" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Corporate Identity Design</Link></li>
//                                                                 <li><Link to="/brochure-design" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Brochure Design</Link></li>
//                                                                 <li><Link to="/video-creation" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Video Creation</Link></li>
//                                                                 <li><Link to="/content-creation" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Content Creation</Link></li>
// 															</ul>
// 														</div>
														
														
														
// 														<div className="col-md-3">
// 															<ul>
//                                                                 <li><Link to="/mobile-app" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Mobile App Development</Link></li>
//                                                                 <li><Link to="/android-app" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Android App Develpment</Link></li>
//                                                                 <li><Link to="/ios" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>iOS App Development</Link></li>
//                                                                 <li><Link to="/reach-native" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Reach Native App Development</Link></li>
//                                                                 <li><Link to="/hybrid-app" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Hybrid App Develpmen</Link></li>
//  															</ul>
// 														</div>
														
// 														<div className="clearfix"></div>
// 													</div>
// 												</div>
// 											</div>
// 										</li>                                        
//                                     </ul>

//                                 </li>
                                
//                                 <li><Link to="/client" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Client<span></span></Link></li>
//                                 <li><Link to="" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Blog<span></span></Link></li>
//                                 <li><Link to="/contact" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Contact Us<span></span></Link></li>                      
//                             </ul>
//                         </nav>
//                     </div>
					 
//                 </div>
//             </div>
//         </header>

//            </div>


//             </div>
//         </div>
//     )
// }








import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from "../images/logo-white.png";
import logo1 from "../images/logo.png";
import "../Header/Header.css";

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isPhoneView, setIsPhoneView] = useState(false);
    const [headerHeight, setHeaderHeight] = useState('auto'); // Default header height
    const [isActive, setIsActive] = useState(false);
    const [megaHeight , setMegaHeight] = useState('');

    useEffect(() => {
        function handleResize() {
            setIsPhoneView(window.innerWidth < 768);
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Set initial height of mega menu to 0
        if (isPhoneView) {
            setMegaHeight(isActive && isPhoneView ? '0px' : 'auto');
        }
        // setHeaderHeight(isActive && isPhoneView ? '90px' : 'auto');
    }, [isActive, isPhoneView]);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        if (isPhoneView) {
            setHeaderHeight(sidebarOpen ? '80px' : '551px');
        }
    };

    const toggleServices = () => {
        if (isPhoneView) {
            setHeaderHeight(isActive ? '551px' : '1500px');
            setMegaHeight(isActive ? '0px': '881px');
            setIsActive(!isActive);
        }
    }

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 90 ){
            setColor(true);
        } else {
            setColor(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeColor);
        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    return (
        <div>
            <div id="homepage">
                <div id="wrapper">
                {/* <header className={color ? 'header header-bg header-mobile' : 'header header-mobile'}  style={{ height: isPhoneView && sidebarOpen ? '551px' : isPhoneView ? '85px' : 'auto' }}>
                    <header className={isPhoneView ? 'header header-mobile' : 'header'} style={{ height: headerHeight }}> */}
                    <header className={!isPhoneView ? (color ? "header header-bg" : 'haeder') : ' header-mobile'} style={{ height: headerHeight }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div id="logo">
                                        <a href="index.html">
                                            <img className="logo" src={logo} alt="" />
                                            <img className="logo-2" src={logo1} alt="" />
                                        </a>
                                    </div>
                                    <span id="menu-btn" onClick={toggleSidebar}></span>
                                    <nav className={sidebarOpen ? 'open' : ''}>
                                        <ul id="mainmenu">
                                            <li><Link to="/" onClick={toggleSidebar}>Home<span></span></Link></li>
                                            <li><Link to="/about" onClick={toggleSidebar}>About us<span></span></Link></li>
                                            <li><Link to="/portfolio" onClick={toggleSidebar}>Portfolio<span></span></Link></li>
                                            <li id='service'>
                                                <Link to="" >Our Services<span onClick={toggleServices}></span></Link>
                                                <span onClick={toggleServices}></span>
                                                <ul className={isPhoneView ? (isActive ? 'mega active' : 'mega') : 'mega'} style={{ height: isPhoneView ? (isActive ? '881px' : '0px') : 'auto' }}>

                                                    <li>
											<div className="container">
												<div className="menu-content">
													<div className="row">
														<div className="col-md-3">
															<ul>
                                                                <li><Link to="/web-design" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Web Design & Development</Link></li>
                                                                <li><Link to="/web-app" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Web App Development</Link></li>
                                                                <li><Link to="/small-businss-website" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Small Businss Website</Link></li>
 															</ul>
														</div>
														<div className="col-md-3">
															<ul>
                                                                <li><Link to="/ecommerice-web" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>eCommerce Website Design</Link></li>
                                                                <li><Link to="/e-commerce-app" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>eCommerce App</Link></li>
 															</ul>
														</div>
														<div className="col-md-3">
															<ul>
                                                                <li><Link to="/logo-design" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Logo Design</Link></li>
                                                                <li><Link to="/corporate-identity" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Corporate Identity Design</Link></li>
                                                                <li><Link to="/brochure-design" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Brochure Design</Link></li>
                                                                <li><Link to="/video-creation" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Video Creation</Link></li>
                                                                <li><Link to="/content-creation" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Content Creation</Link></li>
															</ul>
														</div>
														
														
														
														<div className="col-md-3">
															<ul>
                                                                <li><Link to="/mobile-app" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Mobile App Development</Link></li>
                                                                <li><Link to="/android-app" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Android App Develpment</Link></li>
                                                                <li><Link to="/ios" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>iOS App Development</Link></li>
                                                                <li><Link to="/reach-native" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Reach Native App Development</Link></li>
                                                                <li><Link to="/hybrid-app" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Hybrid App Develpmen</Link></li>
 															</ul>
														</div>
														
														<div className="clearfix"></div>
													</div>
												</div>
											</div>
										</li>                                        
                                    </ul>

                                </li>
                                
                                <li><Link to="/client" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Client<span></span></Link></li>
                                <li><Link to="" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Blog<span></span></Link></li>
                                <li><Link to="/contact" onClick={() => { setSidebarOpen(false); setPreviousHeaderHeight(551); }}>Contact Us<span></span></Link></li>                      
                            </ul>
                        </nav>
                    </div>
					 
                </div>
            </div>
        </header>

           </div>


            </div>
        </div>
    )
}

