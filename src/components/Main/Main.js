import React, { useState } from 'react';
import Card from '../Card/Card';
import './Main.css';

const initialData = [
  {
    id: 1,
    image: 'https://i.ytimg.com/vi/PztCEdIJITY/maxresdefault.jpg',
    title: '¿CUÁNDO USAR LET, VAR Y CONST?',
    category: 'FRONT END',
    description: 'Description for ¿CUÁNDO USAR LET, VAR Y CONST?'
  },
  {
    id: 2,
    image: 'https://i.ytimg.com/vi_webp/UuAX5azcvDQ/maxresdefault.webp',
    title: '¿QUÉ ES JAVASCRIPT?',
    category: 'FRONT END',
    description: 'Description for ¿QUÉ ES JAVASCRIPT?'
  },
  {
    id: 3,
    image: 'https://i.ytimg.com/vi_webp/rpvrLaBQwgg/maxresdefault.webp',
    title: 'EQUIPO FRONT END',
    category: 'FRONT END',
    description: 'Description for EQUIPO FRONT END'
  },
  {
    id: 4,
    image: 'https://i.ytimg.com/vi_webp/t-iqt1b2qqk/maxresdefault.webp',
    title: 'SPRING FRAMEWORK',
    category: 'BACK END',
    description: 'Description for SPRING FRAMEWORK'
  },
  {
    id: 5,
    image: 'https://i.ytimg.com/vi/cLLKVd5CNLc/maxresdefault.jpg',
    title: '¿QUÉ ES SQL Y NOSQL?',
    category: 'BACK END',
    description: 'Description for ¿QUÉ ES SQL Y NOSQL?'
  },
  {
    id: 6,
    image: 'https://i.ytimg.com/vi/nzVdLC_QpnA/maxresdefault.jpg',
    title: 'CONOCE LOS ENUM',
    category: 'INNOVACIÓN Y GESTIÓN',
    description: 'Description for CONOCE LOS ENUM'
  },
  {
    id: 7,
    image: 'https://i.ytimg.com/vi/6N3OkLCfK-0/maxresdefault.jpg',
    title: '¿QUÉ SON LAS SOFT SKILLS?',
    category: 'INNOVACIÓN Y GESTIÓN',
    description: 'Description for ¿QUÉ SON LAS SOFT SKILLS?'
  },
  {
    id: 8,
    image: 'https://i.ytimg.com/vi/7lnmW8fB0nM/maxresdefault.jpg',
    title: 'LAS 7 SOFTSKILLS MÁS DESEADAS',
    category: 'INNOVACIÓN Y GESTIÓN',
    description: 'Description for LAS 7 SOFTSKILLS MÁS DESEADAS'
  }
];

const categoryColors = {
  'FRONT END': '#6BD1FF', // Azul
  'BACK END': '#00C86F', // Verde
  'INNOVACIÓN Y GESTIÓN': '#FFBA05' // Amarillo
};

const maxCategories = 3;

const Main = ({ }) => {
  const [data, setData] = useState(initialData);

  const handleDelete = (id) => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  };

  const groupedData = data.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const categories = Object.keys(groupedData).slice(0, maxCategories);

  return (
    <main className="main">
      <div className="cover">
        <div className="coverletra">
          <h1 className="cover-title">Challenge React</h1>
          <p className="cover-description">
            Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </div>
        <img className="cover-image" src="https://i.ytimg.com/vi/ov7vA5HFe6w/maxresdefault.jpg" alt="Portada" />
      </div>
      {categories.map((category, index) => (
        <div key={index} className="category">
          <h2 className="category-title" style={{ backgroundColor: categoryColors[category] }}>
            {category}
          </h2>
          <div className="category-cards">
            {groupedData[category].map((item) => (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
                categoryColor={categoryColors[item.category]}
                description={item.description}
                onDelete={() => handleDelete(item.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};

export default Main;
