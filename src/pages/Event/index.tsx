import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Video } from "../../components/Video";

import './styles.css'

export function Event(){
    const { slug } = useParams<{ slug:string }>()
    return (
        <div className="event-container">
            <Header/>
            <main className="event-main-container">
                {
                    slug? <Video lessonSlug={slug} /> : <div className="flex-1"/>
                }
                <Sidebar/>
            </main>
        </div>
    )
}