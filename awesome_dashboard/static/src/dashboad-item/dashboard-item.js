import { Component } from "@odoo/owl";

export class DashboardItem extends Component {
  static template = "awesome_dashboard.AwesomeDashboard.dashboard-item";

  static props = {
    slots: {
      type: Object,
      shape: {
        header: { type: Object, optional: true },
        default: { type: Object, optional: true },
        footer: { type: Object, optional: true },
      },
    },
    size: { type: Number, optional: true },
    height: { type: Number, optional: true },
    colorClass: { type: String, optional: true },
    // title: { type: String, optional: true },
    // description: { type: String, optional: true },
    // icon: { type: String, optional: true },
  };

  setup() {
    this.props.size = this.props.size || 1;
    this.props.height = this.props.height || 1;
  }
}
