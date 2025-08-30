<template>
    <header class="w-full fixed md:sticky bottom-0 md:top-4 md:bottom-auto">
        <div class="flex justify-between items-center gap-4 py-2 my-4 mx-4 md:mx-0 px-6 bg-default rounded-2xl border-[0.5px] border-accented">
            <div>
                <slot name="left">
                    <LogoKmc />
                </slot>
            </div>
            <div>
                <slot name="default">
                  <HeaderItems />
                </slot>
            </div>
            <div>
                <slot name="right">
                    <div class="flex gap-2">
                        <LocaleSelector />
                        <UColorModeButton variant="soft" />
                        <UButton
                            icon="i-simple-icons:github"
                            target="_blank"
                            variant="soft"
                            href="https://github.com/KauanCalheiro" 
                        />
                    </div>
                </slot>
            </div>
        </div>
    </header>
</template>
