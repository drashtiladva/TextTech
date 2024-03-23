import React from "react";
const text=" ";


function Fnr(props) {
    const handlefnr=()=>{
        let find= document.getElementsById('find').value;
        let replace=document.getElementById('replace').value;

    }
  return (
    <div>
        <h2>Find and Replace</h2>
        
      <div className="form-floating mb-3"
      style={{color:props.mode==="dark"?"white":"black"}}>
        <input
          type="text"
          className="form-control"
          id="find"
          placeholder="name@example.com"
          style={{backgroundColor:props.mode==="dark"?"#495057":"white"}}
        />
        <label for="find">Find</label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="replace"
          placeholder="Password"
        />
        <label for="replace">Replace</label>
      </div>
      <div>
      <button type="button" class="btn btn-primary my-3"
               onClick={handlefnr}
                disabled={text.length===0}>ReplaceAll</button>
      </div>


    </div>
  );
}

export default Fnr;
