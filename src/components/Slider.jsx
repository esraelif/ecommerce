import ArrowCircleLeftOutlined from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlined from '@mui/icons-material/ArrowCircleRightOutlined';
import { sliderItem } from '../data';
import { useState } from 'react';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleLeftClick = () => {
        setSlideIndex((prevIndex) => (prevIndex === 0 ? sliderItem.length - 1 : prevIndex - 1));
    };

    const handleRightClick = () => {
        setSlideIndex((prevIndex) => (prevIndex === sliderItem.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='container' style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden" }}>
            <div className="arrow-left">
                <ArrowCircleLeftOutlined style={{ width: "50px", height: "50px", background: "white", borderRadius: "50%", position: "absolute", top: "0", bottom: "0", margin: "auto", left: "10px", cursor: "pointer", opacity: "0.5", zIndex: "2" }} onClick={handleLeftClick} />
            </div>
            <div className="wrapper" style={{ height: "100%", display: "flex", transform: `translateX(${slideIndex * -100}vw)`, transition: "all 1.5s ease" }}>
                {sliderItem.map((item, index) => (
                    <div key={index} className="slide" style={{ display: "flex", alignItems: "center", width: "100vw", height: "100vh", background: item.backgroundColor }}>
                        <div className="image" style={{ flex: "1", height: "100%" }}>
                            <img src={item.img} alt="" style={{ height: "100%" }} />
                        </div>
                        <div className="infoContainer" style={{ flex: "1", padding: "50px" }}>
                            <h1 className='title' style={{ fontSize: "70px" }}>{item.title}</h1>
                            <p className='description' style={{ margin: "50px 0", fontSize: "20px", fontWeight: "500", letterSpacing: "2px" }}>{item.description}</p>
                            <button style={{ padding: "10px", fontSize: "20px", background: "lightgray", cursor: "pointer" }}>SHOP NOW</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="arrow-right">
                <ArrowCircleRightOutlined style={{ width: "50px", height: "50px", background: "white", borderRadius: "50%", position: "absolute", top: "0", bottom: "0", margin: "auto", right: "10px", cursor: "pointer", opacity: "0.5", zIndex: "2" }} onClick={handleRightClick} />
            </div>
        </div>
    );
}

export default Slider;
