import "./App.css";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import { Route,Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
// import Post from './Post';
// import PostLayout from "./PostLayout"
function App() {


  return (
    <div className="App">
      <DataProvider>
        <Header title="Social media"  />
        <Nav/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post">
            <Route
              index
              element={
                <NewPost />
              }
            />
            <Route
              path=":id"
              element={<PostPage />}
            />
          </Route>
          <Route
            path="/edit/:id"
            element={
              <EditPost />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
// npx json-server@0.17.4 --watch data/db.json --port 3500
