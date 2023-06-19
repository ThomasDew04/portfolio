import { memo, useState } from "react";
import { projects } from "../data/data";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function CarouselItem({ item }) {

  return (
    <div className="car-item-box">
      <div>
        <h3 className="car-title">{item.name}</h3>
        <p className="car-desc">{item.description}</p>
      </div>
      <img className="car-img" src={item.img} alt={item.name}/>
    </div>
  );

};

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= projects.length) {
      newIndex = projects.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="inner" style={{transform: `translate(-${activeIndex * 100}%)`}}>
        {projects.map((item) => {
          return(<CarouselItem item={item} width={"100%"}/>) 
          })}
      </div>
      <div className="caroursel-buttons">
        <button onClick={() => {
          updateIndex(activeIndex - 1);
        }} className="arrBtn">
          <BsChevronLeft size={40} color="#9DB2BF" strokeWidth={1.5}/>
        </button>
        <div className="indicators">
          {projects.map((item, index) => {
            return (
                <button onClick={() => {
                  updateIndex(index);
                }} className="indiBtn">
                  <div className={`${index===activeIndex? "bar-active" : "bar"}`}></div>
                </button>
            );
          })}
        </div>
        <button onClick={() => {
          updateIndex(activeIndex + 1);
        }} className="arrBtn">
          <BsChevronRight size={40} color="#9DB2BF" strokeWidth={1.5}/>
        </button>
      </div>
    </div>
  );

}

export default memo(function Work() {
    
    return (
      <div className="mainWork">
        {/* svg5 */}
        <h1 className="header" id="Work">
          &lt;/&gt; Work
        </h1>
        <div className="center">
          <Carousel />
        </div>
      </div>
    );
  });
