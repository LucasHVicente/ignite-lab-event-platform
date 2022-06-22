import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Video } from "../../components/Video";

import './styles.css'

export function Event(){
    return (
        <div className="event-container">
            <Header/>
            <main className="event-main-container">
                <Video/>
                <Sidebar/>
            </main>
        </div>
    )
}