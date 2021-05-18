const buscarCep = async () => {
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`
    const endereco = await fetch(url).then((response) => response.json())
    
    document.getElementById("logradouro").value = endereco.logradouro
    document.getElementById("bairro").value = endereco.bairro
    document.getElementById("localidade").value = endereco.localidade
}

document.getElementById('cep').addEventListener('blur', buscarCep);


