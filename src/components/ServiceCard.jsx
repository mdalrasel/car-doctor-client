import { FaArrowRight } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service
    return (
        <div className='p-6 border rounded-lg'>
            <img className='w-[313px] rounded-lg' src={img} alt="" />
            <h2 className='text-2xl font-bold'>{title}</h2>
            <div className='flex justify-between text-[#FF3811]'>
                <h2 className=' text-xl font-semibold'>Price : $ {price}</h2>
                <Link to={`/checkOut/${_id}`}>
                    <button><FaArrowRight /></button>
                </Link>

            </div>
        </div>
    );
};


ServiceCard.propTypes = {
    service: PropTypes.object
};
export default ServiceCard;