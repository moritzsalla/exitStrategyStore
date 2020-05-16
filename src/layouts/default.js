import React from "react"
import PropTypes from "prop-types"

import "reset-css"
import Nav from "../components/nav"
import Footer from "../components/footer"
import styled from "styled-components"

import { createGlobalStyle } from "styled-components"
import {
  Black,
  White,
  Orange,
  StrokeWeight,
  Mobile,
  BorderRadius,
} from "../components/variables"

import "./default.css"

const GlobalStyle = createGlobalStyle`
* {
  /* user-select: none; */
  box-sizing: border-box;
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "kern";
}

::selection {
  background: ${Orange};
  color: ${Black};
}

html {
  background: ${White};
    font-family: Suisse, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

th {
  text-align: left;
  text-transform: uppercase;
}

td {
  padding-right: 2rem;
}

hr {
  margin: 1.5rem 0;
  border-top: ${StrokeWeight} solid ${Orange};
  border-bottom: none;
  border-left: none;
  border-right: none;
}

input {
  color: ${Orange};
  border: ${StrokeWeight} solid ${Orange};
  border-radius: ${BorderRadius};
  padding: 0.5rem;
  text-align: center;
  outline: none;
  font-size: 1rem;
  background: none;
  font-weight: bold;
}

@media (max-width: ${Mobile}) {
  hr {
    margin: 0.5rem 0;
  }
}
`

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  background: ${White};
`

const Padding = styled.div`
  padding: 10rem 4vw;

  @media (max-width: ${Mobile}) {
    padding: 10rem 1rem;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Nav />
        <Padding>
          <main>{children}</main>
        </Padding>
        <Footer />
        <GlobalStyle />
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
