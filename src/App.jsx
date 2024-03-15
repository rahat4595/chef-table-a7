import './App.css'

function App() {
  

  return (
    <>
      
     <nav className='max-w-7xl m-auto'>
     <div className="navbar bg-base-100">
  <div className="flex-1 ">
    <a className="btn btn-ghost text-3xl">Recipe Calories</a>
  </div>
  <div className='w-[42%]'>
    <ul className='flex gap-6'>
      <li>Home</li>
      <li>About</li>
      <li>Recipe</li>
      <li>Contact</li>
    </ul>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
  </div>
      </div>
     </nav>
    <main>
    <div>
    <div className="hero max-w-7xl m-auto h-[600px] rounded-2xl" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
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
    </main>
    </>
  )
}

export default App
