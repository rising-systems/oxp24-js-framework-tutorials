import { onMounted, ref } from "@odoo/owl";

export const useAutoFocus = (refName) => {
  const ref = useRef(refName);
  onMounted(() => {
    ref.el.focus();
  });
};
