import { Component, useState, onMounted, markup } from "@odoo/owl";
import { CounterCard } from "./counter/counter-card";
import { TodoList } from "./todo/todo-list";
import { TemplateComponent } from "./template-component";

export class Playground extends Component {
  static template = "awesome_owl.playground";
  static components = { CounterCard, TodoList, TemplateComponent };

  setup() {
    // Add 10 cards to the cards array
    this.cards = [
      {
        idx: 0,
        cardBody: markup("This is the <b>FIRST</b> card."),
        count: useState({ value: 0 }),
      },
      {
        idx: 1,
        cardBody: markup("This is the <b>SECOND</b> card."),
        count: useState({ value: 0 }),
      },
      {
        idx: 2,
        cardBody: markup("This is the <b>THIRD</b> card."),
        count: useState({ value: 0 }),
      },
      {
        idx: 3,
        cardBody: markup("This is the <b>FOURTH</b> card."),
        count: useState({ value: 0 }),
      },
      {
        idx: 4,
        cardBody: markup("This is the <b>FIFTH</b> card."),
        count: useState({ value: 0 }),
      },
    ];

    this.counterSum = 0;

    onMounted(() => {
      console.log("Mounted");
    });
  }

  counterSumChanged() {
    console.log("Counter sum changed", this.counterSum);
    this.counterSum = this.cards.reduce(
      (acc, card) => acc + card.count.value,
      0
    );
  }
}
