
import { RxCross1 } from "react-icons/rx";

const CheckOutCardRow = ({ checkOutCard, handleDelete, handleCheckOutConfirm }) => {
    const { _id, customerName, service, email, price, date, img, status } = checkOutCard



    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn ">
                    <RxCross1 />
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">Email: {email}</div>
                        <div className="text-sm opacity-50">Service: {service}</div>
                    </div>
                </div>
            </td>
            <td>
                <h2>$  {price}</h2>
            </td>
            <td>{date}</td>
            <th>
                {
                    status === 'confirm' ? <span className="font-bold text-primary"> Confirmed</span>
                        :
                        <button onClick={() => handleCheckOutConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default CheckOutCardRow;