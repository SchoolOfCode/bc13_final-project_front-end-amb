import React from "react";
import { useFieldArray } from "react-hook-form";

export default function DestForm({ control, register}:any) {
  const { fields, append, remove} = useFieldArray({
    control,
    name: "event"
  });


  return (
    <>
      
      
        {fields.map((item, index) => {
          return (
            <div key={item.id}>

              <select name={`event[${index}].type`}            
                {...register(`event[${index}].type`)}>
                <option value="">Select Option</option>
                <option value="Restearant">Restearant</option>
                <option value="Hotel">Hotel</option>
                <option value="Attraction">Attraction</option>
                <option value="Tour">Tour</option>
                <option value="Concert">Concert</option>
              </select>

              <input
                name={`event[${index}].location`}            
                {...register(`event[${index}].location`)}
              />
              
              <input
                type="datetime-local"
                name={`event[${index}].date`}            
                {...register(`event[${index}].date`)}
              />

              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>

            </div>
          );
        })}
      

        <button
          type="button"
          onClick={() => {
            append(null);
          }}
        >
          Add Event
        </button>

    </>
  );
}
