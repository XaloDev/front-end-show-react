import React from 'react'
import NavBar from "../../componentes/navbar";

function CadastrarLocal (){
    return (
        <div>
            <NavBar/>
            <div className='row'>

                <form className='col-4 ml-3 mt-1' id="formLocal">
                    <h2 className='ml-1'>Cadastrar um Local</h2>
                    <div className="form-group">
                        <input type="text"  name="nome" className="form-control" placeholder="Nome do Local"/>
                    </div>
                    <div className="form-group">
                        <input type="text"  name="endereco" className="form-control" placeholder="Endereço do Local"/>
                    </div>
                    <div className="form-group">
                        <input type="text"  name="capacidade" className="form-control" placeholder="Capacidade do Local"/>
                    </div>

                    <div className="form-group">
                        <input name="salvar" className="btn btn-dark col-12" type="submit" value="Salvar local"/>
                    </div>
                </form>
                <ul className="list-group mt-2 mr-5 ml-5">
                    <li className="list-group-item bg-dark text-white font-weight-bold">Shows do local</li>
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
export default CadastrarLocal