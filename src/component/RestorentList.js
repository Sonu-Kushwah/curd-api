import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
function RestorentList() {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("http://localhost:3000/restorent");
      const actualData = await res.json();
      console.log(actualData);
      setData(actualData);
      //setName(actualData[0].name);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);

  /*delete record fuction*/
  function deleteRecord(id) {
    //alert(id);
    fetch(`http://localhost:3000/restorent/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getCovidData();
      });
    });
  }

  /* PreFiled filed*/
  const [name, setName] = useState("");
  const [addresh, setAddresh] = useState("");
  const [rating, setRating] = useState("");
  const [email, setEmail] = useState("");
  /*preFilled record fucntion */
  function selectUser(id) {
    console.log(data[id-1]);
    let item = data[id-1];
    setName(item.name);
    setAddresh(item.addresh);
    setRating(item.rating);
    setEmail(item.email);
    setUserId(item.id);
  }

  /*update user*/
  const [userId, setUserId] = useState(null);
  const updateUser = () => {
    let item1 = { name, addresh, rating, email, userId };
    fetch(`http://localhost:3000/restorent/${userId}`, {
      method: "PUT",
      headers: {
        ACCEPT: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item1),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getCovidData();
      });
    });
  };
  return (
    <>
      <div className="container">
        <h3 className="text-center">RestorentList</h3>
        <Table class="striped bordered hover">
          <tr>
            <th>Id</th>
            <th>No</th>
            <th>Name</th>
            <th>Addresh</th>
            <th>Email</th>
            <th>Opration</th>
          </tr>
          {data.map((elem, index) => {
            const { id, name, addresh, rating, email } = elem;
            return (
              <>
                <tr key={index}>
                  <td>{id}</td>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{addresh}</td>
                  <td>{rating}</td>
                  <td>{email}</td>
                  <td>
                    <button onClick={() => deleteRecord(elem.id)}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <button onClick={() => selectUser(elem.id)}>
                      PreFilled
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </Table>

        <div>
        <h3>Update Record</h3>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br />
          <br />
          <input
            type="text"
            onChange={(e) => setAddresh(e.target.value)}
            value={addresh}
          />
          <br />
          <br />
          <input
            type="text"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
          <br />
          <br />
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <br />
          <button onClick={updateUser}>Update User</button>
        </div>
      </div>
    </>
  );
}

export default RestorentList;
