var pizza = document.getElementById("pizza");
var bebida = document.getElementById("bebida");
var valor = document.getElementById("valor");

cad.addEventListener("click", function(){
    if(pizza.value.trim() !== "" && bebida.value.trim() !== "" && valor.value.trim() !== ""){
        var tr = document.createElement("tr");
        tr.innerHTML = `<td>${pizza.value.trim()}</td> 
        <td>${bebida.value.trim()}</td>
        <td>${valor.value.trim()}</td>`;

        pizza.appendChild(tr);
        bebida.appendChild(tr);
        valor.appendChild(tr);
    }else{
        alert("Preencha os campos!")
    }
});