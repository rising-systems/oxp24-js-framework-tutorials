import { Component, useState } from "@odoo/owl";
import { TodoItem } from "./todo_item";
import { useAutofocus } from "./utils";

export class TodoList extends Component {
	static template = "awesome_owl.TodoList";
	static components = { TodoItem };

	static props = {};

	setup() {
		this.todos = useState([]);
		useAutofocus("todo_input");
	}

	addTodo(ev) {
		if (ev.key !== "Enter" || ev.target.value.trim() == "") {
			return;
		}
		this.todos.push({
			id: this.todos.length + 1,
			description: ev.target.value.trim(),
			isCompleted: false,
		});
		ev.target.value = "";
	}

	toggleState(todoId) {
		const todo = this.todos.find((todo) => todo.id === todoId);
		todo.isCompleted = !todo.isCompleted;
	}
}
