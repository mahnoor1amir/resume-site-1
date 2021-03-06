import React from "react"
import Menu from "../components/menu"


export default props => 
<div>
<Menu />
<div style={{ background: "black", color: "white", padding: "2em 3em" }}> 
	<div style={{ float: "left" }}> 
		<h1 style={{ fontSize: "48px" }}>{props.headerText}</h1>
		<h2 style={{ fontSize: "16px" }}>{props.subhead}</h2>
	</div>
	<img style={{ padding: "0 8em" }} src="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg" />
</div>
</div>
