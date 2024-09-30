import { Component, useState, useRef, onMounted } from "@odoo/owl";
import { TodoItem } from "./todo-item";

export class TodoList extends Component {
  static template = "awesome_owl.todo.todo-list";
  static components = { TodoItem };

  setup() {
    this.todos = useState([]);
    this.invalidInput = useState({ value: false });
    this.todoInput = useRef("todoInput");
    this.newTodoItem = { value: "" };

    // Alternative to useAutoFocus
    onMounted(() => {
      this.watchInput();
      this.todoInput.el.focus();
    });
  }

  toggleTodo(todoId) {
    const todo = this.todos.find((todo) => todo.id === todoId);
    if (todo) {
      todo.isCompleted = !todo.isCompleted;
    }
  }

  watchInput() {
    // Watch the input field for changes
    this.todoInput.el.addEventListener("input", (ev) => {
      // add class "dirty"
      ev.target.classList.toggle("dirty", !!ev.target.value);
      // remove class "is-invalid"
      ev.target.classList.remove("is-invalid");
    });
  }

  // Add item to the list
  addTodo(newItem) {
    if (!newItem) {
      // add class "is-invalid"
      this.todoInput.el.classList.add("is-invalid");
      this.invalidInput.value = true;
      return;
    }
    this.todos.push({
      id: this.todos.length + 1,
      description: newItem,
      isCompleted: false,
    });

    this.newTodoItem.value = "";
    this.todoInput.el.value = "";
  }

  addTodoOnEnter(ev) {
    if (ev.key === "Enter" && ev.target.value) {
      this.addTodo(ev.target.value);
    }
  }

  addTodoItem() {
    this.addTodo(this.newTodoItem.value);
  }
}
