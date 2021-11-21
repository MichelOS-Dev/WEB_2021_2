import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow'
import { Tab } from 'bootstrap';


export default class List extends Component{

    constructor(props){
        super(props)
        this.state = {estudantes:[]}
        this.apagarElementoPorID = this.apagarElementoPorID.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:3002/estudantes/list')
        .then(
            (res)=>{
                this.setState({estudantes:res.data})
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    montarTabela(){
        if(!this.state.estudantes) return
        return this.state.estudantes.map(
            (estudante, i) => {
                return <TableRow estudante={estudante} key={i} apagarElementoPorID={this.apagarElementoPorID} />
            }
        )
    }

    apagarElementoPorID(id){
        let tempEstudantes = this.state.estudantes
        for(let i = 0;i<tempEstudantes.length;i++){
            if(tempEstudantes[i]._id === id){
                tempEstudantes.splice(i,1)
            }
        }
        this.setState({estudantes:tempEstudantes})
    }

    render(){
        return(
            <div>
               <h3>Listar Estudantes</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>IRA</th>
                            <td colSpan="2"></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>
                </table>
            </div>
        )
    }
}