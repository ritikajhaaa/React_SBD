import logowhite from "../images/logo-white.png";
import iso from "../images/iso-1-1.png"
import "./Footer.css"

export default function footer(){
    return(
        <div>
             <footer>
            <div class="container" style={{background: "cover"}}>

                <div class="row" style={{background: "cover"}}>
                    <div class="col-md-3" style={{background: "cover"}}>
						<div class="widget" style={{background: "cover"}}>
                             <img src={logowhite} style={{width: "210px"}} />
							<div class="tiny-border" style={{background: "cover"}}><span></span></div>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.  </p>
                            
                            <img src={iso} style={{width: "150px"}} />
                        </div>
                    </div>

                    
                      <div class="col-md-3 col-xs-3">
                                <div class="widget">
                                    <h5>Company</h5>
									<div class="tiny-border"><span></span></div>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Team</a></li>
                                         <li><a href="#">Blog</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-md-3 col-xs-3">
                                <div class="widget">
                                    <h5>Services</h5>
									<div class="tiny-border"><span></span></div>
                                    <ul>
                                        <li><a href="#">Web Development</a></li>
                                        <li><a href="#">Graphics Design</a></li>
                                        <li><a href="#">Custom Software Development</a></li>
                                        <li><a href="#">Mobile Apps Development</a></li>
                                        <li><a href="#">Digital Marketing</a></li>
                                     </ul>
                                </div>
                            </div>

                            <div class="col-md-3 col-xs-3">
                                <div class="widget">
                                         <h5>Contact Us</h5>
 <div class="tiny-border"><span></span></div>
    <address class="s1">
            <span><i class="fa fa-map-marker fa-lg"></i>Suite 307a, 113, Park St, Mullick Bazar, Taltala, Kolkata, West Bengal 700016</span>
             <span><i class="fa fa-envelope-o fa-lg"></i><a href=" ">info@staybrightdesign.com</a></span>
        <span><i class="fa fa-envelope-o fa-lg"></i><a href=" ">hr@staybrightdesign.com</a></span>
        <span><i class="fa fa-phone fa-lg"></i>033 4812 9594</span>    
        </address>

                                </div>
                            </div>
                    
                    
                    <div class="col-md-6" >
                        <div class="row">
                             
                          
                        </div>
                    </div>
                </div>

            </div>

            <div class="subfooter">
                <div class="container text-center">
                    <div class="row">
                        <div class="col-md-12">
                            &copy; Copyright 2024 Stay Bright Design | All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    )
}