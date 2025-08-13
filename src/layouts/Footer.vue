<script setup>
import { useMobileNav } from "@/composables/mobile-nav";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

let { loadMobileNav } = useMobileNav();

const year = new Date().getFullYear();
</script>

<template>
    <footer :class="loadMobileNav ? 'pb-6 pt-6' : 'py-6'" class="bg-slate-200 text-[#0B1120] dark:bg-[#0B1120] dark:text-slate-300">
        <p class="text-center text-sm md:text-base"> {{ year }} &copy; {{ t('footer.designedBy') }}
        <a target="_blank" href="https://github.com/VictorMendesON" class="text-primary-600 font-semibold dark:text-secondary-400  underline underline-offset-4">Victor Mendes</a></p>
    </footer>
</template>