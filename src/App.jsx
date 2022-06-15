import { Post } from './components/Post';
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css'
import styles from './App.module.css'


export function App() {

  return (
    <div>

      <Header/>
      <div className={styles.wrapper}>
          <Sidebar />
          <main>
              <Post
                  author="Claudeci Siqueira"
                  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae sit aut aliquid error natus ea asperiores excepturi culpa rerum fugiat nesciunt officiis, dolorem dolore in ipsa autem dolor, modi soluta."
              />
              <Post
                  author="Angela Lopes"
                  content="Outro post muito legal"
              />
          </main>
      </div>


    </div>
  )
}

