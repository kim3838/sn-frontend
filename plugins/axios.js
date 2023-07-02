export default function ({ $axios, redirect, store}) {

    $axios.onRequest(config => {
        console.log({"Axios Request: " : config.url});
    });

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status);

        console.log({"Axios Error: " : error.response.data.message});

        store.commit('setServiceError', error.response);

        return Promise.resolve(false);
    });

}
