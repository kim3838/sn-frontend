<template>
    <ConfirmationModal
        :closeable="false"
        :max-width="'sm'"
        :show="$store.state.service.error"
        @close="$store.commit('resetServiceError')">
        <template #title>
            Something went wrong
        </template>

        <template #content>
            <div v-if="$store.state.service.error">
                <div v-text="$store.state.service.error.code"></div>
                <div v-text="$store.state.service.error.message"></div>
            </div>
        </template>

        <template #footer>
            <Button @click.native="$store.commit('resetServiceError')">Close</Button>
        </template>
    </ConfirmationModal>
</template>

<script>
export default {
    name: "ServiceErrorModal",
}
</script>
