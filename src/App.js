import React, { Component } from 'react';
import './App.css';

function App(props){
  const [newItem, setNewItem] = useState("");
  const [newlist, setlist] = useState([]);  

updateInput(key, value){
  // update react state
  setState({
    [key]: value
  });
};

addItem(){
  // create item with unique id
  const newItem={
    id: 1 + Math.random(),
    value: newItem.slice()
  };

  // copy of current list of items
  const list = [...list];

  // add new item to list
  list.push(newItem);

  // update state with new list and reset newItem input
  setState({
    list,
    newItem:""
  }); 
}

deleteItem(id){
  // copy of current list of items
  const list = [...list];

  // filter out item being deleted
  const updatedList = list.filter(item => item.id !== id);

  // update state with new list and reset newItem input
  setState({list: updatedList}); 
}


return (
  <div className="App">
    <div>
        Add an Item...
        <br/>
        <input type="text" 
        placeholder="Type item here..."
        value={newItem}
        onChange={e => updateInput("newItem", e.target.value)}
        />
        <button onClick={() => addItem()}>
          Add
        </button>
        <br/>
        <ul>
        {list.map(item => {
          return(
            <li key={item.id}>
              {item.value}
              <button onClick={() => deleteItem(item.id)}>
              X
              </button>
            </li>
          )})}       
        </ul>
      </div>
  </div>
);
}

export default App;

