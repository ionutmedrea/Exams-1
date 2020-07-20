import React from 'react';
import {Provider} from "react-redux";
import store from "./store/store";
import {
    Route,
    BrowserRouter as Router,
    Switch, Link
} from "react-router-dom";
import Exams from "./containers/ExamsContainer/Exams";
import ExamDetail from "./containers/ExamDetailContainer/ExamDetail";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <div>
                            <ul>
                                <li>
                                    <Link to="/home">
                                        <p>Home</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/exams">
                                        <p>Exams</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/exam/id">
                                        <p>Exam</p>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </Route>
                    <Route exact path="/home">
                        <div>
                            <p>Home Component</p>
                        </div>
                    </Route>
                    <Route exact path="/exams">
                        <div>
                            <Exams/>
                        </div>
                    </Route>
                    <Route exact path="/exam/:id">
                        <div>
                            <ExamDetail/>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
