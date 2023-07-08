import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { cardsData } from "./CardsData";
import CardList from "./CardList";

const Cards = () => {
  // for not started
  const [notStartedTodos, setNotStartedTodos] = useState(
    cardsData.filter((todo) => todo.status === "not started")
  );

  // for started
  const [startedTodos, setStartedTodos] = useState(
    cardsData.filter((todo) => todo.status === "started")
  );

  // for complete
  const [completedTodos, setCompletedTodos] = useState(
    cardsData.filter((todo) => todo.status === "completed")
  );

  // find the todo while dragging
  const findTodoById = (id, array) => {
    return array.find((todo) => todo.id === id);
  };

  // find the todo for dropping
  const removeTodoById = (id, array) => {
    return array.filter((todo) => todo.id !== id);
  };

  // handle dropping data
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let updatedNotStartedTodos = [...notStartedTodos];
    let updatedStartedTodos = [...startedTodos];
    let updatedCompletedTodos = [...completedTodos];

    const todo = findTodoById(draggableId, [
      ...notStartedTodos,
      ...startedTodos,
      ...completedTodos,
    ]);

    if (source.droppableId === "1") {
      updatedNotStartedTodos = removeTodoById(
        draggableId,
        updatedNotStartedTodos
      );
    } else if (source.droppableId === "2") {
      updatedStartedTodos = removeTodoById(draggableId, updatedStartedTodos);
    } else {
      updatedCompletedTodos = removeTodoById(
        draggableId,
        updatedCompletedTodos
      );
    }

    if (destination.droppableId === "1") {
      updatedNotStartedTodos.splice(destination.index, 0, {
        ...todo,
        status: "not started",
      });
    } else if (destination.droppableId === "2") {
      updatedStartedTodos.splice(destination.index, 0, {
        ...todo,
        status: "started",
      });
    } else {
      updatedCompletedTodos.splice(destination.index, 0, {
        ...todo,
        status: "completed",
      });
    }

    setNotStartedTodos(updatedNotStartedTodos);
    setStartedTodos(updatedStartedTodos);
    setCompletedTodos(updatedCompletedTodos);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="mt-10 grid grid-flow-row auto-cols-fr lg:grid-flow-col gap-[15px]">
        <CardList todoList={notStartedTodos} type="not-started" id={"1"} />
        <CardList todoList={startedTodos} type="started" id={"2"} />
        <CardList todoList={completedTodos} type="completed" id={"3"} />
      </div>
    </DragDropContext>
  );
};

export default Cards;
