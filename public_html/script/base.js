var nome = prompt("Digite seu nome: ");

$(function(){
    $("h1.myname").html(nome)

    $("ul#listaContatos li.contato").on("click", function(){
        var nome = $(this).attr("userName")
        var id = $(this).attr("userId")

        $("ul#conversa").html(" ")
        $("h1.conversaTitle").html(nome)
        $("textarea").attr("idTo", id)
    })
});