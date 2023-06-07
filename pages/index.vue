<template>
    <div class="container">
        <div class="moody-card tw-p-6">
            <div class="moody-card-frame"></div>
            <div class="tw-relative">
                <CardSample></CardSample>
                <br>
                <hr>
                <TextSample></TextSample>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IndexPage',

    layout: 'admin'
}
</script>

<style scoped>
.container {
    @apply tw-flex tw-justify-center tw-items-center tw-text-center tw-mx-auto;
    /*border: 1px solid silver;*/
}

.moody-card{
    border: 1px solid silver;
    position: relative;
    margin: 24px;
}

.moody-card-frame{
    box-sizing: border-box;
    display: block;
    content: none;
}

.moody-card-frame:before{
    position: absolute;
    content: "";
    top: -8px;
    left: -9px;
    right: 7px;
    bottom: 7px;
    border: 1px solid silver;
    display: block;
}

.moody-card-frame:after{
    position: absolute;
    content: "";
    top: 7px;
    left: 7px;
    right: -9px;
    bottom: -8px;
    border: 1px solid silver;
    display: block;
}
</style>
