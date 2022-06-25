import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets/Logo";
import './styles.css'

const CREATE_SUBSCRIBER_MUTATION = gql`
    mutation CreateSubscriber ($name: String!, $email: String!) {
        createSubscriber(data: {name: $name, email: $email}) {
            id
        }
    }
`
export function Subscribe() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION)

    async function handleSubscribe(event: FormEvent){
        // TODO implement form validation and error handler
        event.preventDefault()
        await createSubscriber({
            variables:{
                name, 
                email,
            }
        })
        navigate('/event')
    }

    return(
        <div className="susbscribe-container">
            <div className="subscribe-content-container">
                <div className="subscribe-logo-container">
                    <Logo/>
                    <h1 className="subscribe-title">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                    </h1>
                    <p className="subscribe-text">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>

                </div>
                <div className="subscribe-form-container">
                    <strong className="subscribe-form-title">
                        Inscreva-se gratuitamente
                    </strong>
                    <form onSubmit={handleSubscribe} className="subscribe-form">
                        <input 
                            type="text" 
                            placeholder="Seu nome completo"
                            className="subscribe-input"
                            onChange={(event)=>setName(event.target.value)}
                        />
                        <input 
                            type="email" 
                            placeholder="Digite seu e-mail"
                            className="subscribe-input"
                            onChange={(event)=>setEmail(event.target.value)}
                        />
                        <button 
                            type="submit"
                            disabled={loading}
                            className="subscribe-submit-button"
                        >
                            Grantir minha vaga
                        </button>
                    </form>
                </div>
            </div>
            <img src="/src/assets/code-mockup.png"/>
        </div>
    )
}