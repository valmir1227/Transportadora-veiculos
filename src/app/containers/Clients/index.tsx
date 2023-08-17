import { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import defaultAvatar from "@/app/assets/default-avatar.png";
import styles from "./styles.module.scss";

export default function Clients() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");

  function sendEmail(e: any) {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.warn("Os campos nome, email e mensagem são obrigatótios!", {});
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      phone: phone,
      subject: subject,
    };

    emailjs
      .send(
        "service_gv6xern",
        "template_e4lq038",
        templateParams,
        "z4clU3eNOrp2xrlu9"
      )
      .then(
        (response) => {
          toast.success("Email Enviado!", {});
          setName("");
          setEmail("");
          setMessage("");
          setPhone("");
          setSubject("");
        },
        (err) => {
          toast.error("Desculpe aconteceu um erro :/", {});
        }
      );
  }

  return (
    <section id="contact" className={styles.section}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className={styles.contact}>
        <div>
          <h2>
            Entre em <span>contato</span>
          </h2>
          <p>
            Estamos empolgados para ouvir de você e oferecer os melhores
            serviços de transporte de veículos disponíveis no mercado. Nossa
            equipe altamente dedicada está pronta para ajudá-lo em todas as
            etapas do processo, desde fornecer informações detalhadas sobre
            nossos serviços até resolver quaisquer dúvidas ou preocupações que
            você possa ter.
          </p>
          <form onSubmit={sendEmail}>
            <strong>Envie-nos uma mensagem</strong>
            <div className={styles.inputGroup}>
              <div>
                <input
                  type="text"
                  placeholder="Seu Nome"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
                <input
                  type="text"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Telefone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  pattern="[0-9]{10,11}"
                  title="Telefone deve conter apenas números e ter entre 10 e 11 dígitos"
                />
                <input
                  type="text"
                  placeholder="Assunto"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                />
              </div>
            </div>
            <textarea
              rows={7}
              placeholder="Sua Mensagem..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <div className={styles.customers}>
        <div>
          <h2>
            Opnião dos
            <span> clientes</span>
          </h2>

          <p>
            Nossos clientes são a base do nosso sucesso, e suas opiniões e
            comentários são inestimáveis para nós. Apreciamos cada palavra
            compartilhada e valorizamos o tempo dedicado para nos contar sobre
            sua jornada conosco.
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.customer}>
            <Image
              src={defaultAvatar}
              alt="Imagem de avatar padrão"
              width={200}
              height={200}
            />

            <div>
              <strong>Marcio</strong>
              <p>Cliente</p>
            </div>
          </div>

          <p>
            Recomendo sem dúvida alguma! Sempre confio meus veículos de leilão a
            essa transportadora e nunca tive problemas. Eles têm sido
            consistentemente confiáveis, cuidadosos e pontuais em todas as
            minhas remessas. Se você precisa transportar um veículo com
            segurança e tranquilidade, essa é a escolha certa!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.customer}>
            <Image
              src={defaultAvatar}
              alt="Imagem de avatar padrão"
              width={200}
              height={200}
            />

            <div>
              <strong>Marcelo F</strong>
              <p>Cliente</p>
            </div>
          </div>

          <p>
            Excelente serviço! Eu estava preocupado em confiar meu carro a uma
            transportadora, mas eles me deixaram completamente à vontade. A
            equipe demonstrou profissionalismo e conhecimento em lidar com
            veículos de alto valor.
          </p>
        </div>
      </div>
    </section>
  );
}
