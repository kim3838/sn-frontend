<template>
    <Modal
        :show="show"
        :max-width="maxWidth"
        :closeable="closeable"
        @close="close">
        <div class="tw-p-3 tw-border tw-border-neutral-200">
            <div class="sm:tw-flex sm:tw-items-start">
                <div class="tw-mx-auto tw-flex-shrink-0 tw-flex tw-items-center tw-justify-center tw-h-12 tw-w-12 sm:tw-mx-0 sm:tw-h-10 sm:tw-w-10">
                    <svg class="tw-h-full tw-w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M11.001 10h2v5h-2zM11 16h2v2h-2z"/><path fill="currentColor" d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19L12 5.137L19.344 19H4.661z"/>
                    </svg>
                </div>

                <div class="tw-mt-3 tw-text-center sm:tw-mt-0 sm:tw-ml-2 sm:tw-text-left">
                    <h3 class="tw-text-xl tw-font-bold">
                        <slot name="title"></slot>
                    </h3>

                    <div class="tw-mt-1 tw-text-base">
                        <slot name="content"></slot>
                    </div>
                </div>
            </div>
        </div>

        <div class="tw-px-3 tw-py-2.5 tw-text-right">
            <slot name="footer">
            </slot>
        </div>
    </Modal>
</template>

<script>
export default {
    props: {
        show: {
            default: false
        },
        maxWidth: {
            default: '2xl'
        },
        closeable: {
            default: true
        },
    },

    methods: {
        close() {
            this.$emit('close')
        },
    }
}
</script>
