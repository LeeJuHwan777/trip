import './App.css';
import Header from "./header/Header";
import Inputfild from "./inputfild/inputFild";
import TotalCount from "./totalcount/TotalCount";
import PostList from "./postList/PostList";
import Nolist from "./postList/Nolist";
import { useState } from 'react';

// import Nolist from "./postList/Nolist";

function App() {
  // const data = [
  //   "두산위브",
  //   "벽산아파트",
  //   "업스퀘어",
  // ];

  const data = JSON.parse(localStorage.getItem("tripsLists")) || [];
  let [lists, setList] = useState(data);

  return (
    <>
      <Header />
      <Inputfild setList={setList}/>
      <TotalCount lists={lists}/>
      { lists.length === 0 ? <Nolist /> : <PostList lists={lists} setList={setList} /> }
    </>
  );
}

export default App;