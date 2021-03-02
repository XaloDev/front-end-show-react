import React from 'react'
import './show.css'
import {Link} from 'react-router-dom'


import NavBar from '../../componentes/navbar/index'


function Show(){
    return(
        <div id="divDoShow" >
        <NavBar/>

        <div id="divDaTabelaShow" className="mt-2" >
            <table className="table col-6 mt-2 ml-2">
                <thead className="thead-dark">
                <tr>

                    <th scope="col">Nome do Show</th>
                    <th scope="col">Data do Show</th>
                    <th scope="col">Local do Show</th>
                    <th scope="col">Ações</th>
                </tr>
                </thead>
                <tbody>
                <tr>

                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>

                        <a href="#">Exibir bandas </a>
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

                        <a href="#">Exibir bandas </a>
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

                        <a href="#">Exibir bandas </a>
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

                    <th scope="col">Bandas</th>
                    <th scope="col">Ação</th>

                </tr>
                </thead>
                <tbody>
                <tr>

                    <td>Nirvana</td>
                    <td><a href="/">Remover</a></td>

                </tr>
                <tr>

                    <td>chiclete com Banana</td>
                    <td><a href="/">Remover</a></td>

                </tr>
                <tr>

                    <td>Aviões do forró</td>
                    <td><a href="/">Remover</a></td>

                </tr>
                </tbody>
            </table>
            <Link to="/cadastrar-show">
                <button id="botaoAdcionarShow" type="button" className="btn btn-dark">Adcionar show <b>+</b></button>
            </Link>
        </div>


        </div>
    )
}

export default Show;