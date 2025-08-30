<script setup lang="ts">
import { HeaderItemsDesktop, HeaderItemsMobile } from '#components';

const { isMobile } = useDevice()

const items = ref([
    {
        label: computed( () => $t('header.home')),
        icon: 'material-symbols:home-rounded',
        to: '/'
    },
    {
        label: computed( () => $t('header.about')),
        icon: 'material-symbols:info',
        to: '/about'
    },
    {
        label: computed( () => $t('header.projects')),
        icon: 'material-symbols:work',
        to: '/projects'
    },
    {
        label: computed( () => $t('header.contact')),
        icon: 'material-symbols:contacts-rounded',
        to: '/contact'
    }
])

const HeaderItemsFacade = computed(() => {
    return isMobile.value
        ? HeaderItemsMobile
        : HeaderItemsDesktop
})
</script>

<template>
    <HeaderItemsFacade :items="items" />
</template>