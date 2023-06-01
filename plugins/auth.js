export default function({ $auth }) {
    $auth.onError((error, name, endpoint) => {

        console.log({"Auth Error: " : error.response});
    })

    $auth.onRedirect((to, from) => {

        console.log({"Auth Redirect: " : to});
    })
}
