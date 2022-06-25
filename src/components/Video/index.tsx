import { DefaultUi, Player, Youtube } from "@vime/react";
import { DiscordLogo, Lightning, FileArrowDown, CaretRight, Image } from "phosphor-react";
import '@vime/core/themes/default.css'
import { LinkButton } from "../LinkButton";
import { AditionalLink } from "../AditionalLink";
import { useGetLessonBySlugQuery } from "../../graphql/generated";

import './styles.css'

interface VideoProps {
    lessonSlug: string;
}


export function Video(props: VideoProps){
    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug
        }
    })

    if(!data || !data.lesson){
        return( 
            <div className="flex-1">
                <p>Carregando...</p>
            </div>
        )
    }

    return (
        <div className="flex-1">
            <div className="video-player-container">
                <div className="video-player">
                    <Player>
                        <Youtube videoId={data.lesson.videoId}/>
                        <DefaultUi />
                    </Player>
                </div>
            </div>
            <div className="lesson-information">
                <div className="lesson-information-container">
                    <div className="flex-1">
                        <h1 className="video-title">
                            {data.lesson.title}
                        </h1>
                        <p className="video-description">
                            {data.lesson.description}
                        </p>
                        {
                            data.lesson.teacher && (
                                <div className="teacher-card-container">
                                    <img 
                                        className="teacher-image"
                                        src={data.lesson.teacher.avatarURL} 
                                        alt={data.lesson.teacher.name}
                                    />
                                    <div className="leading-relaxed">
                                        <strong className="teacher-name">
                                            {data.lesson.teacher.name}
                                        </strong>
                                        <span className="teacher-bio">
                                            {data.lesson.teacher.bio}
                                        </span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="video-buttons">
                        <LinkButton href="" >
                            <DiscordLogo size={24}/>
                            Comunidade do Discord
                        </LinkButton>
                        <LinkButton href="" buttonType="secondary">
                            <Lightning size={24}/>
                            Acesse o desafio
                        </LinkButton>

                    </div>
                </div>
                <div className="aditional-link-container">
                    <AditionalLink
                        href=""
                        icon={<FileArrowDown size={40}/>}
                        title="Material Complementar"
                        text="Acesse o material complementar para acelerar o seu desenvolvimento"
                    />
                    <AditionalLink
                        href=""
                        icon={<Image size={40}/>}
                        title="Wallpapers Exclusivos"
                        text="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
                    />
                </div>
                
            </div>
        </div>
    )
}