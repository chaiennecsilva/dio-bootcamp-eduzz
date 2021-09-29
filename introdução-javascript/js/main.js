
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://digitalinnovation.one/"); //abre outro guia no mesma janela
    //window.location.href = "http://digitalinnovation.one";//abre na mesma janela e consegue voltar
}

function trocar(elemento) {
    elemento.innerHTML = "Tks por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Tks por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}