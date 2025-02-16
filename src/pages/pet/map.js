import React, { useEffect, useState } from 'react';

export default function Map() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/users");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt="Product"/ >
          {item.id}
        </div>
      ))}
    </div>
  );
}
