import { Component } from "@odoo/owl";
import { Layout } from "@web/search/layout";
import { registry } from "@web/core/registry";

class AwesomeDashboard extends Component {
	static template = "awesome_dashboard.AwesomeDashboard";
	static components = { Layout };

	setup() {
		this.display = {
			controlPanel: {}, //disabling the control panel
		};
	}
}

registry
	.category("actions")
	.add("awesome_dashboard.dashboard", AwesomeDashboard);
