import "./App.css";
import AppHeader from "./components/AppHeader";
import Description from "./components/Description";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  return (
    <section className="app-wrapper">
      <AppHeader />
      <Description />
      <PasswordGenerator />
    </section>
  );
}

export default App;
