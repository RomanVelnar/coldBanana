import styled from "styled-components";

import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Products from "../src/components/Products";
import Footer from "../src/components/Footer";
import DisplayProducts from "./components/DisplayProducts";

const Container = styled.div`

`

function App() {

  return (
    <Container>
      <Hero />
      <About />
      <DisplayProducts />
    </Container>
  )
}

export default App;
