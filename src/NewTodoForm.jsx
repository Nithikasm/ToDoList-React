import { useState } from "react"
export function NewTodoForm({something}) {
    const [newItem,setNewItem] = useState("")

    function handleSubmit(e){
    e.preventDefault(e)
    if(newItem=== " ") return
    something(newItem)
    setNewItem(" ")
  }
    return (
        <form onSubmit={handleSubmit} 
      className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input 
        value={newItem}
        onChange={e=>setNewItem(e.target.value)}
        type="text" id="item" />
    </div>
    <button className="btn">ADD</button>
  </form>
    )
}