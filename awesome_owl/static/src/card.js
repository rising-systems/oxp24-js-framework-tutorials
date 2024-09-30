import { Component, useState } from "@odoo/owl";

export class Card extends Component {
	static template = "awesome_owl.Card";

	static props = {
		// https://github.com/odoo/owl/blob/master/doc/reference/props.md#props-validation
		title: { type: String, optional: true, default: "Title" },
		content: { type: String, optional: true, default: "Content" },
	};

	setup() {}
}
