import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const title = "Welcome to the new blog";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        <p>Posted by Mario on 10th August 2021</p>
        <a href="/">Read more...</a>
        <button className="button is-primary mt-4">Bulma Button</button>
      </div>
    </div>
  );
}

export default App;
