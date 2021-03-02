import React from 'react'
import './cadastrar-show.css'
import NavBar from "../../componentes/navbar";

function CadastrarShow (){
    return (
        <div>
            <NavBar/>
            <div className='row'>

                <form className='col-4 ml-3 mt-1' id="formShow">
                    <h2 className='ml-1'>Cadastrar um Show</h2>
                    <div className="form-group">
                        <input type="text"  name="nome" className="form-control" placeholder="Nome do show"/>
                    </div>
                    <div className="form-group">
                        <h5>Data</h5>
                        <input className="col-12" type="date" name="dataDoShow"/>
                    </div>

                    <div className="form-group">
                        <h5>Local</h5>
                        <select name="local" className="form-control" form="formShow">
                            <option>Local 1</option>
                            <option>Local 2</option>
                            <option>Local 3</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input name="salvar" className="btn btn-dark col-12" type="submit" value="Salvar show"/>
                    </div>
                </form>
                <ul className="list-group mt-2 mr-5 ml-5">
                    <li className="list-group-item bg-dark text-white font-weight-bold">Bandas do show</li>
                    <li className="list-group-item">Show 1 <a href="" className="font-weight-bold text-danger">X</a></li>
                    <li className="list-group-item">Show 2 <a href="" className="font-weight-bold text-danger">X</a></li>
                    <li className="list-group-item">Show 3 <a href="" className="font-weight-bold text-danger">X</a></li>
                </ul>
                <ul className="list-group mt-2">
                    <li className="list-group-item bg-dark text-white font-weight-bold">Bandas disponíveis</li>
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
export default CadastrarShow