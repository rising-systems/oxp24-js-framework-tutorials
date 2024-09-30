import { Component, xml } from "@odoo/owl";

export class TodoItem extends Component {
  static template = xml`<div role="button" class="" t-on-click="toggleItem" t-att-class="{
  'text-muted text-decoration-line-through': props.itemData.isCompleted
  }">
    <t t-esc="props.itemData.id"/>. 
    <t t-esc="props.itemData.description"/>
    </div>`;

  static props = {
    itemData: {
      type: { id: Number, description: String, isCompleted: Boolean },
      optional: true,
    },
  };

  toggleItem() {
    this.props.itemData.isCompleted = !this.props.itemData.isCompleted;
  }
}
