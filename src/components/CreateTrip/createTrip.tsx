/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./createTrip.css";
import { useAuth0 } from "@auth0/auth0-react";
import MembersForm from "./MembersForm/MembersForm";
import DateForm from "./DateForm/DateForm";
import GroupForm from "./GroupForm/GroupForm";
import MultipleEventForm from "./MultipleEventForm/MultipleEventForm";
import useMultistepForm from "./Hooks/useMultistepForm";
import NewForm from "./AnotherFuckingForm/NewForm";
import CategoryForm from "./Another FormAgain/CategoryForm";
import MemberForm from "./AnotherFuckingForm/member_form";
import Dashboard from "../Dashboard/dashboard";

// import Navbar from '../NavBar/NavBar';

const CreateTrip = ({ setTripDetails, pageSelect }: any) => {
  const [object, setObject] = useState({});

  const {
    register,
    control,
    handleSubmit,
    //getValues,
    //setValue,
    // reset,
    formState: { errors },
  } = useForm();

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
    goTo,
  } = useMultistepForm([
    <NewForm ActualObj={object} CreatingObj={setObject} />,
    <CategoryForm ActualObj={object} />,
    <MemberForm ActualObj={object} />,
  ]);

  const { user } = useAuth0(); //, isAuthenticated, getAccessTokenSilently

  function onSubmit(data: any) {
    if (user?.sub) {
      data.Admin = user?.sub;
    }
    console.log(data);
    next();

    if (isLastStep) {
      // TODO: Create a fetch request to retrieve the trip ID and save the trip to a database.
      setTripDetails(data); // TODO: maybe use local storage to save the details of the form while logging in?
      pageSelect("dashboard"); // TODO: Create a function that changes state in the dashboard component to 'data'.
      goTo(0);
    }
  }

  return (
    <>
      <div className="createTripContainer">
        <h1 className="create-trip-h1">create trip </h1>
        <h3>add options for each category that your companions can vote on</h3>
        <div className="create-trip-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="page-counter">
              {currentStepIndex + 1} / {steps.length}
            </div>

            {step}

            {/* <div className="change-page-buttons">
              {!isFirstStep && (
                <button className="button" type="button" onClick={back}>
                  back
                </button>
              )}
              <button className="button" type="submit">
                {isLastStep ? "finish" : "next"}
              </button>
            </div>  */}
            {/* <input {...register("exampleRequired", { required: true })} /> */}
          </form>
        </div>

        <button
          className="create-cancel-button cancel-button reset-button"
          onClick={() => {
            // pageSelect("dashboard");
            goTo(0);
            
          }}
        >
          reset
        </button>
      </div>
    </>
  );
};

export default CreateTrip;

// <GroupForm {...{register, errors}}/>,
// <DateForm {...{ control, register, errors}}/>,
// <MembersForm {...{ control, register, errors}}/>,
// <MultipleEventForm {...{ control, register, errors, getValues, setValue}}/>
