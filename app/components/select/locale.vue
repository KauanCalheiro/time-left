<script setup lang="ts">
import type Country from '~/types/Country';

const modelValue = defineModel<Country>()

const countries = useCountries()
</script>

<template>
  <USelectMenu
    v-model:model-value="modelValue"
    :items="countries"
    label-key="emoji"
    color="neutral"
    variant="soft"
    :search-input="false"
    :ui="{
        content: 'w-fit'
    }"
  >
  <template #item="{ item }">
    <span class="w-42">
      {{ item.emoji }} {{ item.name }}
    </span>
  </template>
  </USelectMenu>
</template>

