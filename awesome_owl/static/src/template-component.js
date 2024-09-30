import { Component, xml, useState } from "@odoo/owl";

export class TemplateComponent extends Component {
  static template = xml`<div>
    <h3>Template Component <button class="btn btn-secondary" t-on-click="minimize"><t t-esc="state.minimized ? 'close' : 'open'" /></button></h3>
    <t t-slot="default" t-if="state.minimized" />
    <t t-slot="footer" />
    </div>`;

  static props = {
    slots: {
      type: Object,
      shape: {
        default: { type: Object, optional: true },
        footer: { type: Object, optional: true },
      },
    },
  };

  setup() {
    this.state = useState({ minimized: false });
  }

  minimize() {
    console.log("minimize");
    this.state.minimized = !this.state.minimized;
  }
}
