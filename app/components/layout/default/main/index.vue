<script setup lang="ts">
import { LayoutDefaultMainDesktop, LayoutDefaultMainMobile } from '#components';

const { isMobile } = useDevice()

const LayoutMainFacade = computed(() => {
    return isMobile.value
        ? LayoutDefaultMainMobile
        : LayoutDefaultMainDesktop
})
</script>

<template>
    <LayoutMainFacade>
        <slot />
    </LayoutMainFacade>
</template>