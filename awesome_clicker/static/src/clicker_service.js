import { registry } from "@web/core/registry";
import { ClickerModel } from "./clicker_model";

const clickerService = {
	start(env) {
		// since the ClickerModel extends Reactive, we don't need to wrap it in a reactive (the Reactive class wraps the instance in a reactive)
		// const model = reactive(new ClickerModel())
		const model = new ClickerModel();

		document.addEventListener("click", () => model.addClick(), true);
		setInterval(() => {
			model.tick();
		}, 10000);

		return model;
	},
};

registry.category("services").add("awesome_clicker.clicker", clickerService);
