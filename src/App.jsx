import { useState } from 'react'
import './App.css'
import Cooking from './Cooking'
import Recipe from './Recipe'
import { useEffect } from 'react';
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [recipes, setRecipe] = useState([]);
  const [meals, setMeals] = useState([]);
  const [preparing, setPreparing] = useState(false);
  const [preparedMeals, setPreparedMeals] = useState([]);
  
 


  useEffect(() =>{
    fetch('recipe.json')
    .then(res => res.json())
    .then(data => setRecipe(data))
  },[]);

  const handlePreparing = (p) => {
    if (preparing) {
      toast.warning('Meal preparation is already in progress.');
      return;
    }
  
    if (preparedMeals.includes(p)) {
      toast.error('This recipe has already been added.');
      return;
    }
  
    try {
      setPreparing(true);
  
      const newMeals = [...meals, p];
      setMeals(newMeals);
  
      setPreparedMeals([...preparedMeals, p]);
  
      toast.success('Recipe added successfully!');
    } catch (error) {
      toast.error('Error preparing meal. Please try again later.');
      console.error('Error preparing meal:', error);
    } finally {
      setPreparing(false);
    }
      
    
  };

  return (
    <>
      <ToastContainer />
     <nav className='max-w-7xl m-auto mt-8'>
     <div className="navbar bg-base-100">
  <div className="flex-1 ">
    <a className="btn btn-ghost text-3xl font-bold">Recipe Calories</a>
  </div>
  <div className='w-[39%] hidden lg:block'>
    <ul className='flex gap-6 font-normal text-[#150B2BB3]'>
      <a href="#"><li>Home</li></a>
      <a href="#"><li>Recipes</li></a>
      <a href="#"><li>About</li></a>
      <a href="#"><li>Search</li></a>
    </ul>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control hidden lg:block">
    <label className="input input-bordered flex items-center gap-2">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
    <input type="text" className="grow" placeholder="Search" />
  </label>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img className='bg-[#0BE58A]' alt="Tailwind CSS Navbar component" src="https://i.ibb.co/pX03SVM/Frame.png" />
        </div>
      </div>
    </div>
  </div>
      </div>
     </nav>
    <main className='p-5 md:p-0'>
    <div>
    <div className="hero max-w-7xl m-auto h-[600px] rounded-2xl md:mt-10" style={{ backgroundImage: "url('https://i.ibb.co/S0JsSxd/banner.png')"}}>
      <div className="hero-overlay bg-opacity-20 rounded-2xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-4/5">
          <h1 className="mb-5 text-2xl lg:text-5xl text-white font-bold">Discover an exceptional cooking class tailored for you!</h1>
          <p className="mb-5 text-sm lg:text-lg font-normal text-gray-300">Experience culinary mastery firsthand with our engaging cooking classes. From basic techniques to gourmet delights, discover the art of cooking in a fun and educational environment.</p>
          <div className='flex flex-col md:flex-row gap-5 lg:gap-10 justify-center lg:pt-5'>
          <button className="btn bg-[#0BE58A] text-sm rounded-full px-8 border-none">Explore Now</button>
          <button className="btn bg-transparent text-white text-sm rounded-full px-8 ">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div className='max-w-4xl m-auto text-center pt-5 lg:pt-20'>
      <h1 className='text-4xl mb-8 font-semibold'>Our Recipes</h1>
      <p className='text-base font-normal text-[#150B2B99]'>Step into a world of culinary delight with our curated selection of recipes, where every dish tells a story of flavor, creativity, and culinary mastery. So try now!</p>
    </div>

    <div className='max-w-7xl m-auto flex flex-col md:flex-row  gap-6 pt-10'>
    <div className='grid grid-col-1 md:grid-cols-2 gap-4 w-full lg:w-3/5'>
      {
        recipes.map((recipie)=>(
        <Recipe key={recipie.recipe_id} recipie={recipie} handlePreparing={handlePreparing}></Recipe>
        ))
      }
      
    </div>
    <div className='w-full lg:w-2/4 border-2 p-5 rounded-xl h-full '>
      
        <Cooking meals={meals} setMeals={setMeals}></Cooking>
    
    </div>
    </div>


    </main>
    </>
  )
}

export default App
