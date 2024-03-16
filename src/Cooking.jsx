

const Cooking = ({meals}) => {
  
    return (
        <>
        <div className="">
            <h1 className="text-2xl text-center">Want To Cook: {meals.length}</h1>
            
        </div>

        <div className="overflow-x-auto">
  <table className="table table-zebra">

    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
     
    {meals.map((meal, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{meal.recipe_name}</td>
                                <td>{meal.preparing_time} minutes</td>
                                <td>{meal.calories} calories</td>
                                <td>
                                    <button className="px-3 py-2 bg-[#0BE58A] rounded-full border-none duration-300 hover:scale-90">Preparing</button>
                                </td>
                            </tr>
                        ))}

    </tbody>
  </table>
</div>

      <div className="pt-5">
        <h1 className="text-2xl text-center">Currently Cooking: 01</h1>
      </div>
        
      <table className="table table-zebra">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
     
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        
      </tr>

    </tbody>
  </table>

        </>
        
    );
};

export default Cooking;