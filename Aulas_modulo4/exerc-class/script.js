const marcas = document.querySelector('.marca');
const marcaTable = document.querySelector('.marcaTable');
const load = document.querySelector('p');
const foto = document.querySelector('.foto');
const table = document.querySelector('.table');






marcas.addEventListener('click', function() {
    foto.classList.remove('hidden')
    table.classList.remove('hidden')
    const valores = {
        method: "GET",
        mod: "cors",
    };
    fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3`, valores)
                .then(response => response.json())
                .then(resp => preencherTabela(resp))
                .then(resp => marcaTable.innerHTML = resp) 
                .catch(err => err)
});

const preencherTabela = (dados) => {
    if(!dados) {
    load.textContent = "Não existem registros a serem exibidos."
      return;
    } else {
        return `
        <tr>
            <td>${dados.AnoModelo}</td>
            <td>${dados.Marca}</td>
            <td>${dados.Modelo}</td>
            <td>${dados.Valor}</td>
         </tr>
         `;
        }
   
  };