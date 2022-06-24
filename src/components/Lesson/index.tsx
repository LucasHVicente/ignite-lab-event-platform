import { isPast, format } from 'date-fns';
import { CheckCircle, Lock } from 'phosphor-react'
import ptBR from 'date-fns/locale/pt-BR'

import './styles.css'
import { Link } from 'react-router-dom';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps){
    
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
            <div className="lesson-card-container">
                <header className="lesson-card-header">
                    {
                        isLessonAvailable ? (
                            <span className="lesson-available">
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
                    <span className="lesson-type">
                        {props.type ==='live'? 'AO VIVO': 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className="lesson-title">
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}