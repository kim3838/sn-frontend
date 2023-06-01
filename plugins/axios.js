export default function ({ $axios, redirect}) {

    $axios.onRequest(config => {
        console.log({"Axios Request: " : config.url});
    });

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status);

        console.log({"Axios Error: " : error.response});

        // if (code === 400) {
        //     redirect('/400')
        // }
    });

}
