import React, { useState } from 'react';
import Card from './Card';
import './Main.css';

const initialData = [
  {
    image: 'https://i.ytimg.com/vi/PztCEdIJITY/maxresdefault.jpg',
    category: 'FRONT END'
  },
  {
    image: 'https://i.ytimg.com/vi_webp/UuAX5azcvDQ/maxresdefault.webp',
    category: 'FRONT END'
  },
  {
    image: 'https://i.ytimg.com/vi_webp/rpvrLaBQwgg/maxresdefault.webp',
    category: 'FRONT END'
  },
  {
    image: 'https://i.ytimg.com/vi_webp/t-iqt1b2qqk/maxresdefault.webp',
    category: 'BACK END'
  },
  {
    image: 'https://i.ytimg.com/vi/cLLKVd5CNLc/maxresdefault.jpg',
    category: 'BACK END'
  },
  {
    image: 'https://i.ytimg.com/vi/nzVdLC_QpnA/maxresdefault.jpg' ,
    category: 'INNOVACIÓN Y GESTIÓN'
  },
  {
    image: 'https://i.ytimg.com/vi/6N3OkLCfK-0/maxresdefault.jpg',
    category: 'INNOVACIÓN Y GESTIÓN'
  },
  {
    image: 'https://i.ytimg.com/vi/7lnmW8fB0nM/maxresdefault.jpg',
    category: 'INNOVACIÓN Y GESTIÓN'
  }
];

const Main = () => {
  const [data, setData] = useState(initialData);
  const [newVideo, setNewVideo] = useState({ image: '', category: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVideo({ ...newVideo, [name]: value });
  };

  const handleAddVideo = (e) => {
    e.preventDefault();
    setData([...data, newVideo]);
    setNewVideo({ image: '', category: '' });
};

const groupedData = data.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
}, {});

return (
<main className="main">
    {Object.keys(groupedData).map((category, index) => (
        <div key={index} className="category">
        <h2 className="category-title">{category}</h2>
        <div className="category-cards">
            {groupedData[category].map((item, idx) => (
            <Card
                key={idx}
                image={item.image}
                category={item.category}
            />
            ))}
        </div>
        </div>
    ))}

    </main>
);
}

export default Main;
