import { useState } from "react";

const url = "http://localhost:3001/api";

const CategoryForm = ({ ActualObj }: any) => {
  const [budget0, setBudget0] = useState("");
  const [budget1, setBudget1] = useState("");
  const [budget2, setBudget2] = useState("");
  const [budget3, setBudget3] = useState("");

  const [accommodation0, setAccommodation0] = useState("");
  const [accommodation1, setAccommodation1] = useState("");
  const [accommodation2, setAccommodation2] = useState("");
  const [accommodation3, setAccommodation3] = useState("");

  const [restaurant0, setRestaurant0] = useState("");
  const [restaurant1, setRestaurant1] = useState("");
  const [restaurant2, setRestaurant2] = useState("");
  const [restaurant3, setRestaurant3] = useState("");

  async function saveForm() {
    const budgetArray = [budget0, budget1, budget2, budget3];

    const accommodationArray = [
      accommodation0,
      accommodation1,
      accommodation2,
      accommodation3,
    ];

    const restaurantArray = [
      restaurant0,
      restaurant1,
      restaurant2,
      restaurant3,
    ];

    budgetPollTable(budgetArray);

    restaurantPollTable(restaurantArray);

    accommodationPollTable(accommodationArray);
  }

  async function budgetPollTable(budgetArray: any) {
    let ob = {
      trip_id: ActualObj.trip_id,
      category: "budget",
      selected_choice: "undecided",
    };
    const response = await fetch(`${url}/poll`, {
      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(ob),
    });
    let data = await response.json();
    console.log(data.payload[0]);
    let budgetData = data.payload[0];
    // setObject({...object, destinationData})
    await choicesBudgetTable(budgetArray, budgetData);
  }

  async function choicesBudgetTable(budgetArray: any, budgetData: any) {
    console.log("here?");
    for (let i = 0; i < 4; i++) {
      if (budgetArray[i] !== "") {
        let ob = {
          poll_id: budgetData.poll_id,
          category: "budget",
          choice_name: `${budgetArray[i]}`,
        };

        const response = await fetch(`${url}/choices`, {
          method: "POST",

          headers: { "Content-Type": "application/json" },

          body: JSON.stringify(ob),
        });

        let data = await response.json();
        console.log(data);
        let choiceData = data.payload[0];
        console.log(choiceData);
      }
    }
  }

  async function restaurantPollTable(restaurantArray: any) {
    let ob = {
      trip_id: ActualObj.trip_id,
      category: "restaurant",
      selected_choice: "undecided",
    };
    const response = await fetch(`${url}/poll`, {
      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(ob),
    });
    let data = await response.json();
    console.log(data.payload[0]);
    let restaurantData = data.payload[0];

    await choicesRestaurantTable(restaurantArray, restaurantData);
  }

  async function choicesRestaurantTable(
    restaurantArray: any,
    restaurantData: any
  ) {
    console.log(restaurantData);
    for (let i = 0; i < 4; i++) {
      if (restaurantArray[i] !== "") {
        let ob = {
          poll_id: restaurantData.trip_id,
          category: "restaurant",
          choice_name: `${restaurantArray[i]}`,
        };

        const response = await fetch(`${url}/choices`, {
          method: "POST",

          headers: { "Content-Type": "application/json" },

          body: JSON.stringify(ob),
        });

        let data = await response.json();
        console.log(data);
        let choiceData = data.payload[0];
        console.log(choiceData);
      }
    }
  }

  async function accommodationPollTable(accommodationArray: any) {
    let ob = {
      trip_id: ActualObj.trip_id,
      category: "accomodation",
      selected_choice: "undecided",
    };
    const response = await fetch(`${url}/poll`, {
      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(ob),
    });
    let data = await response.json();
    console.log(data.payload[0]);
    let accommodationData = data.payload[0];

    await choicesAccomodationTable(accommodationArray, accommodationData);
  }

  async function choicesAccomodationTable(
    accommodationArray: any,
    accommodationData: any
  ) {
    console.log(accommodationData, accommodationArray, "here?");
    for (let i = 0; i < 4; i++) {
      if (accommodationArray[i] !== "") {
        let ob = {
          poll_id: accommodationData.poll_id,
          category: "Accommodation",
          choice_name: `${accommodationArray[i]}`,
        };

        const response = await fetch(`${url}/choices`, {
          method: "POST",

          headers: { "Content-Type": "application/json" },

          body: JSON.stringify(ob),
        });

        let data = await response.json();
        console.log(data);
        let choiceData = data.payload[0];
        console.log(choiceData);
      }
    }
  }

  return (
    <>
      <div className="form-page">
        <label className="form-page-label">
          enter budget
          <input
            type="text"
            value={budget0}
            name="budget0"
            onChange={(e) => {
              setBudget0(e.target.value);
            }}
          ></input>
          <input
            type="text"
            value={budget1}
            name="budget1"
            onChange={(e) => {
              setBudget1(e.target.value);
            }}
          ></input>
          <input
            type="text"
            value={budget2}
            name="budget2"
            onChange={(e) => {
              setBudget2(e.target.value);
            }}
          ></input>
          <input
            type="text"
            value={budget3}
            name="budget3"
            onChange={(e) => {
              setBudget3(e.target.value);
            }}
          ></input>
        </label>

        <label className="form-page-label">
          enter accommodation
          <input
            type="text"
            value={accommodation0}
            name="budget0"
            onChange={(e) => {
              setAccommodation0(e.target.value);
            }}
          ></input>
          <input
            type="text"
            value={accommodation1}
            name="budget1"
            onChange={(e) => {
              setAccommodation1(e.target.value);
            }}
          ></input>
          <input
            type="text"
            value={accommodation2}
            name="budget2"
            onChange={(e) => {
              setAccommodation2(e.target.value);
            }}
          ></input>
          <input
            type="text"
            value={accommodation3}
            name="budget3"
            onChange={(e) => {
              setAccommodation3(e.target.value);
            }}
          ></input>
        </label>

        <label className="form-page-label">
          enter restaurant
          <input
            type="text"
            value={restaurant0}
            name="budget0"
            onChange={(e) => {
              setRestaurant0(e.target.value);
            }}
          ></input>
          <input
            type="text"
            value={restaurant1}
            name="budget1"
            onChange={(e) => {
              setRestaurant1(e.target.value);
            }}
          ></input>
          <input
            type="text"
            value={restaurant2}
            name="budget2"
            onChange={(e) => {
              setRestaurant2(e.target.value);
            }}
          ></input>
          <input
            type="text"
            value={restaurant3}
            name="budget3"
            onChange={(e) => {
              setRestaurant3(e.target.value);
            }}
          ></input>
        </label>
      </div>

      <button onClick={saveForm}>submit</button>
    </>
  );
};

export default CategoryForm;
