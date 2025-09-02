<template>
    <section class="w-[100dvw] bg-elevated">
        <div class="min-h-[100dvh] w-full md:max-w-7xl md:mx-auto bg-default">
            <Header/>
            <main class="flex-1 pb-0">
                <div class="grid flex-1 grid-cols-[32px_1fr_32px]">
                    <Placeholder class="min-h-screen h-[100%]" />
                    <div class="pt-20 pb-10 2xl:pb-0 px-2">
                        <slot />
                    </div>
                    <Placeholder class="min-h-screen h-[100%]" />
                </div>
            </main>
        </div>
    </section>
</template>