import { useState } from "react";
import useHttp from "../../hook/usehttp";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const createdTask = (taskText, data) => {
    // data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: data.name, text: taskText };
    props.onAddTask(createdTask);
  };

  const { error, isLoading, sendRequest } = useHttp();

  const enterTaskHandler = async (taskText) => {
    sendRequest(
      {
        url: "https://fir-frontend-7cedc-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      createdTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
