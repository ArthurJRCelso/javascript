/*
    Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

    "Paciente X possui o IMC de: Y"

    Onde X é o nome do paciente e Y é o IMC desse paciente

    Crie uma função para fazer cálculo de IMC

    peso / (altura * altura)
*/

let imc = []
let patientName = []
let patientWeight = []
let patientHeight = []

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

const printPatientIMC = function (patient) {
    return `
    Paciente ${patient.name} possui o IMC de 
    ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}`
}

for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
}

