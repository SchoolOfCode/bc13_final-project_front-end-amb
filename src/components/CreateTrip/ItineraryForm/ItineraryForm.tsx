import React from "react";
import { useFieldArray } from "react-hook-form";


export default function ItineraryForm({ control, register, nestIndex}:any) {
  const { fields, append, remove} = useFieldArray({
    control,
    name: `event[${nestIndex}].itinerary`
  });


  return (
    <div>
     
      
        {fields.map((item, k) => {
          return (
            <div key={item.id} id="itinerary-page" className="form-page">

              <select id="itinerary-page-item" className="form-page-item" 
                name={`event[${nestIndex}].itinerary[${k}].type`}            
                {...register(`event[${nestIndex}].itinerary[${k}].type`)}>
                <option value="">select option</option>
                <option value="Restaurant">restaurant</option>
                <option value="Hotel">hotel</option>
                <option value="Attraction">attraction</option>
                <option value="Tour">tour</option>
                <option value="Concert">concert</option>
              </select>

              <input id="itinerary-page-item" className="form-page-item"
                name={`event[${nestIndex}].itinerary[${k}].name`}            
                {...register(`event[${nestIndex}].itinerary[${k}].name`)}
              />
              
              <input id="itinerary-page-item" className="form-page-item"
                type="datetime-local"
                name={`event[${nestIndex}].itinerary[${k}].date_time`}            
                {...register(`event[${nestIndex}].itinerary[${k}].date_time`)}
              />

              <button type="button" onClick={() => remove(k)}>
                delete
              </button>

            </div>
          );
        })}
      

        <button className="page-alignment itinerary-button"
          type="button"
          onClick={() => {
            append(null);
          }}
        >
          add option
        </button>

    </div>
  );
}


