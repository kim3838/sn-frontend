<template>
    <label class="tw-block tw-font-normal tw-text-xs tw-flex tw-align-start">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot></slot></span>
    </label>
</template>

<script>
    export default {
        props: ['value']
    }
</script>
