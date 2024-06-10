import sb1Image from "../images/background/sb1.jpg";
import client1 from "../images/client-1.jpg";
import client2 from "../images/client-2.jpg";
import client3 from "../images/client-3.jpg";
import client4 from "../images/client-4.jpg";
import client5 from "../images/client-5.jpg";
import client6 from "../images/client-6.jpg";
import client7 from "../images/client-7.jpg";
import client8 from "../images/client-8.jpg";
import client9 from "../images/client-9.jpg";
import client10 from "../images/client-10.jpg";
import client11 from "../images/client-11.jpg";
import client12 from "../images/client-12.jpg";

import "../Client/Client.css";

export default function Client(){
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
            <div class="overlay-bg t70">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1>Our Clients</h1>
                            <ul class="crumb">
                                <li><a href="index.php" style={{color: "#fec500", textDecoration: "none" }}>Home</a></li>
                                <li class="sep"></li>
                                <li>Our Clients</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
 
  <div id="content" class="no-top no-bottom">
            <section aria-label="section-team" style={{backgroundColor: "#ffffff"}}>
                <div class="container">
                    <div class="row">
                        
                        <div class="clearfix"></div>

                        <div class="row sequence">

                            <div class="col-md-2 col-sm-6 sq-item wow" style={{backgroundSize: "cover" , visibility: "visible" , animationDelay: "0s" , animationName: "fadeInUp"}}>
                                <div class="profile_pic text-center">
                                    <figure class="picframe mb30">
                                         <img src={client1} class="img-fluid" alt="" />
                                    </figure>
                                 </div>
                            </div>
                            
                            <div class="col-md-2 col-sm-6 sq-item wow">
                                <div class="profile_pic text-center">
                                    <figure class="picframe mb30">
                                         <img src={client2} class="img-fluid" alt="" />
                                    </figure>
                                 </div>
                            </div>
                             
                             <div class="col-md-2 col-sm-6 sq-item wow">
                                <div class="profile_pic text-center">
                                    <figure class="picframe mb30">
                                         <img src={client3} class="img-fluid" alt="" />
                                    </figure>
                                 </div>
                            </div>
                            
                            <div class="col-md-2 col-sm-6 sq-item wow">
                                <div class="profile_pic text-center">
                                    <figure class="picframe mb30">
                                         <img src={client4} class="img-fluid" alt="" />
                                    </figure>
                                 </div>
                            </div>
                            
                            <div class="col-md-2 col-sm-6 sq-item wow">
                                <div class="profile_pic text-center">
                                    <figure class="picframe mb30">
                                         <img src={client5} class="img-fluid" alt="" />
                                    </figure>
                                 </div>
                            </div>
                            
                            <div class="col-md-2 col-sm-6 sq-item wow">
                                <div class="profile_pic text-center">
                                    <figure class="picframe mb30">
                                         <img src={client6} class="img-fluid" alt="" />
                                    </figure>
                                 </div>
                            </div>
                            
                            <div class="col-md-2 col-sm-6 sq-item wow">
                                <div class="profile_pic text-center">
                                    <figure class="picframe mb30">
                                         <img src={client7} class="img-fluid" alt="" />
                                    </figure>
                                 </div>
                            </div>
                             <div class="col-md-2 col-sm-6 sq-item wow">
                                <div class="profile_pic text-center">
                                    <figure class="picframe mb30">
                                         <img src={client8} class="img-fluid" alt="" />
                                    </figure>
                                 </div>
                            </div>
                            
                             <div class="col-md-2 col-sm-6 sq-item wow">
                                <div class="profile_pic text-center">
                                    <figure class="picframe mb30">
                                         <img src={client9} class="img-fluid" alt="" />
                                    </figure>
                                 </div>
                            </div>
                            
                             <div class="col-md-2 col-sm-6 sq-item wow">
                                <div class="profile_pic text-center">
                                    <figure class="picframe mb30">
                                         <img src={client10} class="img-fluid" alt="" />
                                    </figure>
                                 </div>
                            </div>
                            
                             <div class="col-md-2 col-sm-6 sq-item wow">
                                <div class="profile_pic text-center">
                                    <figure class="picframe mb30">
                                         <img src={client11} class="img-fluid" alt="" />
                                    </figure>
                                 </div>
                            </div>
                            
                             <div class="col-md-2 col-sm-6 sq-item wow">
                                <div class="profile_pic text-center">
                                    <figure class="picframe mb30">
                                         <img src={client12} class="img-fluid" alt="" />
                                    </figure>
                                 </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </section>

            
           
        </div> 


        </div>
    )
}