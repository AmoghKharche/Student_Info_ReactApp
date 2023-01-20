import React from 'react'
import axios from "axios";
import {useState} from "react"

function Success() {

    const [name,setName] = useState("");
    const [company,setCompany] = useState("");
    const [pkg,setPkg] = useState("");
    const [msg,setMsg] = useState("");

    const hName = (event) => {setName(event.target.value)}
    const hCompany = (event) => {setCompany(event.target.value)}
    const hPkg = (event) => {setPkg(event.target.value)}

    const save = (event) => {
        event.preventDefault();
        let urladd = "http://localhost:9000/create";
        let data = {name,company,pkg};
        axios.post(urladd,data)
        .then(res=>{
            if(res.data.affectedRows == 1)
            {
                setMsg("Thank You");
                setName("");
                setCompany("");
                setPkg("");
            }
        })
        .catch(err=>{
            if(err.code == "ERR_NETWORK")
            {
                setMsg("Server is Down. Please Try Again after Sometime")
                setName("");
                setCompany("");
                setPkg("");
            }
        })
    }

  return (
    <div>
        <center>
            <h1>Success Story App</h1>
            <form onSubmit={save}>
                <br/>
                <input type={"text"} placeholder="Enter Your Name here" onChange={hName} value={name}/>
                <br/><br/>
                <input type={"text"} placeholder="Enter Your Company Name here" onChange={hCompany} value={company}/>
                <br/><br/>
                <input type={"number"} step="any" placeholder="Enter Your Package here" onChange={hPkg} value={pkg}/>
                <br/><br/>
                <input type={"submit"} value="Save"/>
            </form>
            <h2>{msg}</h2>
        </center>
    </div>
  )
}

export default Success