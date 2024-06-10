// import "../Portfolio/Portfolio.css";
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
            <div className="container">
            <div class="row">
            <div class="col-md-12 text-center">
                <h2 style={{marginTop: "0px" , marginBottom: "40px"}}>Portfolio</h2>
            </div>

            <div class="col-md-12 text-center">
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
</div>



            </div>
            </div>
            </div>

            </div>
    )
}