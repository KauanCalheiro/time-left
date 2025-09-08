<script setup lang="ts">
interface WorkInProgressProps {
    title: string;
}

const { title } = defineProps<WorkInProgressProps>();
</script>

<template>
    <div class="min-h-[100dvh] flex flex-col justify-center items-center px-4 space-y-4">
        <AppTitle>{{ title }}</AppTitle>
        <UIcon name="i-lucide-construction" class="text-6xl mb-6" />
        <AppSubtitle>
            {{ $t('workInProgress.title') }}
        </AppSubtitle>
        <AppDescription class="text-center">
            {{ $t('workInProgress.description') }}
        </AppDescription>
    </div>
</template>