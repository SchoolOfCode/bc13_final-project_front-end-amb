import React from "react";
import { useFieldArray } from "react-hook-form";

export default function ItineraryForm({ control, register}:any) {
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
                <option value="">select option</option>
                <option value="Restaurant">restaurant</option>
                <option value="Hotel">hotel</option>
                <option value="Attraction">attraction</option>
                <option value="Tour">tour</option>
                <option value="Concert">concert</option>
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
                delete
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
          add event
        </button>

    </>
  );
}
