import React from "react"
import Header from "../components/header"
import Container from "../components/container"

export default () => (
  <div style={{ color: `teal` }}>
  	<Header headerText="Projects"/>   

	<h2>Projects</h2>

	<Container>
		<img src="https://source.unsplash.com/random/400x200" alt="" />

	    <h1>A Great Project</h1>
	    <p>CSS Modules are cool</p>
	</Container>
	<Container>
		<img src="https://source.unsplash.com/random/400x200" alt="" />

	    <h1>Another Super Amazing Project</h1>
	    <p>CSS Modules are cool</p>
	</Container>  
	<Container>
		<img src="https://source.unsplash.com/random/400x200" alt="" />

	    <h1>Showstopping Project</h1>
	    <p>CSS Modules are cool</p>
	</Container>


  </div>


)