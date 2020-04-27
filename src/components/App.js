import React from 'react';
import MainPage from './MainPage';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './style.css';


class App extends React.Component {
  state = {
    data: null,
  }

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render () {
    return (
      <div className="container">
            <Router>
              <div>
                <Switch>
                  <Route exact path="/" component={MainPage} />
                </Switch>
              </div>
          </Router>
      </div>
    )
  }
}

export default App;
