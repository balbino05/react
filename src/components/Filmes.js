import React, { Component } from 'react';

class Filmes extends Component{

    // call updateFilmes (App.js)
    handleUpdate = () => {
        this.props.updateFilmes(this.indexNum, this.titulo.value, this.descricao.value, this.categoria.value,  this.ator.value, this.diretor.value);
    }

    render(){

        const {allFilmes, pressEditBtn, pressDelete} = this.props;

        const FilmesList = allFilmes.map((Filmes, index) => {

            return Filmes.isEditing === true ? (
                
                <tr  key={index}>
                    <td><input type="text" ref={(val) => {this.titulo = val}} required defaultValue={Filmes.titulo}/></td>
                    <td><input type="text" ref={(val) => {this.descricao = val}} required defaultValue={Filmes.descricao}/></td>
                    <td><input type="text" ref={(val) => {this.categoria = val}} required defaultValue={Filmes.categoria}/></td>
                    <td><input type="text" ref={(val) => {this.ator = val}} required defaultValue={Filmes.ator}/></td>
                    <td><input type="text" ref={(val) => {this.diretor = val}} required defaultValue={Filmes.diretor}/></td>
                    <td>
                    <input type="button" value="Update" onClick={this.handleUpdate} ref={() => {this.indexNum = index}} classtitulo="btn green"/>
                    </td>
                </tr>

            ) : (

                <tr  key={index}>
                    <td>{Filmes.titulo}</td>
                    <td>{Filmes.descricao}</td>
                    <td>{Filmes.categoria}</td>
                    <td>{Filmes.ator}</td>
                    <td>{Filmes.diretor}</td>
                    <td><button classtitulo="btn white black-text" onClick={() => pressEditBtn(index)}>Edit</button>  |  <button classtitulo="btn red" onClick={()=>pressDelete(index)}>Delete</button></td>
                </tr>

            );
        });

        return(
            <table classtitulo="striped">
                <thead>
                    <tr>
                    <th>titulo</th>
                    <th>descricao</th>
                    <th>categoria</th>
                    <th>ator</th>
                    <th>diretor</th>
                    </tr>
                </thead>
                <tbody>
                    {FilmesList}
                </tbody>
            </table>
        );
    }
}

export default Filmes;