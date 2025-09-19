import Image from 'next/image'
import './funds.css'

const Funds = () => {
    return (
        <section className='fundsContainer'>
            <div className='funds'>
                <div className="funds-text">
                    <h5>Automatizētas optiskās šķiedras lāzergriešanas iekārtas ar programmatūru iegāde</h5>
                    <p>SIA “METĀRO” ir noslēdzis līgumu ar Akciju sabiedrību „Attīstības finanšu institūcija Altum” (ALTUM) par automatizētas optiskās šķiedras lāzergriešanas iekārtas ar programmatūru iegādi un uzstādīšanu. Projekta kopējās izmaksas: 475 000,00 EUR, bet Atveseļošanās fonda (AF) finansējums sastāda 166 250,00 EUR. </p>
                </div>
                <Image src='/footerInfo.png' alt='Nacionālais Attīstības Plāns 2020' width={459} height={240} />
            </div>
        </section>
    )
}

export default Funds
