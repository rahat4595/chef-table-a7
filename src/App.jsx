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
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    </div>
    </main>
    </>
  )
}

export default App
