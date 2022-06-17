import styled from "styled-components";

import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Footer from "../src/components/Footer";
import Products from "./components/Products";


const Container = styled.div`
  max-width: 100vw;
`

function App() {

  return (
    <Container>
      {/* <Hero /> */}
      {/* <About /> */}

      <Products />
      {/* <Footer /> */}
    </Container>
  )
}

export default App;
