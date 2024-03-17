import PropTypes from 'prop-types'
const Recipe = ({recipie,handlePreparing}) => {
    // console.log(handlePreparing);
    return (
        <div className="">
            <div className=" border-2 p-5 rounded-xl h-[700px]">
            
            <img className='w-[331px] h-[200px] rounded-xl' src={recipie.image} alt="dish" />
            <div className="pt-5 pb-5">
            <h1 className="text-xl text-black">{recipie.recipe_name}</h1>
            <p className="text-base pt-4">{recipie.short_description}</p>
            </div>
            <h1 className="text-lg pb-4">Ingredients: {recipie.ingredients.length}</h1>
            <ul className='list-disc ml-4'>
            {recipie.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
            </ul>
            <hr className='mt-5' />
            <div className="flex gap-5 py-5">
                <small className='flex w-2/4 gap-2 text-gray-500'><img src="https://i.ibb.co/WzMf2HP/Screenshot-2024-03-17-035525.png" alt="" />{recipie.preparing_time} minutes</small>
                <small className='flex w-2/4 gap-2 text-gray-500'><img src="https://i.ibb.co/5GHG7kK/Screenshot-2024-03-17-035600.png" alt="" />{recipie.calories} calories</small>
            </div>
            <button onClick={() => handlePreparing(recipie)} className="btn bg-[#0BE58A] text-lg rounded-full  border-none">Want To Cook</button>
        </div> 
        </div>
    );
};



Recipe.propTypes = {
    recipie: PropTypes.shape({
        recipe_name: PropTypes.string.isRequired,
        short_description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.string.isRequired
    }).isRequired,
    handlePreparing: PropTypes.func.isRequired
};


export default Recipe;