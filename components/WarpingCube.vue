<template>
    <transition
        enter-active-class="ease-out duration-300"
        enter-class="tw-opacity-0"
        enter-to-class="tw-opacity-100"
        leave-active-class="ease-in duration-300"
        leave-class="tw-opacity-100"
        leave-to-class="tw-opacity-0">
        <div v-if="loading" class="cubeContainer tw-absolute tw-z-30 tw-h-full tw-w-full tw-flex tw-items-center tw-justify-center">
            <div class="cube">
                <div class="sides">
                    <div class="top tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-accent"></div>
                    <div class="anotherTop tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>
                    <div class="topMirror1 tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>
                    <div class="topMirror2 tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>
                    <div class="topMirror3 tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>

                    <div class="right tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-accent"></div>
                    <div class="anotherRight tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>
                    <div class="rightMirror1 tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>
                    <div class="rightMirror2 tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>
                    <div class="rightMirror3 tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>

                    <div class="left tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-accent"></div>
                    <div class="anotherLeft tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>
                    <div class="leftMirror1 tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>
                    <div class="leftMirror2 tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>
                    <div class="leftMirror3 tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>

                    <div class="front tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-accent"></div>
                    <div class="anotherFront tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>
                    <div class="frontMirror1 tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>
                    <div class="frontMirror2 tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>
                    <div class="frontMirror3 tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>

                    <div class="back tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-accent"></div>
                    <div class="anotherBack tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>
                    <div class="backMirror1 tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>
                    <div class="backMirror2 tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>
                    <div class="backMirror3 tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>

                    <div class="bottom tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-accent"></div>
                    <div class="anotherBottom tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-accent"></div>
                    <div class="bottomMirror1 tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>
                    <div class="bottomMirror2 tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>
                    <div class="bottomMirror3 tw-bg-gradient-to-r tw-from-accent tw-via-transparent tw-to-light"></div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {

    props : {
        show: {
            default: false
        },
    },

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
    },

    computed : {

    },

    mounted() {

    }
}
</script>

<style lang="scss" scoped>

$size: 130px;
$panelOrigin: 20;
$border: 6px;
$delayLimit: 500;

.cubeContainer {
    background: rgb(57,72,85);
    background: radial-gradient(circle, rgba(57,72,85,0) 0%, rgba(118,184,241,0) 50%, rgba(57,72,85,0.70211834733893552) 100%);
}

.cube, .cube * {
    position: absolute;
    width: $size + $border;
    height: $size + $border;
}

// Theme light
.cube .sides * {
    box-sizing: border-box;
    border: $border solid transparent;
    box-shadow: 2px 2px 50px 10px rgba(255, 255, 255, 0.2);
}

@keyframes rotate {
    0%      { transform: rotateX(-55deg) rotateY(45deg); }
    100%    { transform: rotateX(-55deg) rotateY(405deg); }
}

.sides {
    //animation: rotate 90s linear infinite;
    //animation-delay: 0s;
    transform-style: preserve-3d;
    transform: rotateX(-47deg) rotateY(45deg);
}

@mixin initialMirror($name, $rotate, $delay) {
    $perspectiveOrigin : $size + $panelOrigin;

    @keyframes #{$name}-animation {
        0%      { opacity: 0;   transform: #{$rotate}       translateZ($perspectiveOrigin)}
        20%     { opacity: 0.7; transform: #{$rotate}       translateZ(($size) / 2) }
        25%     { opacity: 1;   transform: #{$rotate}       translateZ(($size) / 2) }
        55%     { opacity: 0.7;   transform: #{$rotate}     translateZ(($size) / 2) }
        60%     { opacity: 0.5;   transform: #{$rotate}     translateZ(($size) / 2) }
        65%     { opacity: 0.2;   transform: #{$rotate}     translateZ(($size) / 2) }
        100%    { opacity: 0;   transform: #{$rotate}       translateZ(($size) / 2) }
    }

    .#{$name} {
        opacity:                0;
        animation:              #{$name}-animation 4s ease-in infinite;
        animation-delay:        $delay * 10ms;
        transform:              #{$rotate} translateZ($perspectiveOrigin);
    }
}

@mixin mirror($name, $rotate, $delay) {
    $perspectiveOrigin : $size + $panelOrigin;

    $distance : random($perspectiveOrigin) + $size;

    @keyframes #{$name}-animation {
        0%      { opacity: 0;       transform: #{$rotate}       translateZ($distance)}
        10%     { opacity: 0.7;     transform: #{$rotate}       translateZ(($size) / 2) }
        15%     { opacity: 1;       transform: #{$rotate}       translateZ(($size) / 2) }
        30%     { opacity: 0.7;     transform: #{$rotate}     translateZ(($size) / 2) }
        55%     { opacity: 0.1;     transform: #{$rotate}     translateZ(($size) / 2) }
        90%     { opacity: 0;        transform: #{$rotate}     translateZ(($size) / 2) }
        100%    { opacity: 0;       transform: #{$rotate}       translateZ(($size) / 2) }
    }

    .#{$name} {
        opacity:                0;
        animation:              #{$name}-animation 4s ease-out infinite;
        animation-delay:        $delay * 10ms;
        animation-fill-mode:    forwards;
        transform:              #{$rotate} translateZ($distance);
    }
}

.cube .sides {
    @include initialMirror("top",       rotateX(90deg),     random($delayLimit));
    @include initialMirror("bottom",    rotateX(-90deg),    random($delayLimit));
    @include initialMirror("front",     rotateY(0deg),      random($delayLimit));
    @include initialMirror("back",      rotateY(-180deg),   random($delayLimit));
    @include initialMirror("left",      rotateY(-90deg),    random($delayLimit));
    @include initialMirror("right",     rotateY(90deg),     random($delayLimit));

    @include initialMirror("anotherTop",       rotateX(90deg),     random($delayLimit));
    @include initialMirror("anotherBottom",    rotateX(-90deg),    random($delayLimit));
    @include initialMirror("anotherFront",     rotateY(0deg),      random($delayLimit));
    @include initialMirror("anotherBack",      rotateY(-180deg),   random($delayLimit));
    @include initialMirror("anotherLeft",      rotateY(-90deg),    random($delayLimit));
    @include initialMirror("anotherRight",     rotateY(90deg),     random($delayLimit));

    @include mirror("topMirror1",     rotateX(90deg),     random($delayLimit));
    @include mirror("topMirror2",     rotateX(90deg),     random($delayLimit));
    @include mirror("topMirror3",     rotateX(90deg),     random($delayLimit));
    @include mirror("bottomMirror1",  rotateX(-90deg),    random($delayLimit));
    @include mirror("bottomMirror2",  rotateX(-90deg),    random($delayLimit));
    @include mirror("bottomMirror3",  rotateX(-90deg),    random($delayLimit));
    @include mirror("frontMirror1",   rotateY(0deg),      random($delayLimit));
    @include mirror("frontMirror2",   rotateY(0deg),      random($delayLimit));
    @include mirror("frontMirror3",   rotateY(0deg),      random($delayLimit));
    @include mirror("backMirror1",    rotateY(-180deg),   random($delayLimit));
    @include mirror("backMirror2",    rotateY(-180deg),   random($delayLimit));
    @include mirror("backMirror3",    rotateY(-180deg),   random($delayLimit));
    @include mirror("leftMirror1",    rotateY(-90deg),    random($delayLimit));
    @include mirror("leftMirror2",    rotateY(-90deg),    random($delayLimit));
    @include mirror("leftMirror3",    rotateY(-90deg),    random($delayLimit));
    @include mirror("rightMirror1",   rotateY(90deg),     random($delayLimit));
    @include mirror("rightMirror2",   rotateY(90deg),     random($delayLimit));
    @include mirror("rightMirror3",   rotateY(90deg),     random($delayLimit));
}

</style>
