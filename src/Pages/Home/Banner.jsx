import img1 from "../../../src/assets/images/banner/1.jpg"
import img2 from "../../../src/assets/images/banner/2.jpg"
import img3 from "../../../src/assets/images/banner/3.jpg"
import img4 from "../../../src/assets/images/banner/4.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full mb-32">
        <div id="slide1" className="carousel-item relative w-full ">
            <img src={img1} className="w-full  rounded-lg" />
            <div className=" absolute flex justify-between transform -translate-y-1/2  bottom-4 right-4 gap-4">
                <a href="#slide4" className="btn btn-circle ">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
            <div className=" absolute left-6  bottom-16 md:space-y-4">
                <h2 className="md:text-4xl font-bold text-white w-[400px] ">Affordable Price For Car Servicing</h2>
                <p className="text-white w-[300px] m:w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="space-x-4">
                    <button className="btn ">Discover More</button>
                    <button className="btn">Latest Project</button>
                </div>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full  rounded-lg" />
            <div className="absolute flex justify-between transform -translate-y-1/2 right-4  bottom-4 gap-4">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
            <div className=" absolute left-6 bottom-16 md:space-y-4">
                <h2 className="md:text-4xl font-bold text-white w-[400px] ">Affordable Price For Car Servicing</h2>
                <p className="text-white w-[300px] m:w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="space-x-4">
                    <button className="btn ">Discover More</button>
                    <button className="btn">Latest Project</button>
                </div>
            </div>
            
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img src={img3}className="w-full   rounded-lg" />
            <div className="absolute flex justify-between transform -translate-y-1/2 right-4  bottom-4 gap-4">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
            <div className=" absolute left-6 bottom-16 md:space-y-4">
                <h2 className="md:text-4xl font-bold text-white w-[400px] ">Affordable Price For Car Servicing</h2>
                <p className="text-white w-[300px] m:w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="space-x-4">
                    <button className="btn ">Discover More</button>
                    <button className="btn">Latest Project</button>
                </div>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
            <img src={img4}className="w-full rounded-lg" />
            <div className="absolute flex justify-between transform -translate-y-1/2 right-4 bottom-4 gap-4">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
            <div className=" absolute left-6 bottom-16 md:space-y-4">
                <h2 className="md:text-4xl font-bold text-white w-[400px] ">Affordable Price For Car Servicing</h2>
                <p className="text-white w-[300px] m:w-[522px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="space-x-4">
                    <button className="btn ">Discover More</button>
                    <button className="btn">Latest Project</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;