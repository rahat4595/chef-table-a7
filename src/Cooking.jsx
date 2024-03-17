import { useState } from "react";


const Cooking = ({meals,setMeals}) => {
  const [currentlyCooking, setCurrentlyCooking] = useState([]);
  
  const handlePrepare = (meal) =>{
      setCurrentlyCooking([...currentlyCooking,meal]);
      const removeMeals = meals.filter((m) => m.recipe_id !== meal.recipe_id);
      setMeals(removeMeals)
  }

  const totalTime = currentlyCooking.reduce((total, meal) => total + parseInt(meal.preparing_time), 0);
    const totalCalories = currentlyCooking.reduce((total, meal) => total + parseInt(meal.calories), 0);
  
    return (
        <>
        <div className="">
            <h1 className="text-2xl text-center font-semibold">Want To Cook: {meals.length}</h1>
            
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
                                    <button onClick={() => handlePrepare(meal)} className="px-3 py-2 bg-[#0BE58A] rounded-full border-none duration-300 hover:scale-90">Preparing</button>
                                </td>
                            </tr>
                        ))}

    </tbody>
  </table>
</div>

      <div className="pt-5">
        <h1 className="text-2xl text-center font-semibold">Currently Cooking: {currentlyCooking.length}</h1>
      </div>
        
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
     
    {currentlyCooking.map((meal, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{meal.recipe_name}</td>
                                <td>{meal.preparing_time} minutes</td>
                                <td>{meal.calories} calories</td>
                            </tr>
                        ))}

    </tbody>
  </table>

      <div className="flex flex-col mt-5 items-end">
        <p className="font-medium text-[#282828CC]">Total Time = {totalTime} min</p>
        <p className="font-medium text-[#282828CC]">Total Calories = {totalCalories} calories</p>
      </div>

        </>
        
    );
};

export default Cooking;