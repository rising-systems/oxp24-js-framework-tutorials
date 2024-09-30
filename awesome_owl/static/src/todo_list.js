import { Component, useState, useRef, onMounted } from "@odoo/owl";
import { TodoItem } from "./todo_item";

export class TodoList extends Component {
	static template = "awesome_owl.TodoList";
	static components = { TodoItem };

	static props = {};

	setup() {
		this.todos = useState([]);
		this.todo_input = useRef("todo_input");
		onMounted(() => {
			// use the reference we added on the XML + set up so that we can identify the exact element after it's actually mounted on the DOM so that we can run JS code on it
			// let's focus the input field once the component is mounted
			this.todo_input.el.focus();
		});
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
}
