<script setup lang="ts">

interface DisplayTimeProps {
    time: number
    unitKey: string
}

const { time, unitKey } = defineProps<DisplayTimeProps>()

const { isMobile } = useDevice()

const computedUnit = computed(() => useUnit(unitKey, time, isMobile.value))
</script>

<template>
    <div class="flex flex-row font-bold items-end py-2 font-poppins">
        <div class="italic text-primary text-7xl">{{ time }}&nbsp;</div>
        <div class="text-6xl">{{ computedUnit }}</div>
    </div>
</template>