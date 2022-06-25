import { useGetLessonsQuery } from "../../graphql/generated";
import { Lesson } from "../Lesson";
import './styles.css'


export function Sidebar(){
    const { data } = useGetLessonsQuery()
    return (
        <aside className="sidebar-container">
            <span className="sidebar-title">
                Cronograma de aulas
            </span>
            <div className="sidebar-lesson-list">
                {
                    data?.lessons.map(lesson=>(
                        <Lesson 
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    ))
                }
            </div>
        </aside>
    )
}