import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGigsRequest } from "./actions/gigActions";
import { RootState } from "./reducers/rootReducer";
import "./App.css";
import Layout from "./Components/Layout";
import { Switch, Redirect, Route } from "react-router-dom";

import { menu } from "./constants/asidedata";
import NewGig from "./pages/NewGig";

function App() {
  const dispatch = useDispatch();
  const { pending, error } = useSelector((state: RootState) => state.gigs);

  useEffect(() => {
    dispatch(fetchGigsRequest());
  }, [dispatch]);
  return (
    <div className="App">
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div> Error </div>
      ) : (
        <Layout>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/gigs" />} />
            {menu?.map(({ name, link, Tag }, index) => (
              <Route exact path={link} component={() => <Tag titleName={name} />} />
            ))}
            <Route exact path="/gigs/create-gig" component={()=><NewGig titleName="Gigs"/>} />
          </Switch>
        </Layout>
      )}
    </div>
  );
}

export default App;
