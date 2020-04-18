import React from "react"
import containerStyles from "./container.module.css"

export default props => 
<div className={containerStyles.container}>
	<img src={props.imgPath} alt="alt" />
    <div className="description">
	    <h1>{props.head}</h1>
	    <p>{props.subhead}</p>
    </div>
</div>
