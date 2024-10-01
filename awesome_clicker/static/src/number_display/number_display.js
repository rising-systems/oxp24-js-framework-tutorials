import { Component } from "@odoo/owl";
import { humanNumber } from "@web/core/utils/numbers";
import { useClicker } from "../clicker_hook";

export class NumberDisplay extends Component {
  static template = "awesome_clicker.number_display";
  static props = {};

  setup() {
    this.clicker = useClicker();
  }

  get humanizedClicks() {
    return humanNumber(this.clicker.clicks, {
      decimals: this.clicker.clicks < 1000 ? 0 : 1,
    });
  }
}
