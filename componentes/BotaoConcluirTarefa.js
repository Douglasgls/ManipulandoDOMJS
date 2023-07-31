const BotaoConcluir = () =>{
    const botaoConcluir = document.createElement('button')
    botaoConcluir.classList.add('check-button')
    botaoConcluir.innerText = 'Concluir'
   

    botaoConcluir.addEventListener('click',concluirTarefa)

    return botaoConcluir 
}


const concluirTarefa = (evento) =>{
    const botaoConcluir = evento.target
    const tarefaConcluir = botaoConcluir.parentElement
    tarefaConcluir.classList.toggle('done')
    
}


export default BotaoConcluir