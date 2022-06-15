import styled from "styled-components";

import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Footer from "../src/components/Footer";
import DisplayProducts from "./components/DisplayProducts";
import FetchProductData from "./components/FetchProductData";

const Container = styled.div`

`

function App() {

  return (
    <Container>
      {/* <Hero /> */}
      {/* <About /> */}
      <FetchProductData />
    </Container>
  )
}

export default App;
