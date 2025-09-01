<template>
    <div class="relative flex items-center justify-center h-8 px-4 border border-dashed border-accented rounded-sm opacity-75 overflow-hidden z-0">
        <svg
            class="absolute inset-0 w-full h-full stroke-inverted/10"
            fill="none"
        >
            <defs>
                <pattern
                    id="diagonal-lines"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                >
                    <path d="M-3 13L15 -5M-5 5L13 -13M-1 21L17 3" />
                </pattern>
            </defs>
            <rect
                fill="url(#diagonal-lines)"
                width="100%"
                height="100%" 
            />
        </svg>
    </div>
</template>
