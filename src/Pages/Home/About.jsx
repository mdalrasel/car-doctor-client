import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div className="md:flex ">
            <div className=" flex-1 relative">
                <img src={person} className=" max-w-sm rounded-lg " />
                <img src={parts} className="absolute left-52 bottom-0  border-[10px] rounded-md border-white w-72" />
            </div>
            <div className="flex-1 space-y-4 pr-20">
                <h2 className='text-[#FF3811] text-xl font-bold'>About Us</h2>
                <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
                <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p >the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
                <button className="btn btn-error text-white">Get More Info</button>
            </div>
        </div>
    );
};

export default About;