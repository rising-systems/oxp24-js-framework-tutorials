import { registry } from "@web/core/registry";
import { Component, useState, useExternalListener } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { useClicker } from "./clicker_hook";
import { ClickerValue } from "./clicker_value";

export class ClickerSystray extends Component {
	static template = "awesome_clicker.ClickerSystray";
	static components = { ClickerValue };
	static props = {};
	setup() {
		this.action = useService("action");
		this.clicker = useClicker();
		// we no longer need the external listener, the hook's doing that for us.
		//useExternalListener already has the teardown logic built-in
		// the last "true" argument is to use the capture, related to the event propagation
		// useExternalListener(document.body,"click",this.clickService.increment,true);
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
