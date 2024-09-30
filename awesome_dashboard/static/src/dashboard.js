import { Component } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { Layout } from "@web/search/layout";
import { registry } from "@web/core/registry";

class AwesomeDashboard extends Component {
	static template = "awesome_dashboard.AwesomeDashboard";
	static components = { Layout };

	setup() {
		this.display = {
			controlPanel: {}, //disabling the control panel
		};
		this.action = useService("action");
	}

	openSettings() {
		this.action.doAction("base_setup.action_general_configuration");
	}

	openCustomerView() {
		this.action.doAction("base.action_partner_form");
	}
	openLeads() {
		this.action.doAction({
			type: "ir.actions.act_window",
			name: "All leads",
			res_model: "crm.lead",
			views: [
				[false, "list"],
				[false, "form"],
			],
		});
	}
}

registry
	.category("actions")
	.add("awesome_dashboard.dashboard", AwesomeDashboard);
