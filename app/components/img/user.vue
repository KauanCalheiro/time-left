<script setup lang="ts">
interface ImgUserProps {
    size?: number;
}

const { size = 10 } = defineProps<ImgUserProps>()
</script>

<template>
    <img
        class="rounded-full object-cover"
        :class="`h-${size} w-${size}`"
        src="/photos/1.jpeg"
        alt="User Image"
    >
</template>