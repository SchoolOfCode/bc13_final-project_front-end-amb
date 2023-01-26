import React from "react";
import { useFieldArray } from "react-hook-form";


export default function DateForm({ control, register}:any) {
  const { fields, append, remove} = useFieldArray({
    control,
    name: "date"
  });


  return (
    <>
   
      
      
        {fields.map((item, index) => {
          return (
            <div key={item.id} id="date-page" className="form-page">
              <label className="form-page-label">date from: 
              <input id="date-page-item" className="form-page-input-field"
                type="date"
                name={`date[${index}].from`}            
                {...register(`date[${index}].from`)}
              />
              </label>

              <label className="form-page-label">date to: 
              <input  id="date-page-item" className="form-page-input-field"
                type="date"
                name={`date[${index}].to`}            
                {...register(`date[${index}].to`)}
              />
              </label>

              <button className="button" type="button" onClick={() => remove(index)}>
                delete
              </button>

            </div>
          );
        })}
      
      
        <button className="page-alignment button"
          type="button"
          onClick={() => {
            append(null);
          }}
        >
          add date
        </button>
       
        </>
  );
}
