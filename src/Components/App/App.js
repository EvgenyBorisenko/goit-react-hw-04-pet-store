import React, { lazy, Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Nav from '../Nav';
import '../PageAnimations/switch.css';
import { bounceTransition, mapStyles } from '../PageAnimations/pageAnimation';

const AsyncHome = lazy(() =>
  import('../../Pages/Home' /* webpackChunkName: "home-page" */),
);
const AsyncPetPage = lazy(() =>
  import('../../Pages/PetPage' /* webpackChunkName: "Pet-page" */),
);
const AsyncPets = lazy(() =>
  import('../../Pages/Pets' /* webpackChunkName: "Pets-page" */),
);
const AsyncAbout = lazy(() =>
  import('../../Pages/About' /* webpackChunkName: "About-page" */),
);

const App = () => (
  <>
    <Nav />
    <Suspense fallback={() => <div>Loading...</div>}>
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="switch-wrapper"
      >
        <Route path="/" exact component={AsyncHome} />
        <Route path="/Pets/:id" component={AsyncPetPage} />
        <Route path="/Pets" component={AsyncPets} />
        <Route path="/about" component={AsyncAbout} />
        <Redirect to="/" />
      </AnimatedSwitch>
    </Suspense>
  </>
);

export default App;
