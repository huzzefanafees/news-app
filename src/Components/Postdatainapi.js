import React from 'react';
import { useState } from 'react';

export default function Postdatainapi() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    function saveUser(e){
        e.preventDefault()
        let data = {name,email,phone}
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: 'POST',
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((result)=> {
            result.json().then((result)=>{
                console.log("Result:", result)
            })
        }).catch((error)=>{
            alert("Error:", error)
        })
    }
    return (
        <div className='container mt-3 mb-5'>
        <h3 className='text-center'>POST Method</h3>
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputName1" className="form-label">Name</label>
                <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} id="exampleInputName1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="exampleInputEmail1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
                <input type="number" className="form-control" value={phone} onChange={(e)=>{setPhone(e.target.value)}} id="exampleInputPhone1" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={saveUser}>Submit</button>
        </form>
        </div>
    )
}
