import styles from './Home.module.css'

import teste from '../../img/teste.jpeg'

import LinkButtom from '../layout/LinkButtom'



function Home() {
    return (
        <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>Sonho da Dri</span>
            </h1>
            <p>Faça sua encomenda de bolo com a gente!</p>
            <div className={styles.bolo_container}>
                <img src={teste} alt="Bolo 1" />
                <img src={teste} alt="Bolo 1" />
                
            </div>
            <LinkButtom to='/Menu' text='Ver Cardapio' />

         
        </section>
    )
}

export default Home