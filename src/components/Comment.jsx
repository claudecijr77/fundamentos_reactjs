import style from './Comment.module.css'
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar";

export function Comment({ content, onDeleteComment }) {

    function handleDeleteComment () {
        onDeleteComment(content);
    }

    return (
        <div className={style.comment}>
            <Avatar hasBorder={false} src='https://github.com/claudecijr77.png' />

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Claudeci Júnior</strong>
                            <time title='quinze de junho às 05:14' dateTime='2022-06-15 05:14'>
                                Cerca de 2h atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{ content }</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}