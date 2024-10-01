import { Component } from "@odoo/owl";

export class DashboardLeads extends Component {
  static template = "awesome_dashboard.dashboard-leads";

  static props = {
    latestLeads: { type: Array, optional: false },
  };

  setup() {
    console.log(this.props.latestLeads);
  }
}
