import React from 'react'
import './castrar-banda.css'
import NavBar from "../../componentes/navbar";

function CadastrarBanda (){
    return (
        <div>
            <NavBar/>
            <div className='row'>

            <form className='col-4 ml-3 mt-1' id="formBanda">
                <h2 className='ml-1'>Cadastrar uma Banda</h2>
                <div className="form-group">
                    <input type="text"  name="nome" className="form-control" placeholder="Nome da banda"/>
                </div>

                <div className="form-group">
                    <select name="genero" className="form-control" form="formBanda">
                        <option>Axé</option>
                        <option>Forró</option>
                        <option>Rock</option>
                    </select>
                </div>

                <div className="form-group">
                    <input name="salvar" className="btn btn-dark col-12" type="submit" value="Salvar banda"/>
                </div>
            </form>
                <ul className="list-group mt-2 mr-5 ml-5">
                    <li className="list-group-item bg-dark text-white font-weight-bold">Shows da banda</li>
                    <li className="list-group-item">Show 1 <a href="" className="font-weight-bold text-danger">X</a></li>
                    <li className="list-group-item">Show 2 <a href="" className="font-weight-bold text-danger">X</a></li>
                    <li className="list-group-item">Show 3 <a href="" className="font-weight-bold text-danger">X</a></li>
                </ul>
                <ul className="list-group mt-2">
                    <li className="list-group-item bg-dark text-white font-weight-bold">Shows disponíveis</li>
                    <li className="list-group-item"><span>Dapibus ac facilisis in   </span>
                        <a href="" className="font-weight-bold"> Adcionar </a>
                    </li>
                    <li className="list-group-item"><span>Dapibus ac facilisis in   </span>
                        <a href="" className="font-weight-bold"> Adcionar </a>
                    </li>
                    <li className="list-group-item"><span>Dapibus ac facilisis in   </span>
                        <a href="" className="font-weight-bold"> Adcionar </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}
export default CadastrarBanda