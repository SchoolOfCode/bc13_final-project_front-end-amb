
 const VotingDropdown = ({tripChoices, category, handleChange, handleSubmits}: any) => {

    // //onClick might need two function?
    // function handleClick() {
    //     console.log('clicked')
    //     alert('thanks for voting!')
    // }

    return (
      <div>
      <select className='dropdowns' onChange={handleChange}>
      <option  value="" disabled selected>the {category}</option>
      {tripChoices.payload.filter((i:any) => i.category === `${category}`).map((filteredCategory:any) => (
          <option key={Math.random() * 100}
           value={filteredCategory.choice_name}>{filteredCategory.choice_name}</option>
      ))}
      </select>
      <button className="vote-button" onClick={()=> handleSubmits(category)}>vote</button>
      </div>
  )};
  
  
  export default VotingDropdown;
  
  
  /*
  Plan: 
  1. filter tripChoices by category
  2. map over the filtered array and return a dropdown with the choices
  3. need to be able to reuse the component for each category
  4. need to be able to pass in the category as a prop
  
  */
