<template>
    <div>
        <div class="tw-flex tw-border-gray-200 tw-border tw-mb-2">
            <span class="tw-font-sans tw-text-base tw-border-gray-200 tw-border-r tw-pr-2">
                Default Layout
            </span>
            <span class="tw-pl-2 tw-grid tw-gap-2 tw-grid-cols-12">
                <NuxtLink :to="'/prototype'">Prototype</NuxtLink>
                <NuxtLink :to="'/login'">Login</NuxtLink>
            </span>
        </div>
        <Nuxt/>
    </div>
</template>

<style>
html {
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}
</style>
