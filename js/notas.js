

function toma(ev) {
    if (ev.keyCode === 13) {
        return Calcular()
    }
}

function Calcular() {
    var media;
    var nome_aluno = document.getElementById("txtNomeCalc");
    if (nome_aluno.value == "" || nome_aluno.value == null) {
        alert("Informe um nome.")
    }
    var matricula_aluno = document.getElementById("txtMatriculaCalc");
    if (matricula_aluno.value == "" || matricula_aluno.value == null) {
        alert("Informe uma matricula.")
    }
    var nota1_aluno = parseInt(document.getElementById("txtNota1").value);
    var nota2_aluno = parseInt(document.getElementById("txtNota2").value);
    var nota3_aluno = parseInt(document.getElementById("txtNota3").value);

    if (nota1_aluno == null || nota2_aluno== null || nota3_aluno == null) {
        alert("Notas Inválidas.");

    } else {

        media = (nota1_aluno + nota2_aluno + nota3_aluno) / 3;

    }
    var checkboxDiaT = document.getElementById("partok");
    var checkAP = document.getElementById("chkAprovado");

    if (checkboxDiaT.checked) {
        media = media + 1;
    } else {
        console.log("não obteve bonificação.");
    }

    if (media >= 6) {
        console.log("aprovado");
        checkAP.checked = true
    } else {
        checkAprovado.checked = false;
        console.log("não foi aprovado.");
    }

    var nome = nome_aluno.value + " - " + matricula_aluno.value;

    var pnome = document.getElementById("nomee");
    pnome.innerText = nome;

    var mensagem = "A média  é " + media.toFixed(1);

    var pMensagem = document.getElementById("mensagem");
    pMensagem.innerText = mensagem;

}
