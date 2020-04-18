import React from "react"
import { Link } from "gatsby"


export default props => 
<div className="menu">
    <header>
      <ul>
        <Link to="/">Home</Link>
		<Link to="/projects/">Projects</Link>
		<Link to="/contact">Contact</Link>
      </ul>
    </header>

</div>
