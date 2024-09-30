import { Component } from "@odoo/owl";

export class TodoItem extends Component {
	static template = "awesome_owl.TodoItem";

	static props = {
		todo: {
			type: Object,
			optional: false,
			shape: { id: Number, description: String, isCompleted: Boolean },
		},
		toggleState: { type: Function, optional: false },
		removeTodo: { type: Function, optional: false },
	};

	onChange() {
		this.props.toggleState(this.props.todo.id);
	}
}
