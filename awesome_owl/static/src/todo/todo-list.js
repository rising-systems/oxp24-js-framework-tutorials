import { Component, useState } from "@odoo/owl";
import { TodoItem } from "./todo-item";

export class TodoList extends Component {
  static template = "awesome_owl.todo.todo-list";
  static components = { TodoItem };

  setup() {
    this.todos = useState([]);
    //   { id: 1, description: "buy milk", isCompleted: false },
    //   { id: 2, description: "buy eggs", isCompleted: true },
    //   { id: 3, description: "buy bread", isCompleted: false },
  }

  // Add item to the list
  addTodo(ev) {
    this.todos.push({
      id: this.todos.length + 1,
      description: ev.target.value,
      isCompleted: false,
    });
    ev.target.value = "";
  }

  addTodoOnEnter(ev) {
    if (ev.key === "Enter" && ev.target.value) {
      this.addTodo(ev);
    }
  }
}
