import { Component, markup, useState } from "@odoo/owl";
import { Counter } from "./counter";
import { Card } from "./card";

export class Playground extends Component {
	static template = "awesome_owl.playground";
	static components = { Counter, Card };

	setup() {
		this.htmlcontent = markup`<a href="http://rs.ag">rising sysstems</a>`;
		this.state = useState({ sum: 0 });
	}

	incrementSum(value = 1) {
		this.state.sum += value;
	}
}
