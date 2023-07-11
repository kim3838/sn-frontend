<template>
    <ConfirmationModal
        :closeable="false"
        :max-width="'lg'"
        :show="$store.state.service.error.prompt"
        @close="$store.commit('resetServiceError')">
        <template #title>
            <span v-text="$store.state.service.error.title"></span>
        </template>

        <template #content>
            <div v-if="$store.state.service.error.payload">
                <code v-text="$store.state.service.error.payload.data.code"></code>
                <div v-text="$store.state.service.error.payload.data.message"></div>
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
