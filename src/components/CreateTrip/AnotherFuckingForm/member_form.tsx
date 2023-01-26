import { useState } from "react";
//import './App.css';

function MemberForm({ ActualObj }: any) {
  const [inputFields, setInputFields] = useState([
    { user_name: "", user_email: "" },
  ]);

  const handleFormChange = (index: any, event: any) => {
    let data: any = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
    //console.log(data, " handleFormChange");
  };

  const addFields = () => {
    let newfield = { user_name: "", user_email: "" };
    setInputFields([...inputFields, newfield]);
    console.log(newfield, "addFields");
  };
  const saveMembers = () => {
    console.log(inputFields);

    const memberObj = {
      userName: inputFields,
      trip_id: ActualObj.trip_id,
    };

    postMembers(memberObj);
  };

  async function postMembers(data: any) {
    console.log(data);
    const response = await fetch("http://localhost:3001/api/member/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let reply = await response.json();
    console.log(reply.payload);
  }

  return (
    <div className="App">
      <div className="create-trip-container" >
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
              className="form-page-input-field"
              required
                name="user_name"
                placeholder="Name"
                value={input.user_name}
                onChange={(event) => handleFormChange(index, event)}
              />
              <input
              className="form-page-input-field"
              required
                name="user_email"
                placeholder="Member email"
                value={input.user_email}
                onChange={(event) => handleFormChange(index, event)}
              />
            </div>
          );
        })}
        <button className="button-beige button" type="button" onClick={addFields}>
          add more...
        </button>
        <button className="submit-button button"
          onClick={() => {
            saveMembers();
            alert('thanks for creating a trip!');
          }}
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default MemberForm;
