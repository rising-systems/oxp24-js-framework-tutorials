import { Component } from "@odoo/owl";

export class TodoItem extends Component {
	static template = "awesome_owl.TodoItem";

	static props = {
		todo: { type: Object, optional: false, shape: { id: Number, description: String, isCompleted: Boolean } },
	};

	setup() {
	}
}
