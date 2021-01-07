import React from 'react'
import './Footer.css'

export default () => {
    return (
        <footer>
            <p>
                Feito com <span role="img" aria-label="Coração">💜</span> <a href="https://natanaelsilva.vercel.app/" target="blanck">Natanael Silva</a>
            </p>
            <p>
                Direitos de imagem para Netflix <br/>
                Dados pegos do site <a href="https://www.themoviedb.org/">Themoviedb.org</a>
            </p>
        </footer>
    );
}