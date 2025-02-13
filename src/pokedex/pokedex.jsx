import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './pokedex.css';

export function Pokedex() {
  return (
    <main>
        <table className="pokedex-table">
            <tbody>
                <tr>
                    <td><p>#1 Bulbasaur</p><img  src="/questionmark.png" alt="Bulbasaur"></img></td>
                    <td><p>#2 Ivysaur</p><img src="/questionmark.png" alt="Ivysaur"></img></td>
                    <td><p>#3 Venusaur</p><img src="/questionmark.png" alt="Venusaur"></img></td>
                    <td><p>#4 Charmander</p><img src="/questionmark.png" alt="Charmander"></img></td>
                    <td><p>#5 Charmeleon</p><img src="/questionmark.png" alt="Charmeleon"></img></td>
                    <td><p>#6 Charizard</p><img src="/questionmark.png" alt="Charizard"></img></td>
                    <td><p>#7 Squirtle</p><img src="/questionmark.png" alt="Squirtle"></img></td>
                    <td><p>#8 Wartortle</p><img src="/questionmark.png" alt="Wartortle"></img></td>
                    <td><p>#9 Blastoise</p><img src="/questionmark.png" alt="Blastoise"></img></td>
                    <td><p>#10 Caterpie</p><img src="/questionmark.png" alt="Caterpie"></img></td>
                </tr>
                <tr>
                    <td><p>#11 Metapod</p><img src="/questionmark.png" alt="Metapod"></img></td>
                    <td><p>#12 Butterfree</p><img src="/questionmark.png" alt="Butterfree"></img></td>
                    <td><p>#13 Weedle</p><img src="/questionmark.png" alt="Weedle"></img></td>
                    <td><p>#14 Kakuna</p><img src="/questionmark.png" alt="Kakuna"></img></td>
                    <td><p>#15 Beedrill</p><img src="/questionmark.png" alt="Beedrill"></img></td>
                    <td><p>#16 Pidgey</p><img src="/questionmark.png" alt="Pidgey"></img></td>
                    <td><p>#17 Pidgeotto</p><img src="/questionmark.png" alt="Pidgeotto"></img></td>
                    <td><p>#18 Pidgeot</p><img src="/questionmark.png" alt="Pidgeot"></img></td>
                    <td><p>#19 Rattata</p><img src="/questionmark.png" alt="Rattata"></img></td>
                    <td><p>#20 Raticate</p><img src="/questionmark.png" alt="Raticate"></img></td>
                </tr>
            </tbody>
        </table>
    </main>
  );
}