export default class APIService {
  static UpdateArticle(article_id, body) {
    return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 4e3581a185c56181e912b746f89f2ef9fec5c043",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }
}
