const buscarCep = () => {
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`
    alert(cep)
}

document.getElementById('cep').addEventListener('blur', buscarCep);


// const cep = document.querySelector("#cep").value; 
// console.log(cep)

