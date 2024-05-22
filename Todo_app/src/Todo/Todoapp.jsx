import React, { useState } from 'react';
import '../Todo/todoapp.css'
function Todoapp() {
  let [list, setlist] = useState([]);
  let [inputtext, setinputtext] = useState('');
  let [edittext, setedittext] = useState(null);

  function update(e) {
    setinputtext(e.target.value);
  }

  function additem(e) {
    e.preventDefault(); 
    let copylist = [...list];
    if (edittext !== null) {
      copylist[edittext] = inputtext;
      setedittext(null);
    } else {
      copylist.push(inputtext);
    }
    setlist(copylist);
    setinputtext(''); 
  }

  function dltall() {
    setlist([]);
  }

  function dlt(index) {
    let copylist = [...list];
    copylist.splice(index, 1);
    setlist(copylist);
  }

  function edit(index) {
    setinputtext(list[index]);
    setedittext(index);
  }

  return (
    <div className='todo-container'>
      <h1>TODO</h1>
      <form onSubmit={additem}>
        <input
          onChange={update}
          placeholder='Enter item'
          type='text'
          value={inputtext}
        />
        <button type='submit'>
          {edittext !== null ? 'EDIT' : 'ADD'}
        </button>
        <button type='button' onClick={dltall}>Delete All</button>
      </form>
      <ol>
        {list.map((value, index) => (
          <li key={index}>
            {value}
            <button onClick={() => dlt(index)}>DLT</button>
            <button onClick={() => edit(index)}>EDIT</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todoapp;
