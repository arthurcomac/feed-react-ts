import styles from './Sidebar.module.css'
import { PencilSimpleLine } from "phosphor-react";
import { Avatar } from './Avatar';

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/arthurcomac.png" alt='imagem avatar' />
        <strong>Arthur Machado</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilSimpleLine size={20} weight='bold' />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}