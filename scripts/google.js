// script.js

function loginWithGoogle() {
    gapi.load('auth2', function () {
        gapi.auth2.init({
            client_id: 'SEU_CLIENT_ID'
        }).then(function (auth2) {
            auth2.signIn().then(function (googleUser) {
                // O usuário fez login com sucesso, você pode acessar as informações do usuário com googleUser.getBasicProfile() e obter um token de acesso com googleUser.getAuthResponse().id_token.
            }).catch(function (error) {
                console.error('Erro ao fazer login com o Google:', error);
            });
        });
    });
}

// Adicione um evento de clique ao botão de login
document.getElementById('loginButton').addEventListener('click', loginWithGoogle);
