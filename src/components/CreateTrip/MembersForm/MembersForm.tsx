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

         
              <label  className="form-page-label"> 
              <input placeholder="&nbsp;" id="member-page-item" className="form-page-input-field"
                name={`member[${index}].name`}            
                {...register(`member[${index}].name`)}
              />
              <span className="placeholder">name</span> 
              </label>
      
              <label  className="form-page-label">
              <input placeholder="&nbsp;" id="member-page-item" className="form-page-input-field"
                name={`member[${index}].email`}            
                {...register(`member[${index}].email`)}
              />
              <span className="placeholder">email</span> 
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
