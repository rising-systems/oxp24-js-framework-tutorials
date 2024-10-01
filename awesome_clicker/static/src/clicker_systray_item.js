import { registry } from "@web/core/registry";
import { Component, useState, useExternalListener } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";

export class ClickerSystray extends Component {
	static template = "awesome_clicker.ClickerSystray";
	static props = {};
	setup() {
		this.state = useState({ counter: 0 });
		this.action = useService("action");
		//useExternalListener already has the teardown logic built-in
		// the last "true" argument is to use the capture, related to the event propagation
		useExternalListener(document.body, "click", this.increment, true);
	}

	increment() {
		// we increment here by 9 so that the user get 10 (1 for the general body click)
		this.state.counter += 9;
	}

	openClientAction() {
		this.action.doAction({
			type: "ir.actions.client",
			tag: "awesome_clicker.client_action",
			target: "new",
			name: "Clicker Game",
		});
	}
}
export const systrayItem = {
	Component: ClickerSystray,
};

registry
	.category("systray")
	.add("awesome_clicker.ClickerSystray", systrayItem, { sequence: 1000 });
