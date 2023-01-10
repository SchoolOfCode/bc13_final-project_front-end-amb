import React from "react";
import { useFieldArray } from "react-hook-form";

export default function DateForm({ control, register}:any) {
  const { fields, append, remove} = useFieldArray({
    control,
    name: "date"
  });


  return (
    <>
      
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                type="date"
                name={`date[${index}].name`}            
                {...register(`date[${index}].name`)}
              />

              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>

            </li>
          );
        })}
      </ul>

        <button
          type="button"
          onClick={() => {
            append(null);
          }}
        >
          Add Date
        </button>

    </>
  );
}
