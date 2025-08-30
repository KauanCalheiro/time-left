<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()
</script>

<template>
  <ClientOnly>
    <UApp :locale="locales[locale]">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </ClientOnly>
</template>