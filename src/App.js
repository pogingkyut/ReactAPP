import { useState, useEffect } from "react";
import "./App.css";
import ArticleList from "./components/ArticleList";
import Form from "./components/Form";

function App() {
  const [articles, setArticles] = useState([]);
  const [editArticle, setEditArticle] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 4e3581a185c56181e912b746f89f2ef9fec5c043",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setArticles(resp))
      .catch((error) => console.log(error));
  }, []);

  const editBtn = (article) => {
    setEditArticle(article);
  };

  return (
    <div className="App">
      <h1>Django-React App</h1>
      <ArticleList articles={articles} editBtn={editBtn} />
      {editArticle ? <Form editArticle={editArticle} /> : null}
    </div>
  );
}

export default App;
