import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./style.css"

const Home = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10')
      .then(response => response.json())
      .then(data => {
        setJokes(data.jokes);
      })
      .catch(error => {
        console.error('Error fetching jokes:', error);
      });
  }, []);

  
  return (
    <div className='jokes-container'>
      <h1>Jokes</h1>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Type</th>
            <th scope="col">Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{joke.category}</td>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
