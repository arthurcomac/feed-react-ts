import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/arthurcomac.png',
      name: 'Arthur Machado',
      role: 'Developer web',
    },
    content: [
      { type: 'paragraph', content: "Fala galera",},
      { type: 'paragraph', content:"acabei de subir mais um projeto no meu portifolio, é um projeto que fiz no nlw", },
      { type: 'paragraph', content: "o nome do projeto é tal", },
      { type: 'link', content: "@arthur-c-machado"},
    ],
    publishedAt: new Date('2023-04-08 18:26:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Maik Brito',
      role: 'Developer teacher',
    },
    content: [
      { type: 'paragraph', content: "Fala Dev Maik Brito na area",},
      { type: 'paragraph', content:"Hoje eu vim aqui apenas para lembrar você de acessar sua plataforma da Rocket diariamente tá", },
      { type: 'paragraph', content: "está contando foguinho", },
      { type: 'link', content: "@rocketseat"},
    ],
    publishedAt: new Date('2023-04-12 18:26:00'),
  },
];

function App() {
  return(
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>        
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}  
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
