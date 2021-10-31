import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
    <SEO title="Error" />
      <main className="error-page">
        <section>
          <h1>That's a 404</h1>
          {/* <h3>(aka) page not found :(</h3> */}

          <p>You aren't trying to do anything malicious, right? ( ͡° ͜ʖ ͡°)</p>
        </section>
      </main>
    </Layout>
  )
}

export default Error
