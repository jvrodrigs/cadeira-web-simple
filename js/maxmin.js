function toma(ev) {
    if (ev.keyCode === 13) {
      return MaxMin()
    }
  }

  function MaxMin() {
    var numeroTxt = document.getElementById("numeroM")
    var numeroInt = numeroTxt.value.split(",")
    if (numeroM.value == "" || numeroM.value == null) {
      alert("Informe os números.")
    } else {
      var Max = numeroInt[0]
      var Min = numeroInt[0]
      var i = 0
      while (i <= numeroInt.length) {
        if (Max < numeroInt[i]) {
          Max = numeroInt[i]
        }
        if (Min > numeroInt[i]) {
          Min = numeroInt[i]
        }
        i++
      }
      var mensagem = "O maior número é " + Max + " e o menor " + Min
      var pmensagem = document.getElementById("resultado")
      pmensagem.innerText = mensagem
    }
  }