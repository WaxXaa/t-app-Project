import React from 'react';
import { categories } from '../../assets/categories.json';

const CategoryCarousel = () => {
  return (
    <div className='category-carousel'>
      {categories.map(category => (
        <div key={category.id} className='category-item'>
          <span className="material-symbols-outlined">{category.icon}</span>
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryCarousel;