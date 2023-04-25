students = [
    {
        name: 'Arthur',
        n1: 9,
        n2: 8,
    },
    {
        name: 'Camila',
        n1: 10,
        n2: 9,
    },
    {
        name: 'Elisa',
        n1: 7,
        n2: 6,
    },
    {
        name: 'Heitor',
        n1: 8,
        n2: 5,
    },
]

let average = function(note1, note2) {
    return ((note1 + note2) / 2).toFixed(1)
}

let printStudent = function(student) {
    return `
    A média do(a) aluno(a) ${student.name} é: ${average(student.n1, student.n2)}`
}


for (let student of students) {
    let result = average(student.n1, student.n2)
    if (result >= 7) {
        alert(`${printStudent(student)} 
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
    } else {
        alert(`${printStudent(student)} 
    Não foi dessa vez, ${student.name}! Tente novamente!`)
    }
}