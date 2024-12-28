import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("uzbek");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);
  function handleSubmit(event) {
    event.preventDefault();
    let user = {
      username: username,
      age: age,
      password: password,
      nationality: nationality,
      description: description,
      id: Date.now(),
    };

    let copy = [...data];
    copy.push(user);
    setData(copy);

    setUsername("");
    setAge("");
    setPassword("");
    setNationality("Nationality");
    setDescription("");

    console.log(user);
  }

  return (
    <div className="main">
        <div className="register">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter-username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Enter-age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <select
            value={nationality}
            onChange={(e) => {
              setNationality(e.target.value);
            }}
          >
            <option value="uzbek">Uzbek</option>
            <option value="Russian">Russian</option>
            <option value="English">English</option>
            <option value="Kazakh">Kazakh</option>
            <option value="Kyrgiz">Kyrgiz</option>
          </select>
          <textarea
            value={description}
            placeholder="text area"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <button type="submit">save</button>
        </form>
      </div>
      <div className="container">
        {data.length > 0 &&
          data.map((user, index) => {
            return (
              <div className="info" key={user.id}>
                <h2>User List</h2>
                <h3>
                  Name: <span>{user.username}</span>
                </h3>
                <h3>
                  Age: <span>{user.age}</span>
                </h3>
                <h3>
                  Password: <span>{user.password}</span>
                </h3>
                <h3>
                  Nationality: <span>{user.nationality}</span>
                </h3>
                <h3>
                  Description: <span>{user.description}</span>
                </h3>
              </div>
            );
          })}
          
      </div>
    </div>
  );
}
export default App;
