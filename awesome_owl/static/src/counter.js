import { Component, useState } from "@odoo/owl";

export class Counter extends Component {
	static template = "awesome_owl.Counter";

	static props = {
		onChange: { type: Function, optional: true },
		increment: { type: Number, optional: true },
	};
	static defaultProps = {
		increment: 1,
	};

	setup() {
		this.state = useState({ value: 0 });
	}

	increment() {
		this.state.value += this.props.increment;
		if (this.props.onChange) this.props.onChange(this.props.increment);
	}
}
