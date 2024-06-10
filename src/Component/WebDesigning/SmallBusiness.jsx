import React from 'react'; 
import { Link } from 'react-router-dom';
import sb1Image from "../images/background/sb1.jpg";
import Smallbusiness from "../images/small-web.jpg";
import "../css/bg.css";
import "../WebDesigning/WebDesign.css";

export default function SmallBusiness(){
    return(
        <div>
            <section
                id="subheader"
                className="dark no-top no-bottom"
                style={{
                    backgroundImage: `url(${sb1Image})`,
                    backgroundPosition: '0% 0%',
                    backgroundSize: 'cover',
                    // Add any additional CSS properties as needed
                    // background: "rgb(0 0 0 / 84%)"
                }}
                data-stellar-background-ratio=".2"
            >
                <div className="overlay-bg t70">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Small Businss Website</h1>
                                <ul className="crumb">
                                    <li><a href="index.html" style={{color: "#fec500", textDecoration: "none" }}>Home</a></li>
                                    <li className="sep"></li>
                                    <li>Small Businss Website</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="section-15" className="no-top" style={{backgroundSize: "cover"}}>
                <div className="container" style={{backgroundSize: "cover"}}>
                    <div className="row" style={{backgroundSize: "cover"}}>
                        <div className="service-new">         
                            <div className="container" style={{backgroundSize: "cover"}}>
                                <div className="row">
                                    <div className="col-md-4" style={{backgroundSize: "cover"}}>
                                        <div style={{padding: "40px"}}>
                                            <h2 style={{marginBottom: "20px" , color: "#e56100" , fontSize: "40px"}}><span className="uptitle">  </span> Our Services</h2>
                                            <ul className="left-listing">
                                                <li><Link to="/web-design">Web Design & Development</Link></li>
                                                <li><Link to="/web-app">Web App Development</Link></li>
                                                <li><Link to="/small-businss-website">Small Businss Website</Link></li>
                                                <li><Link to="/ecommerice-web">eCommerce Website Design</Link></li>
                                                <li><Link to="/logo-design">Logo Design</Link></li>
                                                <li><Link to="/corporate-identity">Corporate Identity Design</Link></li>
                                                <li><Link to="/brochure-design">Brochure Design</Link></li>
                                                <li><Link to="/video-creation">Video Creation</Link></li>
                                                <li><Link to="/content-creation">Content Creation</Link></li>
                                                <li><Link to="/mobile-app">Mobile App Development</Link></li>
                                                <li><Link to="/android-app">Android App Develpment</Link></li>
                                                <li><Link to="/ios">iOS App Development</Link></li>
                                                <li><Link to="/reach-native">Reach Native App Development</Link></li>
                                                <li><Link to="/hybrid-app">Hybrid App Develpment</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div style={{padding: "40px"}}>
                                            <h2 style={{marginBottom: "20px" , color: "#e56100" , fontSize: "40px"}}> Small Businss Website</h2>
                                            <img src={Smallbusiness} className="img-fluid" alt="" />
                                            <p style={{fontSize: "15px"}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                                                <br />

                                                Feel free to contact us at 033 4812 9594. Our team of experts are ready to provide you with the best solution.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>	 
                    </div>
                    <div className="spacer-double" style={{backgroundSize: "cover"}}></div>
                    <div className="spacer-double" style={{backgroundSize: "cover"}}></div>
                </div>
            </section>
        </div>
    )
}