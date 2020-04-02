
        function toma(ev) {
            if (ev.keyCode === 13) {
                return Somatorio();
            }
        }
    
        function Somatorio() {
            var txtSomatorio = document.getElementById("txtSomatorio");
            var n = parseInt(txtSomatorio.value);
            if (txtSomatorio.value == "" || txtSomatorio.value == null) {
                alert("Informe um número.")
            } else {
                var soma = 0;
                var i = 1;
    
                while (i <= n) {
                    soma = soma + i;
                    i++;
                    console.log(soma);
                }
    
                var mensagem = "A soma dos " + n + " números é " + soma;
    
                var pMensagem = document.getElementById("mensagem");
                pMensagem.innerText = mensagem;
            }
    
        }