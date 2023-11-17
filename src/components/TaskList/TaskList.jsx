import { useState, useEffect } from "react";
import "./index.scss";
import { FaEdit, FaWindowClose, FaPlusSquare } from "react-icons/fa";
import Modal from "../Modal/Modal";

const TaskList = ({ database }) => {
  console.log(database);

  const [modalDetail, setModalDetail] = useState({
    isOpen: false,
    title: "",
    description: "",
  });

  const [novaTask, setNovaTask] = useState("");
  console.log(novaTask);

  // const addTask = (e) => {
  //   e.preventDefault();
  //   input.trim(input);

  //   if (tasks.indexOf(input) !== -1 || input === "") return;

  //   const newTask = {
  //     id: tasks.length + 1,
  //     title: input,
  //     description: "Descrição da tarefa",
  //     completed: tasks.completed,
  //   };

  //   const updatedTasks = [...tasks, newTask];
  //   setTasks(updatedTasks);
  //   setInput("");

  // };

  return (
    <section className="Home">
      <h1>Organize seu tempo e se organize com o nosso Planejador Diário.</h1>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Status</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {database.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>
                  <input type="checkbox" name="taskCompleted" id="" />
                </td>
                <td>
                  <FaEdit size={20} id="btnEdit"
                    onClick={() =>
                      setModalDetail({
                        isOpen: true,
                        title: "Tem certeza que deseja editar essa tarefa?",
                        description: task.description,
                      })
                    }
                  />
                  <FaWindowClose size={20} id="btnClose"
                    onClick={() =>
                      setModalDetail({
                        isOpen: true,
                        title: "Tem certeza que deseja excluir essa tarefa?",
                        description: task.description,
                      })
                    }
                  />
                </td>
              </tr>
            ))}
            {modalDetail.isOpen && (
              <Modal
                isOpen={modalDetail.isOpen}
                isClose={() =>
                  setModalDetail({ ...modalDetail, isOpen: false })
                }
                title={modalDetail.title}
                description={modalDetail.description}
              />
            )}
          </tbody>
        </table>
        <div className="task__input">
          <input
            onChange={(e) => setNovaTask(e.target.value)}
            type="text"
            placeholder="Adicionar tarefa"
          />
          <FaPlusSquare
            onClick={() =>
              setModalDetail({
                isOpen: true,
                title: "Tem certeza que deseja adicionar essa tarefa?",
                description: novaTask,
              })
            }
            size={40}
          />
          {modalDetail.isOpen && (
            <Modal
              isOpen={modalDetail.isOpen}
              isClose={() => setModalDetail({ ...modalDetail, isOpen: false })}
              title={modalDetail.title}
              description={modalDetail.description}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskList;
