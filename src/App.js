import styled from "styled-components";

import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Products from "../src/components/Products";
import Footer from "../src/components/Footer";

const Container = styled.div`
  width: 100%;
  height: 100%;
`

function App() {

  return (
    <Container>
      <Hero />
      <About />
    </Container>
  )
}

export default App;
