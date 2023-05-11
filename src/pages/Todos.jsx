import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [allToDos, setAllToDos] = useState([]);

  const handelInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setTodos([{ name: value }]);
  };

  console.log("allToDos", allToDos);

  const handelSubmit = (e) => {
    e.preventDefault();
    setAllToDos([...allToDos, ...todos]);
  };

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  const handelUpdateTodo = (e) => {
    console.log("update i=>", e.target.value);
    console.log("check=>", allToDos.indexOf(e.target.value));
  };

  const handelDeleteToDo = (delName) => {
    const delToDo = allToDos.filter((val) => {
      return val !== delName;
    });
    setAllToDos(delToDo);
  };

  const todoMaps = allToDos.map((val, i) => {
    return (
      <tr key={generateKey(val.name)}>
        <th scope="row">{i + 1}</th>
        <td>{val.name}</td>
        <td>
          <div className="row">
            <div className="col-auto">
              <button
                type="button"
                className="btn btn-xs btn-primary"
                onClick={() => handelUpdateTodo(val.name)}
              >
                Edit
              </button>
            </div>
            <div className="col-auto">
              <button
                type="button"
                className="btn btn-xs btn-danger"
                onClick={() => handelDeleteToDo(val.name)}
              >
                Delete
              </button>
            </div>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h1>ToDos</h1>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <form className="row g-3">
              <div className="col-9">
                <label htmlFor="todoName" className="visually-hidden">
                  TODO Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="todoName"
                  name="todoName"
                  onChange={handelInput}
                  placeholder="Type Here"
                />
              </div>
              <div className="col-3">
                <button
                  type="submit"
                  onClick={handelSubmit}
                  className="btn btn-sm btn-primary mb-3"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-6">
            <table className="table table-bordered border-primary">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>{todoMaps}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
