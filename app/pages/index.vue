<template>
  <div class="py-4 flex flex-col gap-6 md:gap-12">

    <div class="w-full flex justify-center items-center md:pt-2">
      <div class="p-2 border-2 rounded-full border-muted">
        <UserImage :size="30" class=" border-6 border-accented h-30 w-30"/>
      </div>
    </div>

    <AppTitle class="mx-auto max-w-2xl text-center">
      {{ $t('hero.title') }}
      <br>
      {{ $t('hero.subtitle') }}
    </AppTitle>

    <AppDescription class="mx-auto max-w-4xl text-center">
      {{ $t('hero.description') }}
    </AppDescription>

    <div>
      <ImageGallery />
    </div>

  </div>
</template>
