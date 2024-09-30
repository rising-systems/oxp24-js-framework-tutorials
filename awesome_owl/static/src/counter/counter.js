import { Component, xml } from "@odoo/owl";

export class Counter extends Component {
  static template = xml`<div class="text-danger">Counter: <t t-esc="props.value"/></div>`;
}
