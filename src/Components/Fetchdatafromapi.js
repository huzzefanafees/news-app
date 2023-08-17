import React, { useEffect, useState } from 'react'
import Postdatainapi from './Postdatainapi';

export default function Fetchdatafromapi() {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [userid, setUserid] = useState(null);
// Get API Method
    useEffect(() => {
        setdata()
    }, []);
    function setdata(){
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setName(json[0].name);
                setEmail(json[0].email);
                setPhone(json[0].phone);
                setUserid(json[0].id);
            });
    }

    // Delete APi Method

    function deleteUser(id){
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
            method:"DELETE"
        }).then((response)=>{
            response.json().then((result)=>{
                console.log(result, ":User deleted")
            })
        }).catch((error)=>{
            console.log("Error: ", error)
        })
    }

    // PUT api Method
    function selectUser(id){
        setName(data[id - 1].name);
        setEmail(data[id - 1].email);
        setPhone(data[id - 1].phone);
        setUserid(data[id - 1].id);
    }

    function updateUser(e){
        e.preventDefault();
        let data = {name, email, phone, userid}
        fetch(`https://jsonplaceholder.typicode.com/users/${userid}`,{
            method:"PUT",
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((response)=>{
            response.json().then((result)=>{
                console.log("User data Updated : ", result)
            })
        }).catch((error)=>{
            console.log("Error: ", error)
        })
    }



    return (
        <div className="container">
            <Postdatainapi />
            <h3 className='text-center'>DELETE Method</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td><button className='btn btn-sm bg-dark text-white' onClick={() => deleteUser(user.id)}>Delete</button></td>
                                <td><button className='btn btn-sm bg-dark text-white' onClick={() => selectUser(user.id)}>Update</button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
            <h3 className='text-center'>PUT Method</h3>
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
                <input type="text" className="form-control" value={phone} onChange={(e)=>{setPhone(e.target.value)}} id="exampleInputPhone1" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={updateUser}>Submit</button>
        </form>
        </div>
    )
}
