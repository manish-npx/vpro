import { useState } from "react";
//import StarRating from "./StarRating";

const ToDo = () => {
  const [toDos, setToDos] = useState({});
  const [allToDos, setAllToDo] = useState([]);
  const [updateToDos, setUpdateToDos] = useState("");

  const handelInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setToDos({ ...toDos, name: value });
  };

  const handelSubmitTodo = (e) => {
    e.preventDefault();

    setAllToDo([...allToDos, toDos]);
    // console.log('toDos', toDos);
  };
  const handelEditToDos = (upName) => {
    console.log("updateToDos", updateToDos);
    setUpdateToDos(upName);
  };

  const handelDeleteToDos = (delname) => {
    let delteArr = allToDos.filter((vl) => vl.name !== delname);
    setAllToDo(delteArr);
  };

  // <ToDoInput val={val} i={i} key={i} />

  const displayToDo = allToDos && allToDos.map((val, i) => {
    return (
      <>
        <tr key={val.toString()}>
          <th scope="row">{i + 1}</th>
          <td>{val.name}</td>
          <td>
            <div className="row">
              <div className="col-2">
                <button
                  className="btn btn-sm btn-primary mr-3"
                  onClick={() => handelEditToDos(val.name)}
                >
                  Edit
                </button>
              </div>
              <div className="col-2">
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handelDeleteToDos(val.name)}
                >
                  Delete
                </button>
              </div>
            </div>
          </td>
        </tr>
      </>
    );
  });

  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <div className="row">
          <div className="col-3">
            <input
              type="text"
              name="todoInput"
              id="todoInput"
              value={toDos.name || ""}
              onChange={handelInput}
              className="form-control"
              placeholder="Type Here"
              aria-label="Type Here"
            />
          </div>

          <div className="col-1">
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={handelSubmitTodo}
            >
              Submit
            </button>
          </div>

          <div className="col">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ToDo</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>{displayToDo}</tbody>
            </table>
          </div>
        </div>
        {/*  <div className="row">
                    <div className="col-3">
                        <input type="text" name='updatetodoInput' id='updatetodoInput' value={updateToDos} onChange={handelInput}
                            className="form-control" placeholder="Type Here" aria-label="Type Here" />
                    </div>
                    <div className="col-1">
                        <button type="button" className='btn btn-sm btn-primary' onClick={handelSubmitTodo}>Submit</button>
                    </div>
                </div> */}
        {/*   <StarRating totalStar={5} /> */}
      </div>
    </>
  );
};

export default ToDo;
