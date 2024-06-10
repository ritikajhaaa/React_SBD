import sb1Image from "../images/background/sb1.jpg";
import "../Contact/Contact.css";
import { useState } from "react";
import { event } from "jquery";

export default function Contact(){
    // const [name , setName] = useState("");
    // const handleNameOnChange = (event) => {
    //     // console.log("Onchange")
    //     setName(event.target.value);
    // }

    // console.log(name);

    // const [email , setEmail] = useState("")
    // const handleEmailOnChange = (event) => {
    //     // console.log("Email Updated")
    //     setEmail(event.target.value);
    // }
    // console.log(email);

    // const [phone , setPhone] = useState("")
    // const handlePhoneOnChange = (event) => {
    //     // console.log("phone number updated");
    //     setPhone( event.target.value);
    // }
    // console.log(phone);

    // const [message , setMessage] = useState("")
    // const handleMessageChange = (event) => {
    //     // console.log("Message was updated");
    //     setMessage(event.target.value);
    // }
    // console.log(message);


    // const handleFormSubmission = () => {
    //     console.log("Afetr submit " +  name);
    //     console.log("Afetr submit " + email);
    //     console.log("Afetr submit " + phone);
    //     console.log("Afetr submit " + message);
    //     alert("Your message was send successfully");
    // }


    const inputChange = (e) =>  {
        console.log(e.target.name , e.target.value);
    }
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
                            <h1>Contact Us</h1>
                            <ul class="crumb">
                                <li><a href="index.php" style={{color: "#fec500", textDecoration: "none" }}>Home</a></li>
                                <li class="sep"></li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>




            <div id="content" class="no-top no-bottom">
             {/* section service begin  */}
            <section id="section-contact" class="side-bg left no-top np-bottom" style={{backgroundColor: "#f6f6f6", backgroundSize: "cover"}} data-bgcolor="#f6f6f6">
                <div class="image-container col-md-7 pull-left" data-delay="0" style={{backgroundSize: "cover" , height: "913px"}}>
                    <div class="background-image" style={{ backgroundSize: "cover"}}></div>
                </div>

                <div class="container-fluid" style={{backgroundSize: "cover"}}>
                    <div class="row" style={{backgroundSize: "cover"}}>
                        <div class="col-md-7 lg-text-white" style={{backgroundSize: "cover"}}>
                            <div class="inner-padding" style={{backgroundSize: "cover"}}>
                                <h3>Get In Touch</h3>
                                <div class="spacer-half" style={{backgroundSize: "cover"}}></div>
                                <div class="row" style={{backgroundSize: "cover"}}>
                                    <div class="col-md-12" style={{backgroundSize: "cover"}}>
                                          
                                        <address class="s1">
												<span style={{background: "none"}}><i class="fa fa-map-marker fa-lg"></i>Suite 307a, 113, Park St, Mullick Bazar, Taltala, Kolkata, West Bengal 700016</span>
												<span style={{background: "none"}}><i class="fa fa-phone fa-lg"></i>033 4812 9594</span>
												<span style={{background: "none"}}><i class="fa fa-envelope-o fa-lg"></i><a href=" ">info@staybrightdesign.com</a></span> 
                                            <span style={{background: "none"}}><i class="fa fa-envelope-o fa-lg"></i><a href=" ">hr@staybrightdesign.com</a></span> 
											</address>
                                        
                                            <iframe title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29479.680680445013!2d88.34694398879392!3d22.5431679229494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275594e09a817%3A0xcb2d3ae966b762b0!2sStay%20Bright%20Design%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1709092927041!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      
                                 </div>

                                    
                                </div>

                            </div>
                        </div>

                        <div class="col-md-5">
                            <div class="inner-padding">
                                <h3 style={{color: "#e56100"}}>Message Us</h3>
                                <form name="contactForm" id='contact_form' className="form-underline" method="post" action='email.php'>

                                    <div class="field-set">
                                        <input type='text' name='name' id='name' class="form-control" placeholder="Your Name"  onChange={(e) => {inputChange(e)}} />
                                    </div>

                                    <div class="field-set">
                                        <input type='text' name='email' id='email' class="form-control" placeholder="Your Email"  onChange={(e) => {inputChange(e)}} />
                                    </div>

                                    <div class="field-set">
                                        <input type='text' name='phone' id='phone' class="form-control" placeholder="Your Phone"  onChange={(e) => {inputChange(e)}} />
                                    </div>

                                    <div class="field-set">
                                        <textarea name='message' id='message' class="form-control" placeholder="Your Message" onChange={(e) => {inputChange(e)}}></textarea>
                                    </div>

                                    <div class="spacer-half"></div>

                                    <div id='submit' >
                                        <input type='submit' id='send_message' value='Submit' class="btn btn-custom color-2"/>
                                    </div>
                                  
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
             {/* section close  */}
        </div>
        </div>
    )
}