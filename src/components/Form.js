import React, { useState } from "react";
import APIService from "./APIService";

function Form(props) {
  const [title, setTitle] = useState(props.editArticle.title);
  const [description, setDescription] = useState(props.editArticle.description);

  const updateArticle = () => {
    APIService.UpdateArticle(props.editArticle.id, { title, description }).then(
      (resp) => console.log(resp)
    );
  };

  return (
    <div>
      {props.editArticle ? (
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            className="form-control"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            value={description}
            className="form-control"
            id="description"
            rows={5}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
          <button onClick={updateArticle} className="btn btn-success m-2">
            Update Article
          </button>
          <button className="btn btn-secondary">Cancel</button>
        </div>
      ) : null}
    </div>
  );
}

export default Form;
