import styles from "./Ordenador.module.scss"
import opcoes from "./opcoes.json"

export default function Ordenador() {
    return (
        <button className="styles.ordenador">
            <span>Ordernar Por</span>
            <div className={styles.ordenador__options}>
                {opcoes.map(opcao => (<div className={styles.ordenador__option} key={opcoes.value}>
                    {opcoes.nome}

                </div>))}
            </div>
        </button>
    )
}