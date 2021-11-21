const EstudanteModel = require('../models/EstudanteModel');

let estudantes = [
    {_id:0,nome:"Rafael Pereira",curso:"Ciência da computação",IRA:7},
    {_id:1,nome:"Costa da Silva",curso:"Ciência da computação",IRA:9},
    {_id:2,nome:"Maria de Oliveira",curso:"Ciência da computação",IRA:8},
    {_id:3,nome:"Cristiano",curso:"Direito",IRA:6},
    {_id:4,nome:"Carlos Eduardo",curso:"Fisioterapia",IRA:8}
];
let _id = 5

class EstudanteService{

    static register(data){
        let estudante = new EstudanteModel(
            _id++,
            data.nome,
            data.curso,
            data.IRA
        )
        estudantes.push(estudante)
        return estudante;
    }
    static list(){
        return estudantes;
    }

    static update(_id,data){
        for(let e of estudantes){ //for enhaced
            if(e._id == _id){
                e.nome = data.nome;
                e.curso = data.curso;
                e.IRA = data.IRA;
                return e;
            }
        }
        return null;
    }

    static delete(_id){
        for(let i =0; i <estudantes.length; i++){
            if(estudantes[i]._id == _id){
                estudantes.splice(i,1);
                return true;
            }
        }
        return false
    }

    static retrieve(_id){
        for(let i =0;i<estudantes.length;i++){
            if(estudantes[i]._id == _id){
                return estudantes[i];
            }
        }
        return {};
    }



}

module.exports = EstudanteService