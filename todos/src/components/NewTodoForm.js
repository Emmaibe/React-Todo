import React, { useState } from "react";

const NewTodoForm = (props) => {
  const [assigned, setAssigned] = useState("");
  const [description, setDescription] = useState("");

  const submitTodo = () => {
    if (assigned.trim.length !== 0 && description.trim.length !== 0) {
      props.addTodo(assigned, description);
      setAssigned("");
      setDescription("");
    }
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            type="text"
            onChange={(e) => setAssigned(e.target.value)}
            className="form-control"
            value={assigned}
            required
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            value={description}
            required
          ></textarea>
        </div>
        <button
          type="button"
          onClick={submitTodo}
          className="btn btn-primary mt-3"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
