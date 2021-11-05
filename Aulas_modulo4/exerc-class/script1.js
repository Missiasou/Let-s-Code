const marca = document.querySelector('.marca')





async function retornarMarcaDaApi() {
    try {
        return await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
                        .then(response => response.json())
                            .catch(err => err)
    } catch (err) {
        return err;
    }
}



const lista = retornarMarcaDaApi()
console.log(lista)

const marcas = ({codigo,nome}) => `
<tr codigo="${codigo}">
   <td>${nome}</td>
</tr>
`;

const preencherDados = (usuarios) => {
    const listaDeUsuariosHTML = usuarios.map(usuario => marcas(usuario)).join('') 
    tabelaUsuarios.innerHTML = listaDeUsuariosHTML
    loading.textContent = `Foram encontrados ${usuarios.length} registros.`
}

const carregarDados = (dados) => {
    promise.all([retornarMarcaDaApi()]).then((values) =>{
        const novosDados = [...values]
        preencherDados(novosDados);
    })
}

