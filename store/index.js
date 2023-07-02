
export const state = () => ({
    service: {
        error: null
    }
});

export const getters = {
    getServiceError(state) {
        return state.error
    }
}

export const mutations = {
    setServiceError(state, payload){
        state.service.error = payload.data;
    },
    resetServiceError(state){
        state.service.error = null;
    },
}
