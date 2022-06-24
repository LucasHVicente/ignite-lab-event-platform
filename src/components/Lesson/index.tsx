import { isPast, format } from 'date-fns';
import { CheckCircle, Lock } from 'phosphor-react'
import ptBR from 'date-fns/locale/pt-BR'
import classNames from 'classnames';

import './styles.css'
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps){
    const { slug } = useParams<{ slug:string }>()
    const isActiveLesson = slug === props.slug;
    
    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(
        props.availableAt, 
        "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
        { locale: ptBR }
    )

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="lesson-date">
                {availableDateFormatted}
            </span>
            <div className={classNames("lesson-card-container", {
                'bg-green-500': isActiveLesson,
            })}>
                <header className="lesson-card-header">
                    {
                        isLessonAvailable ? (
                            <span className={classNames("lesson-available", {
                                'text-white':isActiveLesson,
                            })}>
                                <CheckCircle size={20}/>
                                Conteudo Liberado
                            </span>
                        ):(
                            <span className="lesson-unavailable">
                                <Lock size={20}/>
                                Em breve
                            </span>
                        )
                    }
                    <span className={classNames("lesson-type", {
                        'border-white': isActiveLesson
                    })}>
                        {props.type ==='live'? 'AO VIVO': 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong 
                    className={classNames("lesson-title", {
                        'text-white':isActiveLesson,
                    })}
                >
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}