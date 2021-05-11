import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Demo from './Demo'
// import User from './User'
// import Counter from './Counter'

export default function App() {
  return (
    // <div>
    //   {/* <Counter/> */}
    // </div>
    // <div>
    //   <Router>
    //     <h1>Users</h1>
    //     <ul>
    //       <li><Link to='/users/github'>Github</Link></li>
    //       <li><Link to='/users/facebook'>Facebook</Link></li>
    //     </ul>
    //     <Switch>
    //       <Route path="/users/:userId">
    //         <User/>
    //       </Route>
    //       <Route path="/"><span>Select user</span></Route>
    //     </Switch>
    //   </Router>

    // </div>
    <div>
      <Demo/>
    </div>
  )
}

