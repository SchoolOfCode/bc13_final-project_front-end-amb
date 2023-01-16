import React from "react";
import { useFieldArray } from "react-hook-form";


export default function MembersForm({ control, register}:any) {
  const { fields, append, remove} = useFieldArray({
    control,
    name: "member"
  });


  return (
    <div>
      
      
        {fields.map((item, index) => {
          return (
            <div id="date-page" className="form-page" key={item.id}>

         
              <label>name 
              <input id="member-page-item" className="form-page-item"
                name={`member[${index}].name`}            
                {...register(`member[${index}].name`)}
              />
              </label>
      
              <label>email 
              <input id="member-page-item" className="form-page-item"
                name={`member[${index}].email`}            
                {...register(`member[${index}].email`)}
              />
              </label>
              

              <button type="button" onClick={() => remove(index)}>
                delete
              </button>
          
            </div>
          );
        })}
      

        <button className="page-alignment"
          type="button"
          onClick={() => {
            append(null);
          }}
        >
          add member
        </button>

    </div>
  );
}
