

 const CategoryDropdown = ({tripChoices, category,handleChange}: any) => {

 

  return (
    <div>
    <p>work in progress</p>
    <select className='dropdowns' onChange={handleChange}>
    <option  value="" disabled selected>vote on {category}</option>
    {tripChoices.payload.filter((i:any) => i.category === `${category}`).map((filteredCategory:any) => (
        <option key={Math.random() * 100}
         value={filteredCategory.choice_name}>{filteredCategory.choice_name}</option>
    ))}
    </select>
    <button>submit NEED ADD FUNCTION</button>
    </div>
)};


export default CategoryDropdown;


/*
Plan: 
1. filter tripChoices by category
2. map over the filtered array and return a dropdown with the choices
3. need to be able to reuse the component for each category
4. need to be able to pass in the category as a prop

*/