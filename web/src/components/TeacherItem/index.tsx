import React from 'react';
import whatsappIcon from '../../assets/icons/whatsapp.svg';
import './style.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGQ0cJMG3sbFQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=tWBAmUcZwLGNHRvECsGOce1ubsr06sd56O5gkC1k6x8" alt="Foto do Professor"/>
                <div>
                    <strong>Marcelo Américo</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>Lorem, ipsum dolor sit amet consectetur audantium dolor.
                <br /><br />
                debitis temporibus eaque, quo, eos libero accusamus non hic maxime. Fugit facere eveniet eum!
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 40,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}
export default TeacherItem;