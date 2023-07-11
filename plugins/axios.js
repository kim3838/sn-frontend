export default function ({app, store, route, params, query, env, isDev, isHMR, redirect, error, $config, $axios}) {

    $axios.onRequest(config => {
        console.log({"Axios Request: " : config.url});

        console.log({"Axios Header Config: " : config.headers.common});
    });

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status);

        console.log({"axios.js Auth : " : store.state.auth});

        console.log({"Axios Error : " : code + ": " + error.response.data.message});

        store.commit('setServiceError', {
            prompt: code !== 401,
            title: 'Something Went Wrong',
            payload: error.response
        });
    });

}
