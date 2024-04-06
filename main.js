$(document).ready(function () {
    $("#telefone").mask("(00) 0 0000-0000");
    $("#cpf").mask("000.000.000-00");
    $("#cep").mask("00000-000");
    $("#datadenascimento").mask(`00/00/0000`);
    $("#rg").mask(`0000000-0`)
    $("form").validate({
    rules: {
        nome: { required: true },
        email: { required: true, email: true },
        telefone: { required: true },
        cpf: { required: true },
        endereco: { required: true },
        date: { required: true },
    },
    messages: {
        nome: "Insira seu nome completo",
        email: "Insira um email valido",
        telefone: "Insira um numero de celular",
        cpf: "Coloque seu CPF",
        endereco: "Insira seu endenço completo",
        cep: "Insira o CEP de sua rua",
        date: "Insira a data de nascimento",
        rg: "Insira o rg",
        cidade: "Insira a cidade",
        estado:"Insira o estado",
    },
    submitHandler: function (form) {
        alert(`Cadastro concluído com sucesso!`);

        nome.value = "";
        email.value = "";
        telefone.value = "";
        cpf.value = "";
        endereco.value = "";
        cep.value = "";
        data.value = "";
        rg.value = "";
        cidade.value = "";
        estado.value = "";
    },
    invalidHandler: function (evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
        alert(`Exitem ${camposIncorretos} campos incorretos ou vazios`);
        }
    },
    });
});