import { Reactive } from "@web/core/utils/reactive";

export class ClickerModel extends Reactive {
	static levelUp = 50;
	static clickBotPrice = 100;
	static clickBotPower = 10;

	constructor() {
		super();
		this.clicks = 0;
		this.level = 0;
		this.clickBots = 0;
	}

	get levelUp() {
		return ClickerModel.levelUp;
	}
	get clickBotPrice() {
		return ClickerModel.clickBotPrice;
	}
	get clickBotPower() {
		return ClickerModel.clickBotPower;
	}

	addClick() {
		this.increment(1);
	}

	increment(inc) {
		this.clicks += inc;
		if (this.level < 1 && this.clicks >= this.levelUp) {
			this.level++;
		}
	}

	buyClickBot() {
		if (this.clicks < this.clickBotPrice) {
			return false;
		}
		this.clicks -= this.clickBotPrice;
		this.clickBots += 1;
	}

	/**
	 * This method is supposed to be periodically called by outside code, at some
	 * proper interval
	 */
	tick() {
		this.clicks += this.clickBots * this.clickBotPower;
	}
}
