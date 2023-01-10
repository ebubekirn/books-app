import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import BookList from "./components/BookList"
import BookRecyled from "./components/BookRecyled"
import BookFirstHand from "./components/BookFirstHand"
import BookCreate from "./components/BookCreate"
import BookUpdate from "./components/BookUpdate"
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/book/recyled" element={<BookRecyled />} />
          <Route path="/book/firsthand" element={<BookFirstHand />} />
          <Route path="/book/all" element={<BookList />} />
          <Route path="/book/create" element={<BookCreate />} />
          <Route path="/book/update/:id" element={<BookUpdate />} />
          <Route path="/book/update/" element={<BookUpdate />} />
          <Route path="/auth/login/" element={<Login />} />
          <Route path="/auth/logout/" element={<Logout />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
