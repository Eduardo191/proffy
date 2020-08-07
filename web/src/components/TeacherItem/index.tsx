import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/52423589?s=460&u=17dc5065039746701c505823557a30c641bad0a1&v=4" alt="Eduardo Ferreira"/>
        <div>
          <strong>Eduardo Ferreira</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>Descrição do professor</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem