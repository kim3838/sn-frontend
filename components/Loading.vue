<template>
    <div v-if="loading" class="loading-page tw-z-30">
        <p>Loading...</p>
    </div>
</template>

<script>
export default {
    name: "Loadng",

    data: () => ({
        loading: false
    }),
    methods: {
        start() {
            this.loading = true
        },
        finish() {
            this.loading = false
        }
    }
}
</script>

<style scoped>
.loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
}
</style>
