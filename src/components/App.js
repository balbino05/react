import React, { Component } from 'react';
import Filmes from './Filmes';
import AddFilmes from './AddFilmes';

class App extends Component{

    // Default dummy data
    state = {

        Filmes:[
          {titulo:"Star Wars", descricao:"Ação", categoria:"Ação", ator:"dwayne jhoson", diretor:"Steven Spielberg", imagens:"", isEditing:false},
          {titulo:"Star Trek", descricao:"Sci-fi", categoria:"Ação", ator:"Travis Jackson", diretor:"Travis Jackson", imagens:"", isEditing:false},
          {titulo:"Senhor do Aneis", descricao:"Medieval", categoria:"Ação", ator:"Travis Jackson", diretor:"Travis Jackson", imagens:"", isEditing:false},
          {titulo:"Matrix", descricao:"Tecnologia", categoria:"Ação", ator:"Travis Jackson", diretor:"Travis Jackson", imagens:"", isEditing:false}
        ],

        Categoria: [
            {Nome:"Ação"},
            {Nome:"Suspense"},
            {Nome:"Terror"},
            {Nome:"Romance"}
        ],

        Ator: [
            {Nome: "The Rock", Sexo: "Masculino"},
            {Nome: "Scarlett Johasson", Sexo: "Feminino"},
            {Nome: "Omar Sy", Sexo: "Masculino"}
        ],
        Diretor:[
            {Nome: "The Rock", Sexo: "Masculino"},
            {Nome: "Scarlett Johasson", Sexo: "Feminino"},
            {Nome: "Omar Sy", Sexo: "Masculino"}
        ]

      }
      // (newFilmes) is received from AddFilmes.js
      addFilmes = (newFilmes) => {
            let Filmes = [...this.state.Filmes, newFilmes];
            this.setState({
                Filmes
            });     
      }

      // when press edit button
      // (i) is received from Filmes.js
      pressEditBtn = (i) => {
        let Filmes = this.state.Filmes;
        Filmes[i].isEditing = true;
        this.setState({
            Filmes
        });
      }

      // (i, titulo, age) is received from Filmes.js
      updateFilmes = (i, titulo, descricao, categoria, ator, diretor) => {
        let Filmes = this.state.Filmes;
        Filmes[i].titulo = titulo;
        Filmes[i].descricao = descricao;
        Filmes[i].categoria = categoria;
        Filmes[i].ator = ator;
        Filmes[i].diretor = diretor;
        Filmes[i].isEditing = false;

        this.setState({
            Filmes
        });

      }
      // (i) is received from Filmes.js
      pressDelete = (i) => {
        let Filmes = this.state.Filmes.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            Filmes
        });
      }

    render(){
        return(
            <div classtitulo="container">
                <h1>CRUD with React CLI</h1>
                <Filmes allFilmes={this.state.Filmes} pressEditBtn={this.pressEditBtn} updateUser={this.updateFilmes} pressDelete={this.pressDelete} />
                <AddFilmes addFilmes={this.addFilmes}/>
            </div>
        );
    }
}

export default App;