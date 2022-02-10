/* Utilizando dois vetores de objetos e um menu de opções, faça um programa que crie funções para

1) cadastrar 1 pessoa contendo rg, cpf e nome

2) cadastrar 1 imóvel contendo código, endereço, tamanho, tipo, valor e rg do dono. 
Não pode criar imóvel de pessoa que não esteja cadastrada

3) A partir de um RG informado, calcula e mostra o valor total em imóvel desta pessoa, 
mostrando também o nome

4) Calcula e mostra o cpf da pessoa que tem o imóvel mais caro*/

function cadastraPessoa(vetPessoa){
    let objeto = {
        rg: prompt(`Informe o rg`),
        cpf: prompt(`Informe o cpf`),
        nome: prompt(`Informe o nome do pessoa`)    
    }
    let achou = false
    for(let i=0;i<vetPessoa.length;i++){
        if (vetPessoa[i].rg == objeto.rg){
            achou = true 
        }
    }
    if (achou) {
        alert(`Rg ja cadastrado`)
    }
    else {
        vetPessoa.push(objeto) 
        alert(`Pessoa cadastrada com sucesso`)
    }
}

function cadastraImovel(vetPessoa, vetImovel){
    let objeto = {
        pessoa: prompt(`Informe o rg do pessoa`),
        tipo: Number(prompt(`Informe o tipo do imovel`)),
        valor: Number(prompt(`Informe o valor do imovel`)),
        tamanho: Number(prompt(`Informe o tamanho do imovel`)),
        endereço: Number(prompt(`Informe o endereço do imovel`)),
        pessoa: Number(prompt(`Informe o dono do imovel`))
    
    }
    let achou = false // verifica se o pessoa existe
    for(let i=0;i<vetPessoa.length;i++){
        if (vetPessoa[i].pessoa == objeto.pessoa){
            achou = true // existe
        }
    }
    if (!achou){
        alert(`pessoa não existe`)
    }
    else {
        achou = false
        for(let i=0;i<vetImovel.length;i++){
            if ((vetImovel[i].pessoa == objeto.pessoa) && (vetImovel[i].pessoa == objeto.pessoa)){
                achou = true
            }
        }
        if (achou){
            alert(`Já existe um imovel desta pessoa com esse pessoa`)
        }
        else {
            vetImovel.push(objeto)
            alert(`Imovel cadastrado com sucesso`)
        }
    }
}

function calculaImovelPessoa(vetImovel, pessoaInteresse){
    console.log(`Entrou na função com 2 parâmetros`)
    let achou = false
    let soma = 0
    for(let i=0;i<vetImovel.length;i++){
        if ((vetImovel[i].pessoa == pessoaInteresse)){
            soma = soma + vetImovel[i].valor
            achou = true
        }
    }
    if (!achou){
        alert(`Não foi encontrado imovel para o pessoa ${pessoaInteresse}`)
    }
    else {
        alert(`O total de Imovel da pessoa ${pessoaInteresse} é ${soma}`)
    }
}

function calculaMaiorValorImovel(vetImovel){
    let maiorImove = 0
    let Dono = ""
    let achou = false
    for(let i=0;i<vetImovel.length;i++){
       
        if (vetImovel[i].valor > maiorImove){
            maiorImove = vetImovel[i].valor
            Dono = vetImovel[i].Pessoa
        }
        
    }
    if (achou){
        alert(`O maior Imovel é de ${Dono} no valor de ${maiorImove}`)
    }
    else {
        alert(`Não existe Imovel mais caro`)
    }
}

function Exer_1(){
    let opcao
    let vetPessoas = []
    let vetImovel = []
    do {
        opcao = Number(prompt("Informe \n1. Cadastrar pessoa \n2. Cadastrar imovel \n3. Mostra imoveis a partir de pessoa \n4. Imovel mais caro \n5. Sair"))
        switch(opcao){
            case 1: cadastraPessoa(vetPessoas)
                    break

            case 2: cadastraImovel(vetPessoas, vetImovel)
                    break

            case 3: let pessoaInteresse = prompt(`Informe código do Pessoa`)
                    calculaImovelPessoa(vetImovel, pessoaInteresse)
                    break

            case 4: let codInteresse = prompt(`Informe código do vendedor`)
                    calculaMaiorValorImovel(vetImovel)
                    break

            case 5: alert("Finalizando o programa")
                    break
            default: alert("Opção inválida") 
         
        }
    } 
    while (opcao !=5) 
}  

function Exer_2(){
    let vetor = new Array(5)
    for(let i=0; i<5; i++){
        let objeto = {
            marca: prompt(`Informe a marca do carro`),
            modelo: Number(prompt(`Informe o modelo do carro`)),
            tipo: Number(prompt(`Informe o tipo do carro`)),
            valor: Number(prompt(`Informe o valor do carro`)),
            
        }
        vetor[i]= objeto
    }
}