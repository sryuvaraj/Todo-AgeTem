import React from 'react'
import { useState } from 'react'
import ItemsList from './ItemsList';

const Content = ({items,handleCheck,haldleRemove}) => {

  return (
    <main>
        <div>
          {(items.length==0) && <h3 className='text-center'>The list is empty</h3>}
          <ItemsList
                items = {items}
                handleCheck = {handleCheck}
                haldleRemove = {haldleRemove}
                key={items.id}
          />
        </div>
    </main>
  )
}

export default Content