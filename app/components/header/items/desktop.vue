<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';

interface HeaderItemsDesktopProps {
    items: DropdownMenuItem[]
}

const { items } = defineProps<HeaderItemsDesktopProps>()

const route = useRoute()
</script>

<template>
    <div class="flex gap-4">
        <div
            v-for="item in items"
            :key="item.label"
        >
            <UButton
                :icon="item.icon"
                variant="link"
                :to="item.to"
                :label="item.label"
                :class="{
                    'text-default bg-elevated': route.path === item.to,
                }"
            />
        </div>
    </div>
</template>