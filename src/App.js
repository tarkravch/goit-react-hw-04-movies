import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
const HomePage = lazy(() =>
  import("./views/HomePage.js" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage.js" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage.js" /* webpackChunkName: "movie-details-page" */
  )
);

const App = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<h1 className="loading">Loading...</h1>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route component={HomePage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
