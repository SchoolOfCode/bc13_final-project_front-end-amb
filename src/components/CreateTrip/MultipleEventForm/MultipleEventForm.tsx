import React from "react";
import { useFieldArray } from "react-hook-form";
import ItineraryForm from "../ItineraryForm/ItineraryForm";
//import {useForm} from 'react-hook-form'


export default function MultipleEventForm({ control, register, errors, setValue, getValues}:any) {



  const { fields, append, remove} = useFieldArray({
    control,
    name: "event"
  });

 

  return (
  <div  className="scroll-page">
 
     {fields.map((item, index) => {
            return (
                <div key={item.id} className="form-page">
               
                  <div style={{alignSelf: 'flex-start'}}>
                <ItineraryForm nestIndex={index}
                {...{control, register, errors}}
                />
  </div>
                
                <button className="delete-current-event-button"
                  type="button" onClick={() => remove(index)}>
                    delete event
                  </button>
                  
                </div>
              
            )
        })}


        <button style={{width: '150px', marginLeft: '45%', marginTop: '1%'}}
          type="button"
          onClick={() => {
            append(null);
          }}
        >
          add event
        </button>
     
  
  </div>)

}

