import React from 'react'
import './local.css'
import {Link} from 'react-router-dom'


import NavBar from '../../componentes/navbar/index'


function Local(){
    return(
        <div id="divDoLocal" >
        <NavBar/>

        <div id="divDaTabelaLocal" className="mt-2" >
            <table className="table col-7 mt-2 ml-2">
                <thead className="thead-dark">
                <tr>

                    <th scope="col">Nome do Local</th>
                    <th scope="col">Endereço do Local</th>
                    <th scope="col">Capacidade do Local</th>
                    <th scope="col">Ações</th>
                </tr>
                </thead>
                <tbody>
                <tr>

                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>

                        <a href="#">Exibir shows </a>
                        |
                        <a href="#"><span> </span>Alterar </a>
                        |
                        <a href="#"><span> </span>Remover</a>

                    </td>
                </tr>
                <tr>

                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>

                        <a href="#">Exibir shows </a>
                        |
                        <a href="#"><span> </span>Alterar </a>
                        |
                        <a href="#"><span> </span>Remover</a>

                    </td>
                </tr>
                <tr>

                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>

                        <a href="#">Exibir shows </a>
                        |
                        <a href="#"><span> </span>Alterar </a>
                        |
                        <a href="#"><span> </span>Remover</a>

                    </td>
                </tr>
                </tbody>
            </table>
            <table className="table col-4 mt-2 ml-2">
                <thead className="thead-dark">
                <tr>

                    <th scope="col">Shows</th>
                    <th scope="col">Ação</th>

                </tr>
                </thead>
                <tbody>
                <tr>

                    <td>Banda</td>
                    <td><a href="/">Remover</a></td>

                </tr>
                <tr>

                    <td>Banda</td>
                    <td><a href="/">Remover</a></td>

                </tr>
                <tr>

                    <td>Banda</td>
                    <td><a href="/">Remover</a></td>

                </tr>
                </tbody>
            </table>
            <Link to="/cadastrar-local">
                <button id="botaoAdcionarLocal" type="button" className="btn btn-dark">Adcionar local <b>+</b></button>
            </Link>
        </div>


        </div>
    )
}

export default Local;