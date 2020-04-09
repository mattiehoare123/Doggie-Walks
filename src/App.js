import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { home } from './home';
import { about_us } from './about_us';
import { meet_the_team } from './meet_the_team';
import { services_and_cost } from './services_and_cost';
import { gallery } from './gallery';
import { contact } from './contact';


function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
          <Route path="/" exact component={home}/>
          <Route path="/about_us" exact component={about_us}/>
          <Route path="/meet_the_team" exact component={meet_the_team}/>
          <Route path="/services_and_cost" exact component={services_and_cost}/>
          <Route path="/gallery" exact component={gallery}/>
          <Route path="/contact" exact component={contact}/>
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
