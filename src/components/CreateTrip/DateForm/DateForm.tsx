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
            <div key={item.id}>
              <input
                type="date"
                name={`date[${index}].name`}            
                {...register(`date[${index}].name`)}
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
          add date
        </button>

    </>
  );
}
