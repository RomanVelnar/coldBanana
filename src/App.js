import styled from "styled-components";

import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Footer from "../src/components/Footer";
import DisplayProducts from "./components/DisplayProducts";
import FetchProductData from "./components/FetchProductData";


const Container = styled.div`
  max-width: 100vw;
`

function App() {

  return (
    <Container>
      <Hero />
      <About />
      <FetchProductData />
      {/* <DisplayProducts /> */}
      <Footer />
    </Container>
  )
}

export default App;
