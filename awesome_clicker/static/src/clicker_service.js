import { registry } from "@web/core/registry";
import { reactive } from "@odoo/owl";
const clickerService = {
	start(env) {
		// in services, we use reactive instead of useState, since
		const state = reactive({ clicks: 0 });
		function increment(inc) {
			state.clicks += inc;
		}
		// we don't need to clean this up because the services are never destroyed
		document.addEventListener("click", () => increment(1), true);
		return {
			state,
			increment,
		};
	},
};
registry.category("services").add("awesome_clicker.clicker", clickerService);
