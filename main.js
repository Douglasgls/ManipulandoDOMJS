import BotaoConcluir from './componentes/BotaoConcluirTarefa.js'
import BotaoDeleta from './componentes/BotaoDeleta.js'

const botaoNovaTarefa = document.querySelector('[data-form-button]')

const criarNovaTarefa = (evento) => {
    evento.preventDefault()
    
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    const lista = document.querySelector('[date-list]')

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="conteudo"> ${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConcluir())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    input.value = " "
    
}

botaoNovaTarefa.addEventListener('click',criarNovaTarefa)



