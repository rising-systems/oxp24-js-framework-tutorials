import { Component, onWillStart, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { Layout } from "@web/search/layout";
import { registry } from "@web/core/registry";
import { DashboardItem } from "./dashboard_item";
import { rpc } from "@web/core/network/rpc";

class AwesomeDashboard extends Component {
	static template = "awesome_dashboard.AwesomeDashboard";
	static components = { Layout, DashboardItem };

	setup() {
		this.display = {
			controlPanel: {}, //disabling the control panel
		};
		this.action = useService("action");
		this.statistics = useService("awesome_dashboard.statistics");
		this.state = useState({
			average_quantity: 0,
			average_time: 0,
			nb_cancelled_orders: 0,
			nb_new_orders: 0,
			orders_by_size: {
				m: 0,
				s: 0,
				xl: 0,
			},
			total_amount: 0,
		});
		onWillStart(async () => {
			const result = await this.statistics.loadStatistics();
			this.state.average_quantity = result.average_quantity;
			this.state.average_time = result.average_time;
			this.state.nb_cancelled_orders = result.nb_cancelled_orders;
			this.state.nb_new_orders = result.nb_new_orders;
			this.state.orders_by_size = result.orders_by_size;
			this.state.total_amount = result.total_amount;
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
