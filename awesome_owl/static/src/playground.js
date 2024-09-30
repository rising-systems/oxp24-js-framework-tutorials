import { Component, markup, useState } from "@odoo/owl";
import { Counter } from "./counter";
import { CounterStateless } from "./counter_stateless";
import { TodoList } from "./todo_list";
import { Card } from "./card";

export class Playground extends Component {
	static template = "awesome_owl.playground";
	static components = { Counter, Card, CounterStateless, TodoList };

	setup() {
		this.htmlcontent = markup`<a href="http://rs.ag">rising sysstems</a>`;
		this.state = useState({
			sum: 0,
		});
		this.statelessCounters = useState([0, 0]);
	}

	incrementSum(value = 1) {
		this.state.sum += value;
	}

	get statelessCountersSum() {
		return this.statelessCounters.reduce((acc, counter) => acc + counter, 0);
	}
}
