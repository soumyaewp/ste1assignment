
import './App.css';
import React,{useState} from 'react';
function App() {
  
  const [num, setNum] = useState(0)
  
  const [grocery, setGrocery] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedValue, setEditedValue] = useState("");

  const handleChange = (e) => {
    setGrocery(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    setList((olditems) => {
      return [...olditems, grocery];
    });
    setGrocery("");
  }

  const handleDelete = (id) => {
    setList((olditems) => {
      return olditems.filter((arr, index) => {
        return index !== id;
      });
    });
  }

  const deleteAll = () => {
    setList([]);
  }

  const handleUpdate = (id) => {
    setEditIndex(id);
    setEditedValue(list[id]);
  }

  const handleConfirmUpdate = (id) => {
    setList((olditems) => {
      const updatedItems = olditems.map((item, index) => {
        if (index === id) {
          return editedValue;
        }
        return item;
      });
      return updatedItems;
    });
    setEditIndex(-1);
    setEditedValue("");
  }
  //increment app
  const handleIncrement=()=>{
      setNum(num+1);
  }
  const handleDecrement=()=>{
   // setNum(num-1)
    if(num<=0){
      alert("You cannot decrement anymore")
     
    }else{
      setNum(num-1)
    }
   
  }
  const handleReset=()=>{
    setNum(0)
  }
  return (
    <>
      
      <div className="App">
      <h1>Grocery App</h1>
      <div>
        <div>
          <input onChange={handleChange} value={grocery} type="text" placeholder='enter grocery' />
          <button onClick={handleClick} type='submit'>Submit</button>
        </div>
        <div>
          <ul>
            {list.map((itemval, index) => (
              <div className='map' key={index}>
                {index === editIndex ? (
                  <>
                    <input
                      type="text"
                      value={editedValue}
                      onChange={(e) => setEditedValue(e.target.value)}
                    />
                    <button onClick={() => handleConfirmUpdate(index)}>Confirm</button>
                  </>
                ) : (
                  <>
                    <ul>{itemval}</ul>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    <button onClick={() => handleUpdate(index)}>Update</button>
                  </>
                )}
              </div>
            ))}
          </ul>
          <button onClick={deleteAll}>Delete all</button>
        </div>
      </div>
    </div>
{/* counter app */}
    <div className="App">
      <h1>Counter APP</h1>
      <div>
      
      <h5>{num}</h5>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
      </div>
     
    </div>
    
    </>
  );
}

export default App;
