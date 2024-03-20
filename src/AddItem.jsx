import React from 'react'
import { FaPlus } from 'react-icons/fa'


const AddItem = ({handleAddSubmit,newItem,setNewItem}) => {

  return (
    <>
    <div className='bg-dark text-light p-3'>
    <form className='addForm' onSubmit={(e)=>handleAddSubmit(e,newItem)}>
        <label htmlFor='addItem'><b>Add Item:</b></label>
        <div>
        <input type='text' className='form-control' autoFocus id='addItem' onChange={(e)=>setNewItem(e.target.value)} value={newItem}  placeholder='Add Item' required/>
        <button className='btn btn-primary my-3' type='submit'>Add <FaPlus/></button>
        </div>
    </form>
    </div>
    </>
  )
}

export default AddItem