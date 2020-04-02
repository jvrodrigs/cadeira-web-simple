function toma(ev) {
    if (ev.keyCode === 13) {
        return Fatorial()
    }
}
function Fatorial() {
    var txtFatorial = document.getElementById("txtFatorial");
    if (txtFatorial.value == "" || txtFatorial.value == null) {
        alert("Informe um número.")
    } else {
        var n = parseInt(txtFatorial.value)
        var fatorial = 1;
        var i = n;
        while (i >= 1) {
            fatorial = fatorial * i;
            i = i - 1;
        }

        var mensagem = "O Fatorial " + txtFatorial.value + " é " + fatorial;

        var pMensagem = document.getElementById("mensagem");
        pMensagem.innerText = mensagem;
    }

}