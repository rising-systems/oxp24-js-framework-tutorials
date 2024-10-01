import {
	Component,
	useRef,
	onWillStart,
	onMounted,
	onWillUnmount,
} from "@odoo/owl";
import { loadJS } from "@web/core/assets";
import { getColor } from "@web/core/colors/colors";

export class PieChart extends Component {
	static template = "awesome_owl.PieChart";

	static props = {
		// https://github.com/odoo/owl/blob/master/doc/reference/props.md#props-validation
		data: { type: Object, optional: false },
	};

	setup() {
		this.canvasRef = useRef("canvas_ref");
		this.chart = null;
		onWillStart(async () => {
			await loadJS("/web/static/lib/Chart/Chart.js");
		});
		onMounted(() => {
			this.renderChart();
		});
		onWillUnmount(() => {
			if (this.chart) this.chart.destroy();
		});
	}

	renderChart() {
		const labels = Object.keys(this.props.data);
		const data = Object.values(this.props.data);
		const color = labels.map((_, index) => getColor(index));
		this.chart = new Chart(this.canvasRef.el, {
			type: "pie",
			data: {
				labels: labels,
				datasets: [
					{
						label: this.props.label,
						data: data,
						backgroundColor: color,
					},
				],
			},
		});
	}
}
