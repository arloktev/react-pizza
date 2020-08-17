import React from 'react';
import './categories.scss';

const Categories = () => {
  const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const [currentCategory, setCurrentCategory] = React.useState(null);

  return (
    <div className="categories">
      <ul>
        <li
          className={`${currentCategory === null  ? 'active': ''}`}
          onClick={() => setCurrentCategory(null)}
        >Все</li>
        {
          !!categories &&
          categories.map((category, index) => {
            return (
              <li
                className={`${index === currentCategory ? 'active': ''}`}
                key={index}
                onClick={() => setCurrentCategory(index)}
              >{category}</li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Categories;