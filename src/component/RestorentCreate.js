import React, { useState } from "react";
function RestorentCreate() {
  const [name, setName] = useState();
  const [addresh, setAddresh] = useState();
  const [rating, setRating] = useState();
  const [email, setEmail] = useState();

  const submit = () => {
    let data = { name, addresh, rating, email };
    fetch("http://localhost:3000/restorent", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
      });
    });
    setName("");
    setAddresh("");
    setRating("");
    setEmail("");
    document.write("Your record insert successfully");
  };
  return (
    <>
      <div className="container">
        <h2>RestorentCreate</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
          placeholder="Food Name"
        />
        <br />
        <br />
        <input
          type="text"
          value={addresh}
          onChange={(e) => {
            setAddresh(e.target.value);
          }}
          name="addresh"
          placeholder="City Name"
        />
        <br />
        <br />
        <input
          type="text"
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
          name="rating"
          placeholder="Rating"
        />
        <br />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          placeholder="Email"
        />
        <br />
        <br />
        <button onClick={submit}>Submit</button>
      </div>
    </>
  );
}
export default RestorentCreate;
