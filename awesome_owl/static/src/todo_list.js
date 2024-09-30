import { Component, useState } from "@odoo/owl";
import { TodoItem } from "./todo_item";

export class TodoList extends Component {
	static template = "awesome_owl.TodoList";
	static components = { TodoItem };

	static props = {};

	setup() {
		this.todos = useState([
			{ id: 1, description: "test 1", isCompleted: false },
			{ id: 2, description: "test 2", isCompleted: false },
			{ id: 3, description: "test 3", isCompleted: false },
		]);
	}
}
