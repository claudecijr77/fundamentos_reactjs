import styles from './Post.module.css'
import {Comment} from "./Comment";
import {Avatar} from "./Avatar";

export function Post(props) {
    console.log(props);
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src='https://github.com/claudecijr77.png'
                    />
                    <div className={styles.authorInfo}>
                        <strong>Claudeci Júnior</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='quinze de junho às 05:14' dateTime='2022-06-15 05:14'>
                    Públicado há 1h
                </time>

            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋 </p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href=''> jane.design/doctorcare</a></p>

                <p>
                    <a href=''>#novoprojeto</a>{' '}
                    <a href=''>#nlw</a>{' '}
                    <a href=''>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>

                <textarea
                    placeholder='Deixe o seu comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}