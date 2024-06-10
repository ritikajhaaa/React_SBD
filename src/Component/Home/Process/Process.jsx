import { useState } from "react";

import Menu from "./Menu";

export default function Process() {
    const [selectedPara, setSelectedPara] = useState(""); 
    const [selectedButton, setSelectedButton] = useState(null);

    const filterItem = (category) => {
        const selectedItem = Menu.find(item => item.category === category);
        setSelectedPara(selectedItem ? selectedItem.para : ""); 
    };

    return (
        <div>
            <div className="overlay-bg t70" style={{ backgroundSize: "cover", backgroundColor: "rgb(0 0 0 / 84%)" }}>
                <div className="container" style={{ backgroundSize: "cover" }}>
                    <div className="row" style={{ backgroundSize: "cover" }}>
                        <div className="col-md-12 text-center">
                            <h2 style={{ color: "white", marginTop: "0px" }}><span className="uptitle" style={{ color: "#fec500" }}>STEPS</span>Our Process</h2>
                        </div>

                        <div className="col-md-12">
                            <div className="de_tab tab_steps style-2">
                                <ul className="de_nav">
                                    {/* <li className="active wow fadeInRight" data-aos="fade-left" data-aos-delay="0s" onClick={() => {
                filterItem('Idea');
            }}><span style={{ display: "inline-block" }}><i className="icon_lightbulb_alt"></i>Idea</span>
                                        <div className="arrow" style={{ backgroundSize: "cover" }}></div>
                                    </li> */}



<li onClick={() => {
    filterItem('Idea');
    setSelectedButton(null); // Corrected function call
}} className={`${selectedButton === null ? 'active' : ''} wow `}>
    <span style={{ display: "inline-block" }}><i className="icon_lightbulb_alt"></i>Idea</span>
    <div className="arrow" style={{ backgroundSize: "cover" }}></div>
</li>

<li onClick={() => {
    filterItem('Design');
    setSelectedButton(2); // Corrected function call
}} className={`${selectedButton === 2 ? 'active' : ''} wow `}>
    <span style={{ display: "inline-block" }}><i className="icon_easel"></i>Design</span>
    <div className="arrow" style={{ backgroundSize: "cover" }}></div>
</li>

<li  onClick={() => {
    filterItem('Develop');
    setSelectedButton(3); // Corrected function call
}} className={`${selectedButton === 3 ? 'active' : ''} wow `}>
    <span style={{ display: "inline-block" }}><i className="icon_pencil-edit"></i>Develop</span>
    <div className="arrow" style={{ backgroundSize: "cover" }}></div>
</li>

<li  onClick={() => {
    filterItem('Result');
    setSelectedButton(4); // Corrected function call
}} className={`${selectedButton === 4 ? 'active' : ''} wow `}>
    <span style={{ display: "inline-block" }}><i className="icon_datareport"></i>Result</span>
    <div className="arrow" style={{ backgroundSize: "cover" }}></div>
</li>

                                </ul>

                                <div className="de_tab_content" style={{ backgroundSize: "cover" }}>
                <div>{selectedPara}</div> {/* Render the selected paragraph */}
            </div>
    {/* Other tab contents */}



                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
