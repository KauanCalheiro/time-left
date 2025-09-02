<script setup lang="ts">
interface ImageCardProps {
    src: string;
    alt?: string;

    size?: number;

    left?: boolean;
    right?: boolean;
}

const {
    src,
    alt = '',
    size = 10,
    left = false,
    right = false,
} = defineProps<ImageCardProps>()

const { isMobile } = useDevice()

const isHovered = ref(false)

const baseRotation = computed(() => {
    if (left) return -5
    if (right) return 5
    return 0
})

const rotation = computed(() => {
    if (!isHovered.value) return baseRotation.value
    if (left) return baseRotation.value - 5
    if (right) return baseRotation.value + 5
    return 0
})

const scale = computed(() => isHovered.value ? (isMobile.value ? 1.4 : 1.2) : 1)

const handleMouseOver = () => {
    isHovered.value = true
}

const handleMouseLeave = () => {
    isHovered.value = false
}
</script>

<template>
    <div
        class="relative"
        :class="`h-${size} w-${size}`"
    >
        <img
            :src="src"
            :alt="alt"
            class="object-cover transition-transform duration-300 rounded-sm md:rounded-xl"
            :style="{
                transform: `rotate(${rotation}deg) scale(${scale})`
            }"
            @mouseover="handleMouseOver"
            @mouseleave="handleMouseLeave"
        >
    </div>
</template>
