import { useState } from 'react';
//import './App.css';

function MemberForm() {
  const [inputFields, setInputFields] = useState([
    { name: '', age: '' }
  ])


  const handleFormChange = (index:any, event:any) => {
    let data:any = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  }

  const addFields = () => {
    let newfield = { name: '', age: '' }
    setInputFields([...inputFields, newfield])
  }


  return (
    <div className="App">
      <form>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name='name'
                placeholder='Name'
                value={input.name}
                onChange={event => handleFormChange(index, event)}
              />
              <input
                name='age'
                placeholder='Age'
                value={input.age}
                onChange={event => handleFormChange(index, event)}
              />
            </div>
          )
        })}
        <button type="button" onClick={addFields}>Add More..</button>
      </form>
    </div>
  );
}

export default MemberForm;
