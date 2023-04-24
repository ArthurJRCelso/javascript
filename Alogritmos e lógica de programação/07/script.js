/*

    Faça um programa que tenha um menu e apresente a seguinte mensagem:

    Olá usuário! Digite o número da opção desejada

        1. Cadastrar um item na lista
        2. Mostar itens cadastrados
        3. Sair do programa.

    -------
    O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:

    Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
    Caso o usuário digite 2, ele poderá ver os itens cadastrados
        Se não houver nenhum item cadastrado, mostrar a mensagem:
        "Não existe itens cadastrados"
    Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/
let menu

let items = []

while (menu != 3) {
    menu = prompt(
        `Olá usuário! Digite o número da opção desejada
    
            1. Cadastrar um item na lista
            2. Mostar itens cadastrados
            3. Sair do programa.`
    )

    if (menu == 1) {
        let item = prompt('Adcione um produto a lista:')
        items.push(item)

    } else if (menu == 2) {

        if (items.length == 0) {
            alert('Não tem item adcionado na lista!!!')
            
        } else {
            alert(items)
        }
    } else {
        alert('Obrigado!')
    }
}



