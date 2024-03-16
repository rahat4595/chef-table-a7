import { useState } from 'react'
import './App.css'
import Cooking from './Cooking'
import Recipe from './Recipe'
import { useEffect } from 'react';


function App() {
  const [recipes, setRecipe] = useState([]);
  const [meals, setMeals] = useState([])

  useEffect(() =>{
    fetch('recipe.json')
    .then(res => res.json())
    .then(data => setRecipe(data))
  },[]);

  const handlePreparing = (p) =>{
    const newMeals = [...meals, p];
    setMeals(newMeals)
    
  }

  return (
    <>
      
     <nav className='max-w-7xl m-auto hidden lg:block'>
     <div className="navbar bg-base-100">
  <div className="flex-1 ">
    <a className="btn btn-ghost text-3xl">Recipe Calories</a>
  </div>
  <div className='w-[42%]'>
    <ul className='flex gap-6'>
      <li>Home</li>
      <li>Recipes</li>
      <li>About</li>
      <li>Search</li>
    </ul>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
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
    <main>
    <div>
    <div className="hero max-w-7xl m-auto h-[600px] rounded-2xl" style={{ backgroundImage: "url('https://i.ibb.co/S0JsSxd/banner.png')"}}>
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-4/5">
          <h1 className="mb-5 text-5xl text-white font-bold ">Discover an exceptional cooking class tailored for you!</h1>
          <p className="mb-5 ">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer</p>
          <div className='flex gap-10 justify-center'>
          <button className="btn bg-[#0BE58A] text-sm rounded-full px-8 border-none">Explore Now</button>
          <button className="btn bg-transparent text-white text-sm rounded-full px-8 ">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div className='max-w-4xl m-auto text-center pt-20'>
      <h1 className='text-4xl mb-8'>Our Recipes</h1>
      <p className='text-base'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.</p>
    </div>

    <div className='max-w-7xl m-auto flex gap-10 pt-10'>
    <div className='grid  grid-cols-2 gap-4 w-3/5'>
      {
        recipes.map((recipie)=>(
        <Recipe key={recipie.recipe_id} recipie={recipie} handlePreparing={handlePreparing}></Recipe>
        ))
      }
      
    </div>
    <div className='w-2/4'>
      
        <Cooking meals={meals}></Cooking>
    
    </div>
    </div>


    </main>
    </>
  )
}

export default App
