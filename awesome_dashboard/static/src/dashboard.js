import { Component, onWillStart } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
import { DashboardItem } from "./dashboad-item/dashboard-item";
import { PieChart } from "./charts/pie/pie-chart";
import { user } from "@web/core/user";
import { DashboardLeads } from "./leads/leads";

class AwesomeDashboard extends Component {
  static template = "awesome_dashboard.AwesomeDashboard";
  static components = { Layout, DashboardItem, PieChart, DashboardLeads };

  setup() {
    this.display = { controlPanel: {} };
    this.action = useService("action");
    this.user = user;

    this.dashboardCache = useService("awesome_dashboard.statistics");

    onWillStart(async () => {
      this.dashboardData = await this.dashboardCache.loadStatistics();
      this.latestLeads = await this.dashboardCache.loadLatestLead();
      console.log(this.user);
      console.log(this.latestLeads);
    });
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
