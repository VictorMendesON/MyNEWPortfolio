<script setup>
import { useMobileNav } from "@/composables/mobile-nav";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

let { loadMobileNav } = useMobileNav();

const year = new Date().getFullYear();
</script>

<template>
    <footer :class="loadMobileNav ? 'pb-24 pt-6' : 'py-6'" class="bg-[#0B1120] text-slate-300">
        <p class="text-center text-sm md:text-base"> {{ year }} &copy; {{ t('footer.designedBy') }}
        <a target="_blank" href="https://github.com/VictorMendesON" class="text-secondary-400 font-medium underline underline-offset-4">Victor Mendes</a></p>
    </footer>
</template>