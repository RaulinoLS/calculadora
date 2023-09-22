var operadores = {
    adicao: function (x, y) {
        return x + y;
    },
    subtracao: function (x, y) {
        return x - y;
    },
    divisao: function (x, y) {
        return x / y;
    },
    multiplicacao: function (x, y) {
        return x * y;
    }
}

function conta(operador, x, y) {

    return !operadores[operador] ? "Operação não existente" : operadores[operador](x, y);

}

$("#calcular").click(function () {


    var x = $("#x").val();
    var y = $("#y").val();
    x = +x;
    y = +y;
    var operacao = $("#operacao").val();

    $("#resultado").attr("value", conta(operacao, x, y).toFixed(2));

});