<script setup lang="ts">

interface UserPhotos {
    src: string;
    tilt: 'left' | 'right';
}

const imageCardSize = ref(50)

const userPhotos = ref<UserPhotos[]>([
    { src: '/portfolio/photos/3.jpeg', tilt: 'left' },
    { src: '/portfolio/photos/4.jpeg', tilt: 'right' },
    { src: '/portfolio/photos/5.jpeg', tilt: 'left' },
    { src: '/portfolio/photos/1.jpeg', tilt: 'left' },
    { src: '/portfolio/photos/2.jpeg', tilt: 'right' },
])
</script>

<template>
    <div class="w-full flex flex-nowrap md:px-20 md:-space-x-8 justify-center">
        <ImageCard
            v-for="value in userPhotos"
            :key="value.src"
            :size="imageCardSize"
            :src="value.src"
            :left="value.tilt === 'left'"
            :right="value.tilt === 'right'"
        />
    </div>
</template>