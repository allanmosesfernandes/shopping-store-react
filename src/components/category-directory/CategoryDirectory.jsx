import React from 'react'
import CategoryItem from '../category-item/category-item.component'
const CategoryDirectory = ({categories}) => {
  return (
   <div className='categories-container'>
    {
        categories.map((category) => <CategoryItem key={category.id} item={category} />)
    }
   </div>
  )
}

export default CategoryDirectory