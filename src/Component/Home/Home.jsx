import { useEffect, useRef } from 'react';
import CountUp from 'react-countup';

import Header from "../Header/Header";
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import "../css/bootstrap.min.css";
// import "../css/bootstrap-grid.min.css";
// import "../css/bootstrap-reboot.min.css";
// import "../css/animate.css";
// import "../css/magnific-popup.css";
import Button from 'react-bootstrap/Button';

// import Design from './Design.jsx';
import ParticlesComponent from './Particles';


import 'owl.carousel/dist/assets/owl.carousel.css';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  



// import "../Home/owl.carousel.css";
import team1 from "../images/team/1.jpg";
import team2 from "../images/team/2.jpg";
import team3 from "../images/team/3.jpg";
import team4 from "../images/team/4.jpg";


// import "../css/style.css"
import "../css/bg.css";
// import "../css/animate.css"
import "../Home/Home.css";

// import image
import icon1 from "../images/icon-1.png";
import icon2 from "../images/icon-2.png";
import misc1 from "../images/misc/1.jpg";
import  misc2 from "../images/misc/2.jpg";


// import Project1 from "../images/portfolio/project-1.jpg";
// import Project6 from "../images/portfolio/project-6.jpg";
// import Project4 from "../images/portfolio/project-4.jpg";
// import Project5 from "../images/portfolio/project-5.jpg";
// import Project2 from "../images/portfolio/project-2.jpg";
// import Project3 from "../images/portfolio/project-3.jpg";

// import Portfolio from "../Portfolio/"

import Portfolio from "../Home/Portfolio/Portfolio";


import Process from './Process/Process';

import socialdia from "../images/social-dia.mp4"

import blog1 from "../images/blog/pic-blog-1.jpg";
import blog2 from "../images/blog/pic-blog-2.jpg";
import blog3 from "../images/blog/pic-blog-3.jpg";
import blog4 from "../images/blog/pic-blog-4.jpg";
import blog5 from "../images/blog/pic-blog-5.jpg";
import blog6 from "../images/blog/pic-blog-6.jpg";

import LatestPost from './LatestPost/LatestPost';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock , faComment , faHeart }  from '@fortawesome/free-solid-svg-icons'; 
<FontAwesomeIcon icon="fa-sharp fa-thin fa-magnifying-glass" />


import AOS from 'aos';
import 'aos/dist/aos.css';
// import WOW from 'wowjs';
// import 'wowjs/css/libs/animate.css';

// import WOW from 'wowjs/dist/wow';
// import 'wowjs/css/libs/animate.css';

export default function Home(){

    // const counterNum = document.querySelectorAll(".timer");
    // const speed = 200;
    // counterNum.forEach((curElem) => {

    //     const updateNumber = () => {
    //         const targetNumber = parseInt(curElem.dataSet.to);
    //         // console.log(targetNumber);
    //         const initialNumber = parseInt(curElem.innerText);

    //         const incrementNumber = Math.trunc(targetNumber/speed);

    //         if(initialNumber < targetNumber){
    //             curElem .innerText = initialNumber + incrementNumber;
    //             setTimeout(updateNumber , 10);
    //         }
    //     }
    //     updateNumber();
    // })




 const countUpRef1 = useRef(null);
  const countUpRef2 = useRef(null);
  const countUpRef3 = useRef(null);
  const countUpRef4 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countUpRef1.current.start();
          countUpRef2.current.start();
          countUpRef3.current.start();
          countUpRef4.current.start();
        }
      });
    }, { threshold: 0.5 });

    const targets = document.querySelectorAll('.de_count');
    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, []);



  useEffect(() => {
    // const wow = new WOW.WOW();
    // wow.init();

    // const wow = new WOW.WOW({
    //     delay: '0.3s'
    // });
    // wow.init();

    // setTimeout(() => {
    //     AOS.init();
    // }, 2000);
    AOS.init();
    AOS.init({duration: 2000})

    document.querySelectorAll('[data-aos]').forEach((element, index) => {
        element.setAttribute('data-aos-delay', `${index * 300}ms`);
    });
}, []);





    return(
        <div>
            {/* <Header></Header> */}

            <div id="content" className="no-bottom no-top">
            <div id="top"></div>

            <div className="HomePage">


            <section id="section-hero-2" className="full-height relative no-top no-bottom text-light">

<div id="particles-js">
<ParticlesComponent></ParticlesComponent>
</div>

{/* <ParticlesComponent id="particles" /> */}

<div className="overlay-bg t0">
    <div className="center-y fadeScroll relative" data-scroll-speed="4">
        <div className="container">
            <div className="row">
                <div className="content">
                <div className="col-md-8">
                    <div className="mask">
                        <h4 ><span className="id-color">Stay Bright Design</span></h4>
                    </div>
                    <div class="mask">
                        <h1>Bring  Creative Solution<span class="id-color">.</span></h1>
                    </div>
                </div>
                
                <div class="spacer-half"></div>
                
                <div class="col-md-6">
                    <div class="mask">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                        </p>
                    </div>
                    <div class="spacer-half"></div>
                    {/* <a href="#section-about" class="wow fadeIn btn btn-custom" data-wow-delay="2s">Start Now</a> */}
                    <Button class="button" variant="primary" style={
                        {background: "#ff6a05", borderColor: "#ff6a05" , padding: "15px 30px 15px 30px"}}>Start Now <a href="#section-about"></a></Button>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>




<section id="section-about" style={{backgroundSize: "cover"}}>
                <div class="container" style={{backgroundSize: "cover"}}>
                    <div class="row" style={{backgroundSize: "cover"}}>
                        <div class="col-md-4">
                            <blockquote class="s1">The Best IT Solution With <br />10 Years of Experience
                               
                            </blockquote>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="mask">
                                <div class="cover">
                                    <h3><img src={icon1} style={{width: "70px"}} /><span>Award Winning</span></h3>
                                    <p>We’re award-winning innovators and doers. In a digital world that’s constantly evolving, we look ahead to what’s next and what’s better.</p>
                                </div>
                                <img src={misc1} alt="" class="img-fluid"/>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="mask">
                                <div class="cover">
                                    <h3><img src={icon2} style={{width: "70px"}} /><span>Professional Staff</span></h3>
                                    <p>With the help of our professional employees, we have completed more than 5000 projects without cutting any corners.</p>
                                </div>
                                <img src={misc2} alt="" class="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section id="section-services" class="no-top no-bottom text-light" data-stellar-background-ratio=".2" style={{backgroundSize: "cover"}}>
                <div class="overlay-bg t70" style={{backgroundSize: "cover"}}>
                    <div class="container" style={{backgroundSize: "cover"}}>

                        <div class="row sequence"  style={{visibility: "visible" , animation: "fadeInUp 2s"}}>
                            <div class="col-md-12 text-center">
                                <h2 style={{color: "white"}}><span class="uptitle" style={{color: "orange"}}>Services</span>What We Do</h2>
                            </div>

                            
                            <div class="col-md-4 col-sm-6 feature-box left mb30 sq-item wow sq-item wow" data-aos="fade-up">
                                <i class="icon_lightbulb_alt id-color"></i>
                                <div class="text">
                                    <a href="web-design.php" style={{textDecoration: "none" , color: "#fff"}}><h3 style={{fontSize: "18px", paddingBottom: "10px"}}>Website Design</h3></a>
                                    We have an amazingly creative and hardworking team that offers web development services to our clients to deliver them the website that people could only dream of.
                                </div>
                            </div>
                            

                            
                            <div class="col-md-4 col-sm-6 feature-box left mb30 sq-item wow" data-aos="fade-up">
                                <i class="icon_datareport id-color"></i>
                                <div class="text">
                                    <a href=" " style={{textDecoration: "none" , color: "#fff"}}><h3 style={{fontSize: "18px", paddingBottom: "10px"}}>Digital Marketing</h3></a>
                                    We distinguish ourselves from others by providing highly effective digital marketing solutions.
                                </div>
                            </div>
                            

                            
                            <div class="col-md-4 col-sm-6 feature-box left mb30 sq-item wow" data-aos="fade-up">
                                <i class="icon_camera_alt id-color"></i>
                                <div class="text">
                                    <a href="video-creation.php" style={{textDecoration: "none" , color: "#fff"}}><h3 style={{fontSize: "18px", paddingBottom: "10px"}}>Video Creation</h3></a>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                                </div>
                            </div>
                            

                            
                            <div class="col-md-4 col-sm-6 feature-box left mb30 sq-item wow" data-aos="fade-up">
                                <i class="icon_tag_alt id-color"></i>
                                <div class="text">
                                    <a href="logo-design.php" style={{textDecoration: "none" , color: "#fff"}}><h3 style={{fontSize: "18px", paddingBottom: "10px"}}>Graphic Design</h3></a>
                                    Our highly skilled graphic design team works their magic to make every graphic poster or banner the best in every aspect.
                                </div>
                            </div>
                            

                            
                            <div class="col-md-4 col-sm-6 feature-box left mb30 sq-item wow" data-aos="fade-up">
                                <i class="icon_pencil-edit id-color"></i>
                                <div class="text">
                                    <a href="android-app.php" style={{textDecoration: "none" , color: "#fff"}}><h3 style={{fontSize: "18px", paddingBottom: "10px"}}>App Development</h3></a>
                                   We offer custom mobile app development to make our clients' brands bigger than they are.
                                </div>
                            </div>
                            

                            
                            <div class="col-md-4 col-sm-6 feature-box left mb30 sq-item wow" data-aos="fade-up">
                                <i class="icon_search id-color"></i>
                                <div class="text">
                                    <a href=" " style={{textDecoration: "none" , color: "#fff"}}><h3 style={{fontSize: "18px", paddingBottom: "10px"}}>SEO</h3></a>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>







            <section id="section-17"  aria-label="section-portfolio">
                <Portfolio></Portfolio>

				
				<div class="spacer-double"></div>
				
		<div className="container">
      <div className="row sequence">
        <div className="col-md-3 col-sm-6 col-xs-6 sq-item wow" data-aos="fade-up"  data-wow-delay="0.5s">
          <div className="de_count">
          <h3 class="timer" data-to="315" style={{color: "#e56100"}}><CountUp start={0} end={8240} duration={2.5} ref={countUpRef1} /></h3> 
            {/* <CountUp start={0} end={8240} duration={2.5} ref={countUpRef1} /> */}
            <span style={{ color: "#86888c", fontSize: "15px" }}>Hours of Works</span>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-6 sq-item wow" data-aos="fade-up"  data-wow-delay="0.125s">
          <div className="de_count">
            <h3 class="timer" data-to="315" style={{color: "#e56100"}}><CountUp start={0} end={315} duration={2.5} ref={countUpRef2} /></h3>
            <span style={{ color: "#86888c", fontSize: "15px" }}>Projects Done</span>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-6 sq-item wow" data-aos="fade-up"  data-wow-delay="0.25s">
          <div className="de_count">
           <h3 class="timer" data-to="250" style={{color: "#e56100"}}><CountUp start={0} end={250} duration={2.5} ref={countUpRef3} /></h3>
            <span style={{ color: "#86888c", fontSize: "15px" }}>Satisfied Customers</span>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-6 sq-item wow" data-aos="fade-up"  data-wow-delay="0.375s">
          <div className="de_count">
           <h3 class="timer" data-to="32" data-speed="2500" style={{color: "#e56100"}}><CountUp start={0} end={32} duration={2.5} ref={countUpRef4} /></h3>
            <span style={{ color: "#86888c", fontSize: "15px" }}>Awards Winning</span>
          </div>
        </div>
      </div>
    </div>



            </section>



            {/* <section id="section-process" class="text-light no-top no-bottom" data-bgcolor="#333" data-stellar-background-ratio=".2"
            style={{backgroundColor: "rgb(51, 51, 51)" , backgroundSize: "cover"}}
            >
                <div class="overlay-bg t70" style={{backgroundSize: "cover", backgroundColor: "rgb(0 0 0 / 84%)"}}>
                    <div class="container" style={{backgroundSize: "cover"}}>
                        <div class="row" style={{backgroundSize: "cover"}}>
                            <div class="col-md-12 text-center">
                                <h2 style={{color: "white" , marginTop: "0px"}}><span class="uptitle" style={{color: "#fec500"}}>STEPS</span>Our Process</h2>
                            </div>


                            <div class="col-md-12" >
                                <div class="de_tab tab_steps style-2">
                                    <ul class="de_nav">
                                        <li class="active wow fadeInRight" data-aos="fade-left" data-aos-delay="0s"><span style={{display: "inline-block"}}><i class="icon_lightbulb_alt"></i>Idea</span>
                                            <div class="arrow" style={{backgroundSize: "cover"}}></div>
                                        </li>
                                        <li class="wow fadeInRight" data-aos="fade-left" data-aos-delay=".3s"><span style={{display: "inline-block"}}><i class="icon_easel"></i>Design</span>
                                            <div class="arrow" style={{backgroundSize: "cover"}}></div>
                                        </li>
                                        <li class="wow fadeInRight"  data-aos="fade-left" data-aos-delay=".6s"><span style={{display: "inline-block"}}><i class="icon_pencil-edit"></i>Develop</span>
                                            <div class="arrow" style={{backgroundSize: "cover"}}></div>
                                        </li>
                                        <li class="wow fadeInRight" data-aos="fade-left" data-aos-delay=".9s"><span style={{display: "inline-block"}}><i class="icon_datareport"></i>Result</span>
                                            <div class="arrow" style={{backgroundSize: "cover"}}></div>
                                        </li>
                                    </ul>

                                    <div class="de_tab_content" style={{backgroundSize: "cover"}}>

                                        <div id="tab1" style={{backgroundSize: "cover" , display: 'block'}}>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                                            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.
                                        </div>

                                        <div id="tab2">
                                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam. Sed ut perspiciatis unde omnis
                                            iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                            quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                        </div>

                                        <div id="tab3">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                                            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.
                                        </div>

                                        <div id="tab4">
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                                            quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section> */}


            <section id="section-process" class="text-light no-top no-bottom" data-bgcolor="#333" data-stellar-background-ratio=".2"
            style={{backgroundColor: "rgb(51, 51, 51)" , backgroundSize: "cover"}}
            >
                <Process></Process>
            </section>




            <section id="section-testimonial" aria-label="section-testimonial" data-bgcolor="#f8f8f8" style={{backgroundSize: "cover" , backgroundColor: "rgb(248, 248, 248)"}}>
                <div id="testimonial-carousel" className="owl-carousel owl-theme" >

                    <div class="item">
                        <div class="de_testi opt-2">
                            <blockquote>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.</p>
                                <div class="de_testi_by">
                                    <img src="images/people/1.jpg" class="img-circle" alt="" />
                                    <span>John, Pixar Studio</span>
                                </div>
                            </blockquote>
                        </div>
                    </div>

                    <div class="item">
                        <div class="de_testi opt-2">
                            <blockquote>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.</p>
                                <div class="de_testi_by">
                                    <img src="images/people/2.jpg" class="img-circle" alt="" />
                                    <span>Sarah, Microsoft</span>
                                </div>
                            </blockquote>
                        </div>
                    </div>

                    <div class="item">
                        <div class="de_testi opt-2">
                            <blockquote>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.</p>
                                <div class="de_testi_by">
                                    <img src="images/people/3.jpg" class="img-circle" alt="" />
                                    <span>Michael, Apple</span>
                                </div>
                            </blockquote>
                        </div>
                    </div>

                    <div class="item">
                        <div class="de_testi opt-2">
                            <blockquote>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.</p>
                                <div class="de_testi_by">
                                    <img src="images/people/4.jpg" class="img-circle" alt="" />
                                    <span>Thomas, Samsung</span>
                                </div>
                            </blockquote>
                        </div>
                    </div>

                    <div class="item">
                        <div class="de_testi opt-2">
                            <blockquote>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.</p>
                                <div class="de_testi_by">
                                    <img src="images/people/1.jpg" class="img-circle" alt="" />
                                    <span>John, Pixar Studio</span>
                                </div>
                            </blockquote>
                        </div>
                    </div>

                    <div class="item">
                        <div class="de_testi opt-2">
                            <blockquote>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.</p>
                                <div class="de_testi_by">
                                    <img src="images/people/2.jpg" class="img-circle" alt="" />
                                    <span>Sarah, Microsoft</span>
                                </div>
                            </blockquote>
                        </div>
                    </div>

                    <div class="item">
                        <div class="de_testi opt-2">
                            <blockquote>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.</p>
                                <div class="de_testi_by">
                                    <img src="images/people/3.jpg" class="img-circle" alt="" />
                                    <span>Michael, Apple</span>
                                </div>
                            </blockquote>
                        </div>
                    </div>

                    <div class="item">
                        <div class="de_testi opt-2">
                            <blockquote>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.</p>
                                <div class="de_testi_by">
                                    <img src="images/people/4.jpg" class="img-circle" alt="" />
                                    <span>Thomas, Samsung</span>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>



            <section id="section-team" class="text-light no-top no-bottom" data-bgcolor="#333" data-stellar-background-ratio=".2" style={{backgroundColor: "rgb(51, 51, 51)" , backgroundSize: "cover"}}>
                <div class="overlay-bg t70" style={{backgroundSize: "cover" , backgroundColor: "rgb(0 0 0 / 84%)"}}>
                    <div class="container" style={{backgroundSize: "cover"}}>
                        <div class="row" style={{backgroundSize: "cover"}}>
                            <div class="col-md-12 text-center" style={{backgroundSize: "cover"}}>
                                <h2 style={{color: "white" , marginTop: "0px"}}><span class="uptitle" style={{color: "#fec500"}}>Our</span>Team Members</h2>

                                <div class="row sequence">

                                    <div class="col-md-3 col-sm-6 sq-item wow" style={{backgroundSize: "cover"}} data-aos="fade-up" data-aos-delay="0.3s">
                                        <div class="profile_pic text-center" style={{backgroundSize: "cover"}}>
                                            <figure class="picframe mb30">
                                                <a class="image-popup" href={team1}>
                                        <span class="overlay-v">
                                            <span>Interested in all the digital things. Has earned several awards and has been a speaker at many world-class seminars.</span>
                                        </span>
                                    </a>
                                                <img src={team1} class="img-fluid" alt="" />
                                            </figure>

                                            <h3>Oscar Helman</h3>
                                            <span class="subtitle">Founder & CEO</span>
                                        </div>
                                    </div>

                                    <div class="col-md-3 col-sm-6 sq-item wow" data-aos="fade-up" data-aos-delay="0.125s">
                                        <div class="profile_pic text-center">
                                            <figure class="picframe mb30">
                                                <a class="image-popup" href={team2}>
                                        <span class="overlay-v">
                                            <span>Interested in all the digital things. Has earned several awards and has been a speaker at many world-class seminars.</span>
                                        </span>
                                    </a>
                                                <img src={team2} class="img-fluid" alt="" />
                                            </figure>

                                            <h3>Isaac Nicholas</h3>
                                            <span class="subtitle">Founder & CEO</span>
                                        </div>
                                    </div>

                                    <div class="col-md-3 col-sm-6 sq-item wow" data-aos="fade-up" data-aos-delay="0.25s">
                                        <div class="profile_pic text-center">
                                            <figure class="picframe mb30">
                                                <a class="image-popup" href={team3}>
                                        <span class="overlay-v">
                                            <span>Interested in all the digital things. Has earned several awards and has been a speaker at many world-class seminars.</span>
                                        </span>
                                    </a>
                                                <img src={team3} class="img-fluid" alt="" />
                                            </figure>

                                            <h3>Rose Shipp</h3>
                                            <span class="subtitle">Founder & CEO</span>
                                        </div>
                                    </div>

                                    <div class="col-md-3 col-sm-6 sq-item wow" data-aos="fade-up" data-aos-delay="0.375s">
                                        <div class="profile_pic text-center">
                                            <figure class="picframe mb30">
                                                <a class="image-popup" href={team4}>
                                        <span class="overlay-v">
                                            <span>Interested in all the digital things. Has earned several awards and has been a speaker at many world-class seminars.</span>
                                        </span>
                                    </a>
                                                <img src={team4} class="img-fluid" alt="" />
                                            </figure>

                                            <h3>John Arnold</h3>
                                            <span class="subtitle">Founder & CEO</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




            <section id="section-side-1" class="side-bg no-padding" style={{backgroundSize: "cover"}}>
                <div class="image-container pull-left" style={{backgroundSize: "cover", height: "auto" , width: "auto"}}> 
                    <section id="section-video-bg" class="full-height no-padding text-light" data-speed="5" data-type="background">
                 <div class="de-video-overlay"></div>
                 <video autoPlay loop muted>
                   <source src={socialdia} type="video/mp4" />
                </video>
                </section>
                    
                     
                 </div>

                <div class="container">
                    <div class="row">
                        <div class="inner-padding">
                            <div class="col-md-5 offset-md-7 wow fadeIn">
                                <h2><span class="uptitle"> </span>We Have Creative Ideas for your Projects</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum..
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum..
                                </p>
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   
                                </p>
                                <div class="spacer-single"></div>
                                <a href="contact.php" class="btn-custom">Contact Us</a>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="section-blog" style={{backgroundSize: "cover"}}>
                <LatestPost></LatestPost>
            </section>

            {/* <section id="section-blog" style={{backgroundSize: "cover"}}>
                <div class="container" style={{backgroundSize: "cover"}}>
                    <div class="row" style={{backgroundSize: "cover"}}>
                        <div class="col-md-6 offset-md-3 text-center">
                            <h2 style={{color: "#e56100"}}><span class="uptitle" style={{color: "#fec500"}}>News</span>Latest Post</h2>
                        </div>
                    </div>
                </div>

<div class='container-fluid' >            
        <OwlCarousel  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
          <div class="bloglist item">
                        <div class="post-content">
                            <div class="post-image">
                            <img  className="img" src= {blog1}/>
                            </div>

                            <div class="post-text">
                                <h3><a href="news-single.html">How To Create Marketing Website</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <span class="post-date"><FontAwesomeIcon icon={faClock} />Jan 5, 2021</span>
                                <span class="post-comment"><FontAwesomeIcon icon={faComment} />1</span>
                                <span class="post-like"><FontAwesomeIcon icon={faHeart} />181</span>
                            </div>


                        </div>
            </div>  


            <div class="bloglist item">
                        <div class="post-content">
                            <div class="post-image">
                            <img  className="img" src= {blog2}/>
                            </div>

                            <div class="post-text">
                                <h3><a href="news-single.html">How To Create Marketing Website</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <span class="post-date"><FontAwesomeIcon icon={faClock} />Jan 5, 2021</span>
                                <span class="post-comment"><FontAwesomeIcon icon={faComment} />1</span>
                                <span class="post-like"><FontAwesomeIcon icon={faHeart} />181</span>
                            </div>


                        </div>
            </div> 

            <div class="bloglist item">
                        <div class="post-content">
                            <div class="post-image">
                            <img  className="img" src= {blog3}/>
                            </div>

                            <div class="post-text">
                                <h3><a href="news-single.html">How To Create Marketing Website</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <span class="post-date"><FontAwesomeIcon icon={faClock} />Jan 5, 2021</span>
                                <span class="post-comment"><FontAwesomeIcon icon={faComment} />1</span>
                                <span class="post-like"><FontAwesomeIcon icon={faHeart} />181</span>
                            </div>


                        </div>
            </div> 

            <div class="bloglist item">
                        <div class="post-content">
                            <div class="post-image">
                            <img  className="img" src= {blog4}/>
                            </div>

                            <div class="post-text">
                                <h3><a href="news-single.html">How To Create Marketing Website</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <span class="post-date"><FontAwesomeIcon icon={faClock} />Jan 5, 2021</span>
                                <span class="post-comment"><FontAwesomeIcon icon={faComment} />1</span>
                                <span class="post-like"><FontAwesomeIcon icon={faHeart} />181</span>
                            </div>


                        </div>
            </div> 

            <div class="bloglist item">
                        <div class="post-content">
                            <div class="post-image">
                            <img  className="img" src= {blog5}/>
                            </div>

                            <div class="post-text">
                                <h3><a href="news-single.html">How To Create Marketing Website</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <span class="post-date"><FontAwesomeIcon icon={faClock} />Jan 5, 2021</span>
                                <span class="post-comment"><FontAwesomeIcon icon={faComment} />1</span>
                                <span class="post-like"><FontAwesomeIcon icon={faHeart} />181</span>
                            </div>


                        </div>
            </div> 

            <div class="bloglist item">
                        <div class="post-content">
                            <div class="post-image">
                            <img  className="img" src= {blog6}/>
                            </div>

                            <div class="post-text">
                                <h3><a href="news-single.html">How To Create Marketing Website</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <span class="post-date"><FontAwesomeIcon icon={faClock} />Jan 5, 2021</span>
                                <span class="post-comment"><FontAwesomeIcon icon={faComment} />1</span>
                                <span class="post-like"><FontAwesomeIcon icon={faHeart} />181</span>
                            </div>


                        </div>
            </div> 
      </OwlCarousel>  
      </div>  
            </section> */}

            
            </div>

            
            </div>
        </div>
    )
}