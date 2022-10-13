import React, { useCallback, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import loading_component from './loading_component';
function MpesaApi() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false)
    const [details, setDetails] = useState([]);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDetails((prev) => {
            return { ...prev, [name]: value }
        });
    };

    console.log(details.phone);
    console.log(details.amount);

    const url = `https://cashwaytraders.com/x-mpesa-api.php?phone=${details.phone}&amount=${details.amount}`;
    const fetchRequest = useCallback(() => {
        setLoading(true);
        fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', },
        })
            .then((res) => {
                res.json().then((response) => {
                    console.log(response);
                    setVideos(response)
                    setLoading(false);
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);



    return (
        <div>
            <div className="container">
                <div className='mt-5'></div>
                <h3>
                    M-PESA API
                </h3>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Amount</label>
                    <input type="text" className="form-control" name='amount' onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter amount" />
                    <small id="emailHelp" className="form-text text-muted">We accept all denominations</small>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="exampleInputPassword1">Mobile Number</label>
                    <input type="text" onChange={handleChange} name='phone' className="form-control" id="exampleInputPassword1" placeholder="Mobile No." />
                </div>
                <button type="button" onClick={fetchRequest} className="btn btn-primary">Submit</button>

                {loading && (
                    <div className="flex flex-col h-full w-full justify-center items-center">
                        <loading_component> </loading_component>
                        <p className="py-1 text-xs">Initiating transactions...</p>
                    </div>
                )}


            </div>
        </div>
    )
}

export default MpesaApi