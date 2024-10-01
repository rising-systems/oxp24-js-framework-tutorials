import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useClicker } from "../clicker_hook";
import { NumberDisplay } from "../number_display/number_display";

class ClickerClientAction extends Component {
  static template = "awesome_clicker.ClickerClientAction";
  static props = ["*"];
  static components = { NumberDisplay };

  setup() {
    this.clicker = useClicker();
  }
}
registry
  .category("actions")
  .add("awesome_clicker.client_action", ClickerClientAction);
