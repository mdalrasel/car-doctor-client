import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import CheckOutCardRow from "./CheckOutCardRow";
import axios from "axios";



const CheckOutCard = () => {
    const { user } = useContext(AuthContext);
    const [checkOutCard, setCheckOutCard] = useState([]);

    const url = `http://localhost:5000/checkOut?email=${user?.email}`
    useEffect(() => {
        axios.get(url, {withCredentials:true})
        .then(res => {
            setCheckOutCard(res.data)
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setCheckOutCard(data))
    }, [url])

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/checkOut/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('delete successful')
                        const remaining = checkOutCard.filter(checkOut => checkOut._id !== id)
                        setCheckOutCard(remaining)
                    }
                })
        }
    }
    const handleCheckOutConfirm = id => {
        fetch(`http://localhost:5000/checkOut/${id}`, {
            method: 'PATCH',
            headers: {
                'contnt-type': ' application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    //update status
                    const remaining = checkOutCard.filter(checkOut => checkOut._id !== id);
                    const updated = checkOutCard.find(checkOut => checkOut._id !== id);
                    updated.status = 'confirm'
                    const newCheckOutCard = [updated, ...remaining];
                    setCheckOutCard(newCheckOutCard)
                }
            })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>Name</th>
                        <th>Due Amount</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        checkOutCard.map(checkOutCard => <CheckOutCardRow key={checkOutCard._id} checkOutCard={checkOutCard} handleDelete={handleDelete} handleCheckOutConfirm={handleCheckOutConfirm}></CheckOutCardRow>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default CheckOutCard;