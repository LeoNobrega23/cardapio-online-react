import Buscador from './Buscador';
import styles from './Cardapio.module.scss';
import { ReactComponent as Logo } from 'assets/favicon.svg';
import React from 'react'
import Filtros from './Filtros';
import Ordenador from './Ordenador/index'
import Itens from './Itens';

export default function Cardapio () {
const [busca, setBusca] = React.useState("")
const [filtro, setFiltro] = React.useState<number | null>(null)
const [ordenador, setOrdenador] = React.useState("")
    return (
        <main>
            <nav className={styles.menu}>
               <Logo />
               <header className={styles.header}>
                <div className={styles.header__text}>
                    Casa de massas e diversosc
                </div>
               </header>

               <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>
                </h3>
                <Buscador busca={busca} setBusca={setBusca}/>
                <div className={styles.cardapio__filtros}>
                    <Filtros 
                        filtro={filtro}
                        setFiltro={setFiltro}/>
                        <Ordenador 
                        ordenador={ordenador}
                        setOrdenador={setOrdenador}/>
                </div>
                <Itens  busca={busca} filtro={filtro} ordenador={ordenador} />
               </section>
            </nav>
        </main>
    )
}