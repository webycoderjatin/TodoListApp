import Navbar from './Components/Navbar';
import Form from './Form';
import { Route, Routes , BrowserRouter as Router} from 'react-router-dom';
import ToDos from './Components/ToDos';



function App() {

  return(
       <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="todos" element={<ToDos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
