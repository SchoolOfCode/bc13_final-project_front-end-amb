import React from "react";
import { useFieldArray } from "react-hook-form";

export default function MembersForm({ control, register}:any) {
  const { fields, append, remove} = useFieldArray({
    control,
    name: "member"
  });


  return (
    <>
      
      
        {fields.map((item, index) => {
          return (
            <div style={{listStyle:'none'}} key={item.id}>

              <div>
              <label>Name 
              <input
                name={`member[${index}].name`}            
                {...register(`member[${index}].name`)}
              />
              </label>
              </div>
              <div>
              <label>Email 
              <input
                name={`member[${index}].email`}            
                {...register(`member[${index}].email`)}
              />
              </label>
              </div>

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
          Add Member
        </button>

    </>
  );
}
