import img from './img_man.jpg'
import ham from './hamburger.png'
import NavBar from './components/NavBar'
import Hero from './components/Hero';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeroSection from './components/HeroSection';
import Signup from './components/Signup';
import SignupSection from './components/SignupSection';
import NotFoundSection from './components/NotFoundSection';

function App() {
  return (
    <div style={{
      background: 'linear-gradient(to bottom, #ffffff, #f6e8fa, #f9cee8, #ffb3c8, #ff9b9b)',
    }}>
      <BrowserRouter>
        <NavBar img={ham} />
        <Switch>
          <Route path="/signup" exact>
            <SignupSection />
          </Route>
          <Route path="/" exact>
            <HeroSection />
          </Route>
          <Route path="*">
            <NotFoundSection />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
