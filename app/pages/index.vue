<template>
  <div class="py-4 flex flex-col gap-10">

    <div class="w-full flex justify-center items-center py-2">
      <div class="p-2 border-2 rounded-full border-muted">
        <ImgUser :size="30" class=" border-6 border-accented h-30 w-30"/>
      </div>
    </div>

    <h1 class="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
      {{ $t('hero.title') }}
      <br>
      {{ $t('hero.subtitle') }}
    </h1>

  </div>
</template>
