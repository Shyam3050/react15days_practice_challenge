import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hook/usehttp";

function App() {
  const { error, isLoading, sendRequest } = useHttp();

  const [tasks, setTasks] = useState([]);

  const fetchedTasks = (tasksObj) => {
    const tasks = [];
    for (const taskKey in tasksObj) {
      tasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(tasks);
  };

  useEffect(() => {
    sendRequest(
      {
        url: "https://fir-frontend-7cedc-default-rtdb.firebaseio.com/tasks.json",
      },
      fetchedTasks
    );
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => [task, ...prevTasks]);
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
