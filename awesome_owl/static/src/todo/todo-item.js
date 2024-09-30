import { Component, xml } from "@odoo/owl";

export class TodoItem extends Component {
  static template = xml`<div role="button" class="" t-on-click="toggleItem" t-att-class="{
  'text-muted text-decoration-line-through': props.itemData.isCompleted
  }">
    <input type="checkbox" t-on-change="onChange" t-att-checked="props.itemData.isCompleted"/> <t t-esc="props.itemData.id"/>. <t t-esc="props.itemData.description"/>
    </div>`;

  static props = {
    itemData: {
      type: { id: Number, description: String, isCompleted: Boolean },
      optional: true,
    },
    toggleState: Function,
  };

  toggleItem() {
    this.props.toggleState(this.props.itemData.id);
  }
}
