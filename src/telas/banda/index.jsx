import React from 'react'
import './banda.css'
import {Link} from 'react-router-dom'

import NavBar from '../../componentes/navbar/index'


function Banda(){
    return(
        <div id="divDaBanda" >
        <NavBar/>

        <div id="divDaTabelaBanda" className="mt-2" >
            <table className="table col-6 mt-2 ml-2">
                <thead className="thead-dark">
                <tr>

                    <th scope="col">Nome da Banda</th>
                    <th scope="col">Gênero</th>
                    <th scope="col">Ações</th>
                </tr>
                </thead>
                <tbody>
                <tr>

                    <td>Mark</td>
                    <td>Otto</td>
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

                    <td>Show</td>
                    <td><a href="/">Remover</a></td>

                </tr>
                <tr>

                    <td>Shows</td>
                    <td><a href="/">Remover</a></td>

                </tr>
                <tr>

                    <td>Show</td>
                    <td><a href="/">Remover</a></td>

                </tr>
                </tbody>
            </table>
           <Link to="/cadastrar-banda">
               <button id="botaoAdcionarBanda" type="button" className="btn btn-dark">Adcionar banda <b>+</b></button>
           </Link>
        </div>


        </div>
    )
}

export default Banda;