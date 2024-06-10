import sb1Image from "../images/background/sb1.jpg";

import "../Portfolio/Portfolio.css";
import Menu from "../Portfolio/Menu"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Portfolio(){

    const [items , setItems] = useState(Menu);
    const [selectedButton, setSelectedButton] = useState(null);
    const filterItem = (category) => {
        const updateItems = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setItems(updateItems);
    };

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
            <div class="overlay-bg t70" style={{background: "rgb(0 0 0 / 84%)"}}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1>Portfolio</h1>
                            <ul class="crumb">
                                <li><a href="index.html" style={{color: "#fec500", textDecoration: "none" }}>Home</a></li>
                                <li class="sep"></li>
                                <li>Portfolio</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

 <div id="content" class="no-top no-bottom" style={{backgroundSize: "cover"}}>
     
     
      <section id="section-17 " class="no-top portfolio-page" aria-label="section-portfolio" style={{backgroundColor: "#ffffff"}}>
          
                <div class="container">

                    
                    <div class="row">
						 <div class="col-md-12 text-center">
 								<h2>Portfolio</h2>
                            </div>

                        <div class="col-md-12 text-center" style={{backgroundSize: "cover"}}>



                        <ul id="filters">
    <li>
        <Link
            onClick={() => {
                setItems(Menu);
                setSelectedButton(null);
            }}
            className={selectedButton === null ? 'selected' : ''}
        >
            All Projects
        </Link>
    </li>
    <li>
        <Link
            onClick={() => {
                filterItem('WebsiteDesigning');
                setSelectedButton(2); // Unique value for Website Design
            }}
            className={selectedButton === 2 ? 'selected' : ''}
        >
            Website Design
        </Link>
    </li>
    <li>
        <Link
            data-filter=".illustration"
            onClick={() => {
                filterItem('GraphicsDesigning');
                setSelectedButton(3); // Unique value for Graphic Design
            }}
            className={selectedButton === 3 ? 'selected' : ''}
        >
            Graphic Design
        </Link>
    </li>
    <li>
        <Link
            data-filter=".photography"
            onClick={() => {
                filterItem('VideoPresentation');
                setSelectedButton(4); // Unique value for Video Presentation
            }}
            className={selectedButton === 4 ? 'selected' : ''}
        >
            Video Presentation
        </Link>
    </li>
    <li>
        <Link
            data-filter=".website"
            onClick={() => {
                filterItem('MobileApp');
                setSelectedButton(5); // Unique value for Mobile App
            }}
            className={selectedButton === 5 ? 'selected' : ''}
        >
            Mobile App
        </Link>
    </li>
</ul>


                        {/* <button onClick={() => setItems(Menu)}>All Projects</button>
                                <button onClick={() => filterItem('WebsiteDesigning')}>Website Design</button>
                                <button onClick={() => filterItem('GraphicDesign')}>Graphic Design</button>
                                <button onClick={() => filterItem('VideoPresentation')}>Video Presentation</button>
                                <button onClick={() => filterItem('MobileApp')}>Mobile App</button> */}



                        {/* <ul id="filters">
                            <li><Link data-filter="*"  onClick={() => setItems(Menu)} className={selectedButton === 1 ? 'selected' : ''}>all project</Link></li>
                            <li><Link data-filter=".website" onClick={() => filterItem('WebsiteDesigning')} className={selectedButton === 1 ? 'selected' : ''}>Website Design</Link></li>
                            <li><Link data-filter=".illustration" onClick={() => filterItem('GraphicsDesigning')} className={selectedButton === 1 ? 'selected' : ''}>Graphic Design</Link></li>
                            <li><Link data-filter=".photography" onClick={() => filterItem('VideoPresentation')} className={selectedButton === 1 ? 'selected' : ''}>Video Presentation</Link></li>
                            <li><Link data-filter=".website"  onClick={() => filterItem('MobileApp')} className={selectedButton === 1 ? 'selected' : ''}>Mobile App</Link></li>
                        </ul> */}
                            {/* <ul id="filters">
                                <li><a href="#" data-filter="*" class="selected" onClick={() => setItems(Menu)}>all projects</a></li>
                                <li><a href="#" data-filter=".website" onClick={() => filterItem('WebsiteDesigning')}>Website Design</a></li>
                                <li><a href="#" data-filter=".illustration" onClick={() => filterItem('GraphicDesign')}>Graphic Design</a></li>
                                <li><a href="#" data-filter=".photography" onClick={() => filterItem('VideoPresentation')}>Video Presentation</a></li>
                                 <li><a href="#" data-filter=".mobile" onClick={() => filterItem('MobileApp')}>Mobile App</a></li>
                            </ul> */}




                            <div id="gallery" class="gallery full-gallery de-gallery pf_full_width pf_3_cols grid sequence" style={{ position: "relative" , height: "498.275px", backgroundSize: "cover"}}>

                            {items.map((item, index) => (
                                        <div key={index} class={`item ${item.category} gallery-item`}>
                                            <div class="picframe wow">
                                                <a class="image-popup" href={item.image}>
                                                    <span class="overlay">
                                                        <span class="pf_text" style={{ display: "none" }}>
                                                            <span class="project-name">Project Name</span>
                                                        </span>
                                                    </span>
                                                    <img src={item.image} class="wow" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    ))}

                                
                                {/* <div class="item website gallery-item">
                                    <div class="picframe wow" >
                                        <a class="image-popup" href={Project1}>
											<span class="overlay">
												<span class="pf_text" style={{display: "none"}}>
													<span class="project-name">Project Name</span>
												</span>
											</span>
											<img src={Project1} class="wow" alt="" />
										</a>
                                    </div>
                                </div>
                                

                                
                                <div class="item photography gallery-item">
                                    <div class="picframe wow" >
                                        <a class="image-popup" href={Project6}>
											<span class="overlay">
												<span class="pf_text" style={{display: "none"}}>
													<span class="project-name">Project Name</span>
												</span>
											</span>
											<img src={Project6} class="wow" alt="" />
										</a>
                                    </div>
                                </div>
                                

                                
                                <div class="item illustration gallery-item" >
                                    <div class="picframe wow" >
                                        <a class="image-popup" href={Project4}>
											<span class="overlay" >
												<span class="pf_text" style={{display: "none"}}>
													<span class="project-name">Project Name</span>
												</span>
											</span>
											<img src={Project4} class="wow" alt=""  />
										</a>
                                    </div>
                                </div>
                                

                                
                                <div class="item photography gallery-item">
                                    <div class="picframe wow" >
                                        <a class="image-popup" href={Project5}>
											<span class="overlay">
												<span class="pf_text" style={{display: "none"}}>
													<span class="project-name">Project Name</span>
												</span>
											</span>
											<img src={Project5} class="wow" alt="" />
										</a>
                                    </div>
                                </div>
                                

                                
                                <div class="item photography website gallery-item">
                                    <div class="picframe wow">
                                        <a class="image-popup" href={Project2}>
											<span class="overlay">
												<span class="pf_text" style={{display: "none"}}>
													<span class="project-name">Project Name</span>
												</span>
											</span>
											<img src={Project2} class="wow" alt="" />
										</a>
                                    </div>
                                </div>
                                

                                
                                <div class="item mobile website gallery-item">
                                    <div class="picframe wow">
                                        <a class="image-popup" href={Project3}>
											<span class="overlay">
												<span class="pf_text" style={{display: "none"}}>
													<span class="project-name">Project Name</span>
												</span>
											</span>
											<img src={Project3} class="wow" alt="" />
										</a>
                                    </div>
                                </div> */}
                                

                            </div>
                        </div>
                        

                    </div>

                </div>
				
				<div class="spacer-double"></div>
				
				 


            </section>
     
     
         
        </div>
        </div>
    )
}