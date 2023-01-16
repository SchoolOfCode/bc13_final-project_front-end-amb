

const GroupForm = ({register, errors}:any) => {
    return (
       <div className="form-page">
        <h2>group name & destination</h2>
        <label>  
        <input className="form-page-item"
            type="text"       
            {...register("group", {
                required: true,
                minLength: 3,
            })}/>
        <span className="form-page-item placeholder">trip name</span>  
        </label>
            {errors.group && <p>This field needs to be completed.</p>}

        <label> 
        <input className="form-page-item"
            type="text"
            {...register("destination", {
                required: true,
                minLength: 3,
            })}/>
            <span className="form-page-item placeholder">destination</span>  
        </label>
            {errors.destination && <p>This field needs to be completed.</p>}
        </div>
    )
}

export default GroupForm
