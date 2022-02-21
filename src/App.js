import Navbar from "./components/Navbar";
import data from "./data.js";
import Card from "./components/Card";
import "./App.css";

export default function App() {
  const locations = data.map((location) => {
    return <Card key={location.id} {...location} />;
  });
  return (
    <div className="App">
      <Navbar />
      <div className="card-body">{locations}</div>
    </div>
  );
}
