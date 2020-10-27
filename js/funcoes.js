/*function exibir_categoria( id_produto ){

    // PEGUEI TODOS OS ELEMENTOS QUE CONTÉM A CLASSE box_produtos
    let elementos_box_produtos = document.getElementsByClassName("box_produtos");
    

    for ( let contador = 0;  contador < elementos_box_produtos.length; contador++ ) {

        if ( id_produto == elementos_box_produtos[contador].id ) {

            document.getElementById("produtos").style.display = "none";
        
            console.log(elementos_box_produtos[contador])
            document.getElementById("mostrarProdutos").style.display = "flex";
            document.getElementById("mostrarProdutos").style.flexWrap = "wrap";
            document.getElementById("mostrarProdutos").appendChild(elementos_box_produtos[contador]);
            
            
            

        };

    };

};

*/



function exibir_categoria(categoria){
let elementos = document.getElementsByClassName('box_produtos');
console.log(elementos);

for(var i=0; i<elementos.length; i++){
console.log(elementos[i].id);

if(categoria == elementos[i].id)
elementos[i].style = "display:block";

else
elementos[i].style = "display:none";
}
}  

let exibir_todos = () => {
    let elementos = document.getElementsByClassName('box_produtos');
    
    for(var i=0; i<elementos.length; i++){
    elementos[i].style="display:block";
    
    
    
   
    }
};

let destaque = (imagem) => {
console.log(imagem);
if (imagem.width==240)
imagem.width=120
else
imagem.width=240;
}



























