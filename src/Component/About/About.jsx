import about1 from "../images/about-1.jpg";
import about2 from "../images/about-2.jpg";
import sb1Image from "../images/background/sb1.jpg";

import "../About/About.css";


export default function About(){
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
            <div class="overlay-bg t70" style={{backgroundSize: "cover"}}>
                <div class="container" style={{backgroundSize: "cover"}}>
                    <div class="row" style={{backgroundSize: "cover"}}>
                        <div class="col-md-12" style={{backgroundSize: "cover"}}>
                            <h1>About Us</h1>
                            <ul class="crumb">
                                <li><a href="index.html" style={{color: "#fec500", textDecoration: "none" }}>Home</a></li>
                                <li class="sep"></li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

 <div id="content" class="no-top no-bottom">
            <section aria-label="section-services" style={{backgroundColor: "#ffffff"}}>
                <div class="container" style={{backgroundSize: "cover"}}>
                    <div class="row align-items-center" style={{backgroundSize: "cover"}}>
                        <div class="col-md-6" style={{backgroundSize: "cover"}}>
                            <div class="padding40" style={{backgroundSize: "cover"}}>
                                <h2 class="mb20"><span class="uptitle">  </span> The Best IT Solution with More than 10 Years of Experience</h2>
                                <p>Stay Bright Design is the leading telecommunications, digital marketing, outsourcing management, and IT Solution Company based in Kolkata, India, with more than 10 years of experience and an extremely flexible team; we know exactly how to put your business in the spotlight. We understand that every client has a different approach and needs a solution to every problem and for this very reason, every solution that we offer here is completely customized according to the requirement of the client.
<br />
 
Feel free to contact us at 033 4812 9594. Our team of experts are ready to provide you with the best solution.</p>
                            </div>
                        </div>
                        <div class="col-md-6 text-middle" style={{backgroundSize: "cover"}}> 
                            <img src={about1} class="img-fluid" alt="" />
                        </div>
                    </div>

                    <div class="row align-items-center">
                        <div class="col-md-6 text-middle">
                            <img src={about2} class="img-fluid" alt="" />
                        </div>
                        <div class="col-md-6 text-middle">
                            <div class="padding40">
                                <h2 class="mb20">Creative Agency</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


        </div>
    )
}