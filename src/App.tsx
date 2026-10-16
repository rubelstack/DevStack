import { Suspense } from "react";
import Cards from "./components/cards/Cards";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
const cardFetch = async () => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
};

function App() {
  const cardPromise = cardFetch();
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Main></Main>
      <Suspense fallback={<div>Loading...</div>}>
        <Cards cardPromise={cardPromise}></Cards>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
