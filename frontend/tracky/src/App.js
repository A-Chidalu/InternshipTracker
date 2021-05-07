import img from './img_man.jpg'
import ham from './hamburger.png'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

function App() {
  return (
    <div  style={{
      background: 'linear-gradient(to bottom, #ffffff, #f6e8fa, #f9cee8, #ffb3c8, #ff9b9b)',
    }}>
      <NavBar img={ham} />


      <div className="min-h-screen max-h-screen max-w-screen-xlg ml-auto mr-auto flex justify-center items-center flex-col lg:flex-row">
       <Hero/>
        <img src={img} alt="A Cool img" className="" />
      </div>
    </div>
  );
}

export default App;
