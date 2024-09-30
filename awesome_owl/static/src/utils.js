import { onMounted, useRef } from "@odoo/owl";

export function useAutofocus(refName, options = {}) {
	const ref = useRef(refName);
	onMounted(() => {
		// use the reference we added on the XML + set up so that we can identify the exact element after it's actually mounted on the DOM so that we can run JS code on it
		// let's focus the input field once the component is mounted
		ref.el.focus();
	});
}
