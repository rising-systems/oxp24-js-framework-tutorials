import { Component, useState } from "@odoo/owl";
import { TodoItem } from "./todo_item";
import { useAutofocus } from "./utils";

export class TodoList extends Component {
	static template = "awesome_owl.TodoList";
	static components = { TodoItem };

	static props = {};

	setup() {
		this.todos = useState([]);
		this.todoSeq = useState({ lastId: 0 });
		useAutofocus("todo_input");
	}

	addTodo(ev) {
		if (ev.key !== "Enter" || ev.target.value.trim() == "") {
			return;
		}
		this.todoSeq.lastId++;
		this.todos.push({
			id: this.todoSeq.lastId,
			description: ev.target.value.trim(),
			isCompleted: false,
		});
		ev.target.value = "";
	}

	toggleState(todoId) {
		const todo = this.todos.find((todo) => todo.id === todoId);
		todo.isCompleted = !todo.isCompleted;
	}

	removeTodo(todoId) {
		const todo = this.todos.find((todo) => todo.id === todoId);
		const index = this.todos.indexOf(todo);
		this.todos.splice(index, 1);
	}
}
