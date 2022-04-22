import Head from 'next/head'
import Style from '../styles/index.module.css'
import Image from 'next/image'


const Home = ({projetos}) => {

    let name = "Nicolas dos Santos Lira"


    return(
        <>
        
            <Head>
                <meta charset='UTF-8'/>
                <title>{name}</title>
            </Head>

            <main>

                <div className={Style.header}>
                    <div className={Style.conteiner}>
                        <Image
                            priority 
                            src={"/image/me.jpg"}
                            height={150}
                            width={150}
                            className={Style.meImage}
                        />
                        <h1 className={Style.titleHeader}>{name}</h1>
                        <p className={Style.descHeader}>Desenvolvedor Full-Stack Júnior</p>
                    </div>

                    <div className={Style.animateArrow}>
                        <p className={Style.textArrow}>veja meus projetos</p>
                        <i className={Style.arrow}></i>
                    </div>

                </div>

                <section className={Style.projetos}>

            
                    
                    {projetos.map((projeto) => (
                    <>
                        <div className={Style.itemProjetos} key={projeto.Id}>
                            <a href={projeto.Link} className={Style.hoverEfect}>
                                <Image
                                    priority
                                    src={'/image/projetos/'+ projeto.Imagem +'.PNG'}
                                    width={455}
                                    height={170}
                                    className={Style.imagem}
                                />
                            </a>

                            <div className={Style.colProjeto}>
                                <h1>{projeto.Titulo}</h1>
                                <p><b>Descrição: {' '}</b> {projeto.Descricao}</p>
                                <hr/>
                                <p><b>Tecnologias utilizadas:</b> {' ' + projeto.LT + '.'}</p>

                            </div>
                        </div>
                    </>
                    ))}
        

                </section>

            </main>


        </>
    
    )
}


export const getStaticProps = async () => {
    const res = await fetch('https://nicolasdslira.github.io/Projetos/')
    const projetos = await res.json()

    return{
        props: {
            projetos,
        },
    }
}

export default Home