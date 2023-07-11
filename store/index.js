
export const state = () => ({
    service: {
        error: {
            prompt: false,
            title: null,
            payload: null
        }
    }
});

export const getters = {
    getServiceError(state) {
        return state.service.error;
    }
}

export const mutations = {
    setServiceError(state, serviceError){
        state.service.error = serviceError;
    },
    resetServiceError(state){
        state.service.error = {
            prompt: false,
            title: null,
            payload: null
        };
    },
}
