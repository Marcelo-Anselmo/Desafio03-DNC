import { useState, useEffect } from "react";
import "./index.scss";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import Modal from "../Modal/Modal";

const TaskList = () => {
  const db = [
    {
      id: 1,
      title: "Exercicios",
      description: "Ir para academia fazer exercicios",
      completed: true,
    },
    {
      id: 2,
      title: "Limpar o carro",
      description: "Limpar o carro inteiro, de dentro pra fora",
      completed: false,
    },
    {
      id: 3,
      title: "Banho e tosa",
      description: "Levar o cachorro ao pet shop",
      completed: false,
    },
    {
      id: 4,
      title: "Limpar quarto",
      description: "Limpar toda bagunça que está dentro do quarto",
      completed: true,
    },
    {
      id: 5,
      title: "trabalhar",
      description: "Chegar ao escritorio antes das 20:00",
      completed: true,
    },
    {
      id: 6,
      title: "Ir ao banco",
      description: "Chear ao banco antes das 10:00",
      completed: false,
    },
    {
      id: 7,
      title: "Almoçar",
      description: "Preparar a comida para a janta",
      completed: false,
    },
    {
      id: 8,
      title: "Jogar volei",
      description: "Ir a quadra para jogar volei com os amigos",
      completed: true,
    },
    {
      id: 9,
      title: "Estudar programação",
      description: "Entrar na plataforma dos alunos para estudar",
      completed: false,
    },
    {
      id: 10,
      title: "shopping",
      description: "Fazer algumas compras no shopping",
      completed: true,
    },
  ];

  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(db);

  useEffect(() => {
    // Verifique se há dados no localStorage ao carregar a página
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    } else {
      setTasks(db);
    }
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    input.trim(input);

    if (tasks.indexOf(input) !== -1 || input === "") return;

    const newTask = {
      id: tasks.length + 1,
      title: input,
      description: "Descrição da tarefa",
      completed: tasks.completed,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setInput("");

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleEdit = (e, index) => {
    setOpen(true);
  };

  const handleDelete = (e, index) => {
    setOpen(true)
    if(btnConfirmDel === true){
      console.log("Deletando...");
    }
    const novasTasks = [...tasks];
    novasTasks.splice(index, 1);

    setTasks([...novasTasks]);

    localStorage.setItem("tasks", JSON.stringify(novasTasks));
  };

  const handleConfirmEdit = () => {
    console.log("Amigo estou aqui!");
  }

  const handleConfirmDel = () => {
    setOpen(false);
    
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <section className="Home">
      <h1>Organize seu tempo e se organize com o nosso Planejador Diário.</h1>
      <div id="container">
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Status</th>
              <th>Opções</th>
            </tr>
            <hr />
          </thead>
          <tbody>
            {tasks.map((tasks, index) => (
              <tr key={index}>
                <td>{tasks.title}</td>
                <td>
                  {" "}
                  <input
                    type="checkbox"
                    name="taskCompleted"
                    value={tasks.completed}
                    checked={tasks.completed}
                  />
                </td>
                <td>
                  <FaEdit
                    onClick={(e) => handleEdit(e, index)}
                    className="edit"
                  />
                  <FaWindowClose
                    onClick={(e) => handleDelete(e, index, open)}
                    className="delete"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form onSubmit={addTask} className="tasks__form">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Adicione uma tarefa"
            value={input}
            name="text"
            className="tasks__input"
          />
          <button type="submit" className="tasks__button">
            Add
          </button>
        </form>
      </div>
      <Modal
        isOpen={open}
        setOpen={setOpen}
        title={"Você deseja editar essa tarefa?"}
        description={"description"}
        btnConfirmEdit={handleConfirmEdit}
        btnConfirmDel={true}
        btnCancel={handleCancel}
      />
      ;
    </section>
  );
};

export default TaskList;
