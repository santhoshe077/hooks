import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [postData, setPostData] = useState({
    title: 'foo',
    body: 'bar',
    userId: 1,
  });

  const [getResponse, setGetResponse] = useState(null);
  const [postResponse, setPostResponse] = useState(null);

  useEffect(() => {
    // Example GET request
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setGetResponse(response.data);
      })
      .catch(error => {
        console.error('GET Error:', error.message);
      });

    // Example POST request
    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
      .then(response => {
        setPostResponse(response.data);
      })
      .catch(error => {
        console.error('POST Error:', error.message);
      });
  }, [postData]); // Dependency array to re-run the effect when postData changes

  return (
    <div>
      <h2>GET Response:</h2>
      <pre>{JSON.stringify(getResponse, null, 2)}</pre>

      <h2>POST Response:</h2>
      <pre>{JSON.stringify(postResponse, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;