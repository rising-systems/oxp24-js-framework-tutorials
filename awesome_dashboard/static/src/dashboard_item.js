import { Component } from "@odoo/owl";

export class DashboardItem extends Component {
	static template = "awesome_dashboard.DashboardItem";
	static props = {
		slots: { type: Object, optional: false, shape: { default: Object } },
		size: { type: Number, optional: true },
	};
	static defaultProps = {
		size: 1,
	};

	setup() {}

	// get cardWidth() {
	// 	const _width = 18 * this.props.size;
	// 	return `width: ${_width}rem;`;
	// }
}
