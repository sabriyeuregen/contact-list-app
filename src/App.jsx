import ContactList from "./components/ContactList/ContactList";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
const App = () => {
  return (
    <div>
      <Header />
      <Sidebar/>
      <ContactList/>
    </div>
  );
};

export default App;
