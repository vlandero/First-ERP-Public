import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Footer from "./content/footer/footer";
import Navbar from "./content/navbar/navbar";
import RegisterButton from "./content/register-button"
import './App.css'

import Homepage from "./content/pages/homepage/homepage"
import Avantaje from './content/pages/avantaje/avantaje'


function App() :JSX.Element{
  return (
    <Router>
      <Navbar />
      <div className='reg-butn-fixed'>
          <RegisterButton />
        </div>
      <Switch>
        <Route exact path = '/' component={Homepage} />
        <Route exact path = '/avantaje' component={Avantaje} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
