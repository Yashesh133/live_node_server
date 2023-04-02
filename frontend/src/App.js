import './App.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [name, setname] = useState("");

  const submitdata = (e) => {
    e.preventDefualt();

    axios.post('http://localhost:5000/userget', {
      name: name
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  return (
    <div className="App">
      <div className="App-header">
        <form action="post" onSubmit={submitdata}>
          <table>
            <tr>
              <td>name:</td>
              <td>
                <input type="text" name="name" id="" onChange={e => setname(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" name="name" id="" />
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}

export default App;
