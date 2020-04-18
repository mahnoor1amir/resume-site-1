import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Footer from "../components/footer"

export default () => (
	<div>
    <Header headerText="Contact"/>   

	<Layout>
    <h1>I'd love to talk! Email me at the address below</h1>
    <p>
      <a href="mailto:me@example.com">me@example.com</a>
    </p>
    </Layout>
    </div>
)