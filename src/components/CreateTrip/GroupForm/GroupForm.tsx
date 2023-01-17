

const GroupForm = ({register, errors}:any) => {
    return (
       <div className="form-page">
        <h2 id="groupName">group name & destination</h2>
        <label className="form-page-label">  
        <input placeholder="&nbsp;" className="form-page-input-field"
            type="text"       
            {...register("group", {
                required: true,
                minLength: 3,
            })}/>
        <span className="placeholder">trip name</span>  
        </label>
            {errors.group && <p className="error-p-tag">This field needs to be completed.</p>}

        <label className="form-page-label"> 
        <input placeholder="&nbsp;" className="form-page-input-field"
            type="text"
            {...register("destination", {
                required: true,
                minLength: 3,
            })}/>
            <span className="placeholder">destination</span>  
        </label>
            {errors.destination && <p className="error-p-tag">This field needs to be completed.</p>}
        </div>
    )
}

export default GroupForm
