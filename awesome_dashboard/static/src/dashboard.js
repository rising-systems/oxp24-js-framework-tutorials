import { Component, onWillStart, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { Layout } from "@web/search/layout";
import { registry } from "@web/core/registry";
import { DashboardItem } from "./dashboard_item";
import { PieChart } from "./pie_chart";

class AwesomeDashboard extends Component {
	static template = "awesome_dashboard.AwesomeDashboard";
	static components = { Layout, DashboardItem, PieChart };

	setup() {
		this.display = {
			controlPanel: {}, //disabling the control panel
		};
		this.action = useService("action");
		this.statistics = useService("awesome_dashboard.statistics");
		onWillStart(async () => {
			this.statistics = await this.statistics.loadStatistics();
		});
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
