

const GroupForm = ({register, errors}:any) => {
    return (
       <div className="form-page">
        <h2 style={{color: 'black'}}>group name & destination</h2>
        <label>trip name:  
        <input className="form-page-item"
            type="text"       
            {...register("group", {
                required: true,
                minLength: 3,
            })}/>
        </label>
            {errors.group && <p>This field needs to be completed.</p>}

        <label>destination: 
        <input className="form-page-item"
            type="text"
            {...register("destination", {
                required: true,
                minLength: 3,
            })}/>
        </label>
            {errors.destination && <p>This field needs to be completed.</p>}
        </div>
    )
}

export default GroupForm
