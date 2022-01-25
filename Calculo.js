$(document).ready(function() {
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
          if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 900, function(){
                      window.location.hash = hash;
                  });
            }
  });
    var juros = 1.0019;
    var valor = '';
    var parcelas = '';
    $('#valor, #nParcelas').on('change input', function(e) {

        valor = Number($('#valor').val().replace(/\./g, '').replace(',', '.') || 0);
        parcelas = Number($('#nParcelas').val());

        if($("#nParcelas").val() < 1 ||  $("#nParcelas").val()  >  48){
            $("#nParcelas").val('');
            return false
        };

        $('#vParcela').text('R$ ' + ( juros ** parcelas * valor / parcelas).toLocaleString('pt-br'));
        mostraResumo();

    });

});



function mostraResumo() {

    var html = '<table style="margin:1em; padding:2em;">';

    var today = new Date();
    var mes= '';
    var ano= '';
    var parc= '';

    $(".resumo").empty();
    mes = today.getMonth()
    ano = today.getFullYear()
    for (var i = 1; i <= $("#nParcelas").val(); i++) {

        console.log()

        console.log(mes)
        if(mes >= 12) {
            console.log('entrou no if')
            mes = 1;
            ano += 1;
        } else {
            mes += 1;
        }

        date = ano+'-'+mes+'-'+$("#vVencimento").val();
        parc = ""+ $("#vParcela").text();



        html += ""
        html += "<tr>"
        html +=     "<td> Parcela: " + i + "</td>"
        html +=     "<td> Vencimento: " + date + "</td>"
        html +=     "<td> Valor da Parcela:" + parc + "<td>"

    }

    $(".resumo").append(html)

}
