import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext)
    const {_id, title, img, price } = service;


    const handleCheckOut = e =>{
        e.preventDefault();
        const form =e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {
            customerName: name,
            date,
            email,
            img,
            service:title,
            service_id: _id,
            price:price
        }
        console.log(order)

        fetch('http://localhost:5000/checkOut',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                alert('Service CheckOut Successfully')
            }
        })
    }

    return (
        <div>
            <div className="relative mb-10">
                <img className="w-full h-[400px]" src={img} alt="" />
                <h2 className="absolute bottom-20 left-10 663462f3d160898d35b3190e md:text-4xl font-bold text-white ">{title} </h2>
            </div>
            <div>
                <form  onSubmit={handleCheckOut}>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Pirce</span>
                            </label>
                            <input type="number"  defaultValue={price} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn  bg-[#FF3811] text-white font-bold" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;