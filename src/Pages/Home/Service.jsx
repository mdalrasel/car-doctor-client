import { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard";


const Service = () => {

    const [services, setServices] =useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then( res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="text-center space-y-3 mt-32">
                <h1 className='text-[#FF3811] text-xl font-bold'>Service</h1>
                <h2 className=" text-3xl">Our Service Area</h2>
                <p className="md:w-[600px] mx-auto">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className=' md:grid grid-cols-2 md:grid-cols-3  gap-5 my-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Service;