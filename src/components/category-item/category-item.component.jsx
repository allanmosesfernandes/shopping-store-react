import React from 'react'

const CategoryItem = ({ item }) => {
    
  return (<div key={item.id} className='category-container'>
            <div className="background-image" style={{
                backgroundImage: `url(${item.imageUrl})`,
            }} />
            <h1>{item.title}</h1>
            <p>Shop now</p>
   
        </div>)
}

export default CategoryItem