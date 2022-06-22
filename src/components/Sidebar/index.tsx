import { gql, useQuery } from "@apollo/client";
import { Lesson } from "../Lesson";
import './styles.css'

const GET_LESSONS_QUERY =  gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            lessonType
            availableAt
            title
            slug
        }
    }
`

interface GetLessonsQueryResponse{
    lessons: {
        id: string;
        lessonType: 'live' | 'class';
        availableAt: string;
        title: string;
        slug: string;
    }[]
}

export function Sidebar(){
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)
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