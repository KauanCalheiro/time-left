<script setup lang="ts">
import type Country from '~/types/Country';

const { locale, setLocale } = useI18n()

const countries = useCountries()
const country = countries.find((c: Country) => c.code === locale.value)

const selectedCountry = ref<Country>(country!);

watch(selectedCountry, (newCountry) => {
    setLocale(newCountry.code);
});
</script>

<template>
    <SelectLocale v-model:model-value="selectedCountry" />
</template>