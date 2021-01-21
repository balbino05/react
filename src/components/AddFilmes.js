import React,{ Component } from 'react';

class AddFilmes extends Component{

    state = {
        titulo:null,
        categoria:null,
        isEditing:false
    }
    //call addUser (App.js)
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addFilmes(this.state);  
        e.target.reset();

    }
    // update state
    updateState = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        });
    }

    render(){
        return(
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s4">
                        <input name="titulo" autoComplete="off" placeholder="Adicionar titulo" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input name="descricao" autoComplete="off" type="text" required placeholder="Adicionar descrição" onChange={ this.updateState } />
                    </div>
                    <div className="input-field col s2">
                        <input name="categoria" autoComplete="off" type="text" required placeholder="Adicionar categoria" onChange={ this.updateState } />
                    </div>
                    <div className="input-field col s2">
                        <input name="ator" autoComplete="off" type="text" required placeholder="Adicionar ator" onChange={ this.updateState } />
                    </div>
                    <div className="input-field col s2">
                        <input name="diretor" autoComplete="off" type="text" required placeholder="Adicionar diretor" onChange={ this.updateState } />
                    </div>

                    <div className="input-field col s2">
                        <input type="submit" value="Add +" className="btn blue"/>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddFilmes;