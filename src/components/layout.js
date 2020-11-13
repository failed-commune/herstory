import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import "./layout.css"
import "../styles/global.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Header siteTitle={`나와 닮은 위인 찾기`} /> */}
      <div
        style={{
          margin: `2rem auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{
          
          marginTop: `2rem`,
        }}>
          {' by '} 
          <a href=""> Jam & Bread</a>
          <br></br>
          {'powered by '}
          <a href="https://github.com/failed-commune">Hanseul</a>
          <br></br>
          © {new Date().getFullYear()} 
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
