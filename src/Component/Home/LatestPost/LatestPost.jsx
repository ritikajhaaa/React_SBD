import { Link } from "react-router-dom";
import blog1 from "./blog/pic-blog-1.jpg";
import blog2 from "./blog/pic-blog-2.jpg";
import blog3 from "./blog/pic-blog-3.jpg";
import blog4 from "./blog/pic-blog-4.jpg";
import blog5 from "./blog/pic-blog-5.jpg";
import blog6 from "./blog/pic-blog-6.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock , faComment , faHeart }  from '@fortawesome/free-solid-svg-icons'; 

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css'; 

const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: false,
    // navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 4,

        }
    },
};

export default function LatestPost(){
    return(
        <div>

               <div class="container" style={{backgroundSize: "cover"}}>
                    <div class="row" style={{backgroundSize: "cover"}}>
                        <div class="col-md-6 offset-md-3 text-center">
                            <h2 style={{color: "#e56100"}}><span class="uptitle" style={{color: "#fec500"}}>News</span>Latest Post</h2>
                        </div>
                    </div>
                </div>

                <div class='container-fluid' >            
        {/* <OwlCarousel  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >   */}
         <OwlCarousel  className="slider-items owl-carousel owl-theme" {...options} loop  
          nav  
          margin={8} >
          <div class="bloglist item">
                        <div class="post-content">
                            <div class="post-image">
                            <img  className="img" src= {blog1}/>
                            </div>

                            <div class="post-text">
                                <h3><Link to="/news-single">How To Create Marketing Website</Link></h3>
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
                                <h3><Link to="/news-single">How To Create Marketing Website</Link></h3>
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
                                <h3><Link to="/news-single">How To Create Marketing Website</Link></h3>
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
                                <h3><Link to="/news-single">How To Create Marketing Website</Link></h3>
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
                            <h3><Link to="/news-single">How To Create Marketing Website</Link></h3>
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
                               <h3><Link to="/news-single">How To Create Marketing Website</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <span class="post-date"><FontAwesomeIcon icon={faClock} />Jan 5, 2021</span>
                                <span class="post-comment"><FontAwesomeIcon icon={faComment} />1</span>
                                <span class="post-like"><FontAwesomeIcon icon={faHeart} />181</span>
                            </div>


                        </div>
            </div>  
      </OwlCarousel>  
      </div> 
        </div>
    )
}