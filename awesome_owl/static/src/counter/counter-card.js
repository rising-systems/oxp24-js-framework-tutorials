import { Component, useState, onMounted, markup } from "@odoo/owl";
import { Counter } from "./counter";

export class CounterCard extends Component {
  static template = "awesome_owl.counter.counter-card";
  static components = { Counter };
  static props = {
    indexCount: { type: Number, optional: true },
    cardBody: { type: String, optional: false },
    onChange: { type: Function, optional: true },
    count: { type: Object, optional: true },
  };

  setup() {
    this.counter = this.props.count;

    onMounted(() => {
      console.log("Mounted");
    });
  }

  incrementCounter() {
    this.counter.value++;
    this.onChange();
  }

  decrementCounter() {
    this.counter.value--;
    this.onChange();
  }

  onChange() {
    if (this.props.onChange) {
      this.props.onChange();
    }
  }
}
