import { Component, useState } from "@odoo/owl";

export class CardWithSlot extends Component {
	static template = "awesome_owl.CardWithSlot";

	static props = {
		// https://github.com/odoo/owl/blob/master/doc/reference/props.md#props-validation
		title: { type: String, optional: true, default: "Title" },
		slots: { type: Object, optional: true },
	};
}
