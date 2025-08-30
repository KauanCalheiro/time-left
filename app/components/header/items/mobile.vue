<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';

interface HeaderItemsMobileProps {
    items: DropdownMenuItem[]
}

const { items } = defineProps<HeaderItemsMobileProps>()
</script>

<template>
    <div>
        <UDropdownMenu
            :items="items"
        >
            <UButton
                icon="material-symbols:menu-rounded"
                variant="soft"
            />
        </UDropdownMenu>
    </div>
</template>