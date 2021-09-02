import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import "./styles/themes.scss";

//layout
import Layout from "./components/layouts";

//pages
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Admin from "./components/pages/Admin";
import Books from "./components/pages/Books";
import Monitor from "./components/pages/Monitor";
import PageNotFound from "./components/pages/PageNotFound";
import ForgotPassword from "./components/pages/ForgotPassword";

function App(props) {
  let { isSignedIn } = props;
  return (
    <Router>
      <Switch>
        {isSignedIn ? null : <Route path='/' exact render={() => <Login />} />}
        {isSignedIn ? null : <Route path='/signup' exact render={() => <SignUp />} />}
        {isSignedIn ? null : <Route path='/forgot_password' exact render={() => <ForgotPassword/>}/>}
        {isSignedIn ? (
          <Route
            path='/'
            exact
            render={() => (
              <Layout>
                <Books />
              </Layout>
            )}
          />
        ) : (
          <Redirect to='/' />
        )}
        {isSignedIn ? (
          <Route
            path='/monitors'
            exact
            render={() => (
              <Layout>
                <Monitor />
              </Layout>
            )}
          />
        ) : null}
        {isSignedIn ? (
          <Route
            path='/admin'
            exact
            render={() => (
              <Layout>
                <Admin />
              </Layout>
            )}
          />
        ) : null}
        <Route path='*' component={() => <PageNotFound />} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, null)(App);
