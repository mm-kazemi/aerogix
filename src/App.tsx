import "./App.css";
import {Header} from "./components/Header/Header.tsx";
import Hero from "./components/Hero/hero.tsx";

function App() {
  return (
    <>
        <Header />
      <main className="App"><Hero/></main>
      <footer></footer>
    </>
  );
}

export default App;
