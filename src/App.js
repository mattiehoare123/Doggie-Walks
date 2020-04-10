import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { home } from './home';
import { about_us } from './about_us';
import { meet_the_team } from './meet_the_team';
import { services_and_cost } from './services_and_cost';
import { gallery } from './gallery';
import { contact } from './contact';
import { Navigation } from './components/Navigation';
import { MobileNavigation } from './components/MobileNavigation';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

function App(props) {
  return (
      <React.Fragment>
        <BrowserRouter>
          <Navigation/>
          <Route path="/home" exact component={home}/>
          <Route path="/about_us" exact component={about_us}/>
          <Route path="/meet_the_team" exact component={meet_the_team}/>
          <Route path="/services_and_cost" exact component={services_and_cost}/>
          <Route path="/gallery" exact component={gallery}/>
          <Route path="/contact" exact component={contact}/>
          <MobileNavigation/>
        </BrowserRouter>
        <Footer/>

      </React.Fragment>
  );
}

export default App;
