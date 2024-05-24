import { VStack, Text } from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
    const todosList = [
        { id: 1, text: "Buy eggs" },
        { id: 2, text: "Walk the dog" },
        { id: 3, text: "Watch a movie" },
    ];

    const [todos, setTodos] = useState(todosList);

    function deleteTodo(id) {
        // IMPLEMENT DELETE TODO
        const temp = todos.filter((todo) => todo.id !== id);
        setTodos(temp);
    }

    function addTodo(newTodo) {
        // IMPLEMENT ADD TODOS
        const temp = [...todos, newTodo];
        setTodos(temp);
    }

    function editTodo(id, updatedTodo) {
        // IMPLEMENT EDIT TODO
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? updatedTodo : todo
        );
        setTodos(updatedTodos);
    }

    return (
        <VStack p={5}>
            <Text
                bgGradient="red"
                bgClip="text"
                fontSize="6xl"
                fontWeight="extrabold"
            >
                Todo App
            </Text>
            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
            />
            <AddTodo addTodo={addTodo} />
        </VStack>
    );
}

export default App;
