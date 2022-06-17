import { Post } from './components/Post';
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css'
import styles from './App.module.css'

const posts = [
    {
        id: 1,
        author: {
          avatarUrl: 'https://github.com/claudecijr77.png',
          name: 'Claudeci Júnior',
          role: 'CTO @ CSLSoluções',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2022-06-17 04:27:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/tuliobmachado.png',
            name: 'Túlio Machado',
            role: 'CIO @ TulioBMachado',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2022-06-15 05:30:00'),
    }
]

export function App() {

  return (
    <div>

      <Header/>
      <div className={styles.wrapper}>
          <Sidebar />
          <main>
              {posts.map(post => {
                  return (
                      <Post
                        author={post.author}
                        content={post.content}
                        publishedAt={post.publishedAt}
                      />
                  );
              })}
          </main>
      </div>


    </div>
  )
}

