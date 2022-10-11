import React from 'react';
import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {
  
  return (
    <>
      { items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete} 
        />
      ) : (<p style={ {color: 'cadetBlue', marginTop: '2rem'} }>No item on your list</p>) }
    </>
  )
}

export default Content
