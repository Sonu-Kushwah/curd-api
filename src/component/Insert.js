import React, { useState } from "react";

function Insert() {
  const [fullname, setFullName] = useState({
    name: "",
    addresh: "",
    rating: "",
    email: "",
  });
  const handle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFullName({ ...fullname, [name]: value });
  };
  const [print, setPrint] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...fullname, id: new Date().getTime().toString() };
    console.log(newRecord);
    fetch("http://localhost:3000/restorent", {
      method: "post",
      headers: {
        Accept: "Application/json",
        "content-type": "Application/json",
      },
      body: JSON.stringify(newRecord),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
      });
    });
    setPrint([...print, newRecord]);

    setFullName({ name: "", addresh: "", rating: "", email: "" });
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center">Multiple Form Object use</h1>
        <h2>Insert Record</h2>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handle}
          value={fullname.name}
          placeholder="Enter Your Food Name"
        />
        <br />
        <br />
        <input
          type="text"
          name="city"
          id="addresh"
          onChange={handle}
          value={fullname.city}
          placeholder="Enter Your City"
        />
        <br />
        <br />
        <input
          type="text"
          name="rating"
          id="rating"
          onChange={handle}
          value={fullname.rating}
          placeholder="Enter Your Rating"
        />
        <br />
        <br />
        <input
          type="text"
          name="email"
          id="email"
          onChange={handle}
          value={fullname.email}
          placeholder="Enter Your Email Id"
        />
        <br />
        <br />
        <button onClick={onSubmit}>Submit</button>
        <h3>show record</h3>
        {print.map((item) => {
          return (
            <div>
              <li>{item.name}</li>
              <li>{item.addresh}</li>
              <li>{item.rating}</li>
              <li>{item.email}</li>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Insert;
