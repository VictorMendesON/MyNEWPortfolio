import { ref } from 'vue';

export function useMobileNav() {
  const loadMobileNav = ref(window.innerWidth < 640); 
  const mobileNav = ref(false);

  const toggleMobileNav = () => {
    mobileNav.value = !mobileNav.value;
    console.log('mobileNav:', mobileNav.value); 
  };

  return { mobileNav, loadMobileNav, toggleMobileNav };
}