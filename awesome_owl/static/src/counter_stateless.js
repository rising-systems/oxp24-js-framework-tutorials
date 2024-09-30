import { Component } from "@odoo/owl";

export class CounterStateless extends Component {
	static template = "awesome_owl.CounterStateless";

	static props = {
		value: { type: Number, optional: false },
		onChange: { type: Function, optional: true },
	};

	setup() {}

	increment() {
		if (this.props.onChange) this.props.onChange();
	}
}
