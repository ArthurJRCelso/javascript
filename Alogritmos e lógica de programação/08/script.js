/*
    Crie uma lista de pacientes

    Cada paciente dentro da lista, deverá conter
        nome
        idade
        peso
        altura

    Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
    {
        name: "Arthur",
        age: 26,
        weight: 95,
        height: 186,
    },
    {
        name: "Camila",
        age: 22,
        weight: 55,
        height: 162,
    },
    {
        name: "Camisinha",
        age: 26,
        weight: 98,
        height: 182,
    },
]

const patientNames = []
const patientAge = []
const patientWeight = []
const patientHeight = []

/*
 
 for (let index = 0; index < patients.length; index++) {
    patientNames[index] = patients[index].name
} 

*/

for (let patient of patients) {
    patientNames.push(patient.name)
    patientAge.push(patient.age)
    patientWeight.push(patient.weight)
    patientHeight.push(patient.height)
}

for (let index = 0; index < patients.length; index++) {
    alert(`${patientNames[index]} tem ${patientAge[index]}, pesa ${patientWeight[index]}, e tem ${patientHeight[index]}cm`)
}