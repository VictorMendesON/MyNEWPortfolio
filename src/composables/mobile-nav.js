import { ref } from 'vue';

const mobileNav = ref({ show: false });
const loadMobileNav = ref(true);

function toggleMobileNav() {
  mobileNav.value.show = !mobileNav.value.show;
}

export function useMobileNav() {
  return {
    mobileNav,
    loadMobileNav,
    toggleMobileNav
  };
}
