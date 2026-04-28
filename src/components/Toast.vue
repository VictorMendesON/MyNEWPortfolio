<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    message: String,
    type: {
        type: String,
        default: 'success' // pode ser 'success' ou 'error'
    },
    duration: {
        type: Number,
        default: 4000
    }
});

const emit = defineEmits(["close"]);

onMounted(() => {
    setTimeout(() => {
        emit('close');
    }, props.duration);
});
</script>

<template>
    <Transition name="toast-fade">
        <div 
            id="toast-container" 
            class="w-full max-w-xs md:max-w-md p-4 flex items-center text-gray-700 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:text-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-700" 
            role="alert"
        >
            <div 
                class="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg"
                :class="type === 'success' ? 'text-green-500 bg-green-100 dark:bg-green-500/20' : 'text-red-500 bg-red-100 dark:bg-red-500/20'"
            >
                <svg v-if="type === 'success'" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
                </svg>
            </div>

            <div class="ml-4 text-sm font-medium">{{ message }}</div>

            <button @click="$emit('close')" type="button" class="ml-auto bg-transparent text-gray-400 hover:text-gray-900 rounded-lg p-1.5 inline-flex h-8 w-8 dark:hover:text-white transition-colors">
                <svg class="w-3 h-3" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
    </Transition>
</template>

<style scoped>
.toast-fade-enter-active, .toast-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.toast-fade-enter-from {
  opacity: 0;
  transform: translate(-50%, -20px);
}
.toast-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}
</style>