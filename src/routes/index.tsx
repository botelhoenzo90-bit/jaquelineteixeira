import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Check, ChevronDown, Clock3, Dumbbell, Heart, Instagram,
  MapPin, MessageCircle, MoveRight, Navigation, Phone, Sparkles, Star,
  Waves, Wind, X, Zap,
} from "lucide-react";
import logoAsset from "@/assets/jaqueline-teixeira-logo.png.asset.json";
import novaLogoAsset from "@/assets/jaqueline-teixeira-logo-nova.png.asset.json";
import drenagemAsset from "@/assets/drenagem-linfatica.png.asset.json";
import drenagemModelacaoAsset from "@/assets/drenagem-modelacao.png.asset.json";
import massagemAsset from "@/assets/massagem-relaxante.png.asset.json";
import posGestacaoAsset from "@/assets/pos-gestacao.png.asset.json";
import radioCorporalAsset from "@/assets/radiofrequencia-corporal.png.asset.json";
import radioFacialAsset from "@/assets/radiofrequencia-facial.png.asset.json";
import redutorAsset from "@/assets/tratamento-redutor.png.asset.json";
import spaPesAsset from "@/assets/spa-dos-pes.png.asset.json";
import banhoLuaAsset from "@/assets/banho-de-lua.png.asset.json";
import whatsappAsset from "@/assets/whatsapp.png.asset.json";
import bronzeadoraAsset from "@/assets/massagem-bronzeadora.png.asset.json";
import detoxAsset from "@/assets/massagem-detox.png.asset.json";
import doresAsset from "@/assets/tratamento-para-dores.png.asset.json";
import clinicaAsset from "@/assets/clinica.png.asset.json";
import jaquelineAsset from "@/assets/jaqueline-teixeira.png.asset.json";
import limineAsset from "@/assets/limine-radiofrequencia.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jaqueline Teixeira | Estética & Massoterapia" },
      { name: "description", content: "Estética e massoterapia em Formosa-GO. Drenagem, modeladora, tratamentos corporais, laser, radiofrequência, massagens e cuidados personalizados." },
      { property: "og:title", content: "Jaqueline Teixeira | Estética & Massoterapia" },
      { property: "og:description", content: "Corpo leve, cuidado personalizado e uma experiência pensada para você." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://jaquelineteixeira.lovable.app/" },
      { property: "og:image", content: "https://jaquelineteixeira.lovable.app/__l5e/assets-v1/14c5b3eb-8e57-4b52-96a1-12fb5c400f7e/compartilhamento-jaqueline-teixeira.png" },
      { name: "twitter:image", content: "https://jaquelineteixeira.lovable.app/__l5e/assets-v1/14c5b3eb-8e57-4b52-96a1-12fb5c400f7e/compartilhamento-jaqueline-teixeira.png" },
      { name: "theme-color", content: "#c9a227" },
    ],
    links: [{ rel: "canonical", href: "https://jaquelineteixeira.lovable.app/" }],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/556198046306";
const INSTAGRAM = "https://www.instagram.com/jaquelineteixeira_estetica/";
const MAP = "https://www.google.com/maps/search/?api=1&query=Rua+Juselino+Malheiros,+125,+Centro,+Formosa,+GO";

const procedures = [
  { title: "Drenagem Linfática", text: "Técnica voltada para uma sensação de leveza e cuidado corporal.", icon: Waves, image: drenagemAsset.url },
  { title: "Drenagem + Modelação", text: "Um protocolo que combina técnicas para cuidar do contorno corporal.", icon: Sparkles, image: drenagemModelacaoAsset.url },
  { title: "Tratamento Redutor de Medidas", text: "Protocolos personalizados de acordo com seus objetivos e avaliação.", icon: Zap, image: redutorAsset.url },
  { title: "Radiofrequência Corporal", text: "Tecnologia aplicada aos cuidados e ao contorno corporal.", icon: Wind, image: radioCorporalAsset.url },
  { title: "Radiofrequência Facial", text: "Tecnologia para um cuidado facial personalizado.", icon: Sparkles, image: radioFacialAsset.url },
  { title: "Massagem Detox", text: "Uma experiência de cuidado para desacelerar e se sentir mais leve.", icon: Heart, image: detoxAsset.url },
  { title: "Massagem Relaxante", text: "Momento de pausa com técnicas e pedras quentes.", icon: Sparkles, image: massagemAsset.url },
  { title: "Massagem Bronzeadora", text: "Cuidado corporal para realçar o visual e a autoestima.", icon: SunIcon, image: bronzeadoraAsset.url },
  { title: "Pós-Gestação", text: "Atendimento pensado para o momento e as necessidades de cada mulher.", icon: Heart, image: posGestacaoAsset.url },
  { title: "Pós-Operatório", text: "Cuidados estéticos realizados com atenção e orientação adequada.", icon: Check, image: drenagemAsset.url },
  { title: "Spa dos Pés", text: "Um ritual de cuidado para relaxar e renovar a sensação de bem-estar.", icon: Waves, image: spaPesAsset.url },
  { title: "Banho de Lua", text: "Cuidado corporal para uma pele com aparência mais uniforme e iluminada.", icon: Sparkles, image: banhoLuaAsset.url },
  { title: "Tratamento para Dores", text: "Massoterapia direcionada para promover conforto e relaxamento.", icon: MoveRight, image: doresAsset.url },
];

const reviews = [
  { name: "Cliente Jaqueline", text: "Um atendimento muito acolhedor, com atenção aos detalhes e uma experiência que faz a gente se sentir bem cuidada.", treatment: "Atendimento personalizado" },
  { name: "Cliente Jaqueline", text: "Gostei muito do cuidado durante o atendimento. Tudo foi explicado com calma e me senti muito à vontade.", treatment: "Massoterapia" },
  { name: "Cliente Jaqueline", text: "Um espaço agradável e um atendimento cuidadoso. Foi um momento realmente reservado para mim.", treatment: "Estética corporal" },
  { name: "Cliente Jaqueline", text: "A experiência foi muito positiva do início ao fim. Atendimento atencioso e ambiente muito confortável.", treatment: "Drenagem linfática" },
  { name: "Cliente Jaqueline", text: "Fui muito bem recebida e senti que o atendimento foi pensado para o que eu precisava naquele momento.", treatment: "Cuidado personalizado" },
  { name: "Cliente Jaqueline", text: "Um daqueles atendimentos em que você sai sentindo que valeu a pena separar um tempo para se cuidar.", treatment: "Massoterapia" },
];

const faqs = [
  ["Como funciona a primeira avaliação?", "Conversamos sobre seus objetivos, rotina e o que você deseja melhorar. A partir disso, são indicados os cuidados mais adequados para o seu momento."],
  ["Quais procedimentos vocês realizam?", "A clínica oferece drenagem linfática, modeladora, tratamentos redutores, radiofrequência facial, corporal e íntima, massagens, pós-gestação, pós-operatório, banho de lua, spa dos pés e outros cuidados."],
  ["A drenagem é indicada para todo mundo?", "A indicação depende das condições individuais. Por isso, o ideal é conversar com a profissional antes de iniciar qualquer protocolo."],
  ["Vocês atendem pós-operatório?", "Sim. Há atendimento voltado ao pós-operatório, sempre respeitando o período de recuperação e as orientações do profissional de saúde responsável."],
  ["Onde fica a clínica?", "Rua Juselino Malheiros, nº 125, Centro, Formosa - GO, CEP 73801-190."],
  ["Como faço para agendar?", "Clique em qualquer botão de WhatsApp da página e fale diretamente com a equipe para verificar horários e escolher o melhor atendimento."],
];

function SunIcon(props: { size?: number }) { return <Sparkles size={props.size ?? 25} />; }

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const goWhatsapp = (label: string) => window.open(`${WHATSAPP}?text=${encodeURIComponent(`Olá! Vim pelo site da Jaqueline Teixeira e gostaria de ${label.toLowerCase()}.`)}`, "_blank", "noopener,noreferrer");

  return (
    <main className="jt-site">
      <section className="hero" id="inicio"><div className="hero-glow" /><div className="container hero-grid">
        <div className="hero-copy center-hero"><a className="hero-logo" href="#inicio" aria-label="Jaqueline Teixeira Estética e Massoterapia"><img src={novaLogoAsset.url} alt="Jaqueline Teixeira" /><span>Estética e Massoterapia</span></a><h1>Seu cuidado merece ser <em>sentido.</em></h1><p className="hero-lead">Tratamentos estéticos e massagens personalizados para você se sentir mais leve, cuidada e confiante — com atenção em cada detalhe.</p>
        <div className="hero-actions"><button className="btn btn-primary" onClick={() => goWhatsapp("agendar uma avaliação personalizada")}><MessageCircle size={19} /> Quero agendar</button><a className="btn btn-outline" href="#procedimentos">Conhecer procedimentos <ArrowRight size={18} /></a></div>
        <div className="hero-trust"><span><Check size={15} /> Atendimento personalizado</span><span><Check size={15} /> Formosa • GO</span></div></div>
      </div></section>

      <div className="info-marquee" aria-label="Destaques da clínica"><div className="marquee-track">{[1,2].map((copy) => <div className="marquee-group" key={copy}><span>✦ DRENAGEM LINFÁTICA</span><span>✦ MODELADORA</span><span>✦ RADIOFREQUÊNCIA</span><span>✦ MASSOTERAPIA</span><span>✦ PÓS-GESTAÇÃO</span><span>✦ PÓS-OPERATÓRIO</span><span>✦ LASER DAY</span><span>✦ CUIDADO PERSONALIZADO</span></div>)}</div></div>
      <section className="section how-section" id="como-funciona"><div className="container"><div className="section-heading center"><span className="eyebrow">COMO FUNCIONA</span><h2>Seu atendimento em <em>4 passos simples.</em></h2><p>Do primeiro contato ao momento de relaxar, tudo começa com uma conversa.</p></div><div className="steps-grid">{[['01','Você chama','Fale pelo WhatsApp e conte o que você procura.'],['02','Conversamos','Entendemos seus objetivos e o que faz sentido para você.'],['03','Escolhemos','O atendimento é organizado de acordo com a sua necessidade.'],['04','Você se cuida','É hora de desacelerar e aproveitar seu momento.']].map(([n,t,d])=><article className="step-card" key={n}><span className="step-number">{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("dar o primeiro passo e agendar")}><MessageCircle size={18}/> Dar o primeiro passo</button></div></div></section>


      <section className="section intro-section"><div className="container intro-grid"><div className="intro-photo"><img src={clinicaAsset.url} alt="Recepção da clínica Jaqueline Teixeira" loading="lazy"/></div><div className="intro-copy"><span className="eyebrow">SOBRE A CLÍNICA</span><h2>Um espaço para cuidar do corpo, da autoestima e do <em>seu bem-estar.</em></h2><p>Na Jaqueline Teixeira Estética & Massoterapia, cada atendimento foi pensado para transformar o autocuidado em uma experiência acolhedora, personalizada e profissional. Você encontra diferentes procedimentos em um só lugar, com atenção ao que realmente faz sentido para o seu momento.</p><button className="btn btn-primary" onClick={() => goWhatsapp("agendar meu atendimento")}><MessageCircle size={18}/> Agendar meu atendimento</button></div></div></section>


      <section className="section pain-section"><div className="container narrow center"><span className="eyebrow">TALVEZ VOCÊ ESTEJA SENTINDO ISSO</span><h2>Quando você olha no espelho e sente que <em>poderia se cuidar mais.</em></h2><p>Inchaço, sensação de peso, tensão muscular, falta de tempo para você ou simplesmente vontade de se sentir melhor com o próprio corpo. Esses sinais merecem atenção — sem pressão e sem promessas milagrosas.</p><div className="check-list centered-list"><div><Check size={17}/><span>Você quer uma rotina de autocuidado que caiba na sua vida.</span></div><div><Check size={17}/><span>Busca procedimentos escolhidos de acordo com seus objetivos.</span></div><div><Check size={17}/><span>Quer sair do atendimento sentindo que aquele tempo valeu a pena.</span></div></div><button className="btn btn-primary" onClick={() => goWhatsapp("entender qual procedimento combina comigo")}><MessageCircle size={18}/> Quero entender meu atendimento</button></div></section>


      <section className="section limine-section" id="limine"><div className="container limine-grid"><div className="limine-copy"><span className="eyebrow">TECNOLOGIA LIMINE</span><h2>Radiofrequência para um cuidado <em>completo e personalizado.</em></h2><div className="limine-photo"><img src={limineAsset.url} alt="Aplicação de radiofrequência corporal com o aparelho Limine" loading="lazy" /></div><p>O Limine é um equipamento de radiofrequência multifrequencial e multipolar, utilizado em protocolos estéticos faciais e corporais. Sua tecnologia permite adaptar o atendimento às necessidades avaliadas pela profissional.</p><div className="limine-benefits"><span><Sparkles size={19}/><strong>Tecnologia versátil</strong><small>Aplicações faciais e corporais.</small></span><span><Zap size={19}/><strong>Protocolo personalizado</strong><small>Escolhido após avaliação individual.</small></span><span><Heart size={19}/><strong>Conforto e cuidado</strong><small>Atendimento acompanhado pela profissional.</small></span></div><button className="btn btn-primary" onClick={() => goWhatsapp("saber mais sobre o tratamento com Limine")}><MessageCircle size={18}/> Quero saber mais</button></div></div></section>

      <section className="section procedures-section" id="procedimentos"><div className="container"><div className="section-heading center"><span className="eyebrow">TRATAMENTOS & PROCEDIMENTOS</span><h2>Cuidados pensados para <em>diferentes objetivos.</em></h2><p>Conheça alguns dos procedimentos disponíveis na clínica. A combinação ideal depende da avaliação e do seu momento.</p></div><div className="procedure-window"><div className="procedure-track">{[...procedures,...procedures].map(({title,text,icon:Icon,image},i)=><article className={`procedure-card${image ? " has-image" : ""}`} key={`${title}-${i}`}>{image ? <img className="procedure-photo" src={image} alt={`${title} na Jaqueline Teixeira`} loading="lazy" /> : <div className="procedure-placeholder" aria-hidden="true"><Icon size={32}/></div>}<div className="procedure-content"><div className="procedure-icon"><Icon size={21}/></div><span className="procedure-number">{String((i%procedures.length)+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div></div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("ver os procedimentos e horários disponíveis")}><MessageCircle size={18}/> Ver opções e horários</button></div></div></section>


      <section className="section reviews-section" id="avaliacoes"><div className="reviews-heading"><span className="eyebrow">AVALIAÇÕES</span><h2>Experiências que <em>ficam na memória.</em></h2><p>Um espaço para reunir o que nossas clientes sentem ao viver a experiência de cuidado da Jaqueline.</p></div><div className="reviews-window"><div className="reviews-track">{[...reviews,...reviews].map((review,i)=><article className="review-card" key={i}><div className="review-stars">{[1,2,3,4,5].map(star=><Star key={star} size={15} fill="currentColor"/>)}</div><p>“{review.text}”</p><div className="review-footer"><div className="review-avatar">{review.name.charAt(0)}</div><div><strong>{review.name}</strong><span>{review.treatment}</span></div></div></article>)}</div></div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("conhecer a clínica e agendar meu atendimento")}><MessageCircle size={18}/> Quero viver essa experiência</button></div></section>

      <section className="section about-section" id="jaqueline"><div className="container about-card"><div className="about-photo"><img src={jaquelineAsset.url} alt="Jaqueline Teixeira, massoterapeuta" loading="lazy" /></div><div className="about-copy"><span className="eyebrow">QUEM É JAQUELINE TEIXEIRA</span><h2>Mais do que procedimentos, <em>uma forma de cuidar.</em></h2><p>Jaqueline Teixeira atua com estética e massoterapia em Formosa, Goiás, com uma proposta que une cuidado corporal, bem-estar e atenção individual.</p><p>O trabalho parte da escuta: entender o que você procura, respeitar seu momento e escolher, junto com você, os cuidados que realmente fazem sentido. A experiência foi pensada para que cada atendimento seja acolhedor, profissional e sem pressa.</p><div className="about-points"><span><Sparkles size={17}/> Cuidado personalizado</span><span><Heart size={17}/> Acolhimento em cada atendimento</span><span><Check size={17}/> Expectativas reais e orientação</span></div><button className="btn btn-primary" onClick={() => goWhatsapp("conhecer o trabalho da Jaqueline")}><MessageCircle size={18}/> Conhecer e agendar</button></div></div></section>


      <section className="section highlight-section" id="experiencia"><div className="container narrow center"><span className="eyebrow">DESTAQUE</span><h2>Uma experiência de cuidado que começa <em>antes da maca.</em></h2><p>Do primeiro contato à escolha do protocolo, a proposta é ouvir você e entender o que faz sentido para sua rotina. Sem atendimento automático. Sem pressa.</p><div className="mini-benefits centered-mini"><div><Sparkles size={20}/><span><strong>Personalização</strong><small>Cuidados escolhidos com você.</small></span></div><div><Heart size={20}/><span><strong>Acolhimento</strong><small>Um espaço para desacelerar.</small></span></div><div><ShieldIcon/><span><strong>Responsabilidade</strong><small>Sem promessas irreais.</small></span></div></div><button className="btn btn-primary" onClick={() => goWhatsapp("marcar meu horário")}><MessageCircle size={18}/> Marcar meu horário</button></div></section>


      <section className="section technology-section"><div className="container split-grid reverse-mobile"><div className="copy-block"><span className="eyebrow">TECNOLOGIA & CUIDADO</span><h2>Protocolos que unem <em>técnica e experiência.</em></h2><p>Além das massagens, a clínica trabalha com tecnologias e procedimentos como Limine, radiofrequência e depilação a laser, conforme disponibilidade e indicação.</p><div className="feature-grid"><div><Zap size={19}/><strong>Limine</strong><span>Tecnologia para protocolos corporais.</span></div><div><Sparkles size={19}/><strong>Radiofrequência</strong><span>Cuidados faciais, corporais e íntimos.</span></div><div><Wind size={19}/><strong>Laser</strong><span>Praticidade para sua rotina de cuidados.</span></div><div><Heart size={19}/><strong>Massoterapia</strong><span>Relaxamento e cuidado corporal.</span></div></div><button className="btn btn-primary" onClick={() => goWhatsapp("saber quais tecnologias estão disponíveis")}><MessageCircle size={18}/> Falar sobre os tratamentos</button></div></div></section>


      <section className="section benefits-section"><div className="container"><div className="section-heading center"><span className="eyebrow">POR QUE ESCOLHER A JAQUELINE?</span><h2>Porque seu momento de cuidado <em>também importa.</em></h2></div><div className="benefit-grid"><article><span>01</span><Sparkles/><h3>Atendimento personalizado</h3><p>Você não é apenas mais um horário na agenda. O atendimento começa entendendo o que você busca.</p></article><article><span>02</span><Heart/><h3>Ambiente para desacelerar</h3><p>Um espaço pensado para você respirar, pausar e aproveitar o próprio tempo.</p></article><article><span>03</span><Dumbbell/><h3>Variedade de procedimentos</h3><p>Estética, massagens e tecnologias para diferentes necessidades e objetivos.</p></article><article><span>04</span><Check/><h3>Expectativas realistas</h3><p>Sem promessas mágicas: cada resultado depende de avaliação, rotina e características individuais.</p></article></div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("agendar uma conversa")}><MessageCircle size={18}/> Quero conversar</button></div></div></section>





      <section className="section faq-section" id="faq"><div className="container faq-layout"><div className="faq-intro"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>Antes de agendar, <em>tire suas dúvidas.</em></h2><p>Se a sua pergunta não estiver aqui, fale diretamente com a equipe pelo WhatsApp.</p><button className="btn btn-primary" onClick={() => goWhatsapp("tirar uma dúvida")}><MessageCircle size={18}/> Tirar uma dúvida</button></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={openFaq===i?"faq-item active":"faq-item"} key={q}><button onClick={() => setOpenFaq(openFaq===i?null:i)}><span>{q}</span>{openFaq===i?<X size={19}/>:<ChevronDown size={19}/>}</button>{openFaq===i&&<div className="faq-answer"><p>{a}</p></div>}</div>)}</div></div></section>


      <section className="section location-section" id="localizacao"><div className="container location-grid"><div className="map-card"><iframe title="Localização da Jaqueline Teixeira Estética e Massoterapia" src="https://www.google.com/maps?q=Rua+Juselino+Malheiros,+125,+Centro,+Formosa,+GO&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div><div className="location-copy"><span className="eyebrow">ONDE ESTAMOS</span><h2>Seu próximo momento de cuidado começa <em>aqui.</em></h2><div className="address"><MapPin size={23}/><div><strong>Rua Juselino Malheiros, nº 125</strong><span>Centro • Formosa - GO</span><small>CEP 73801-190</small></div></div><div className="location-info"><div><Clock3 size={19}/><span><strong>Atendimento</strong>Com horário agendado</span></div><div><Phone size={19}/><span><strong>WhatsApp</strong>(61) 98046-306</span></div></div><div className="location-actions"><button className="btn btn-primary" onClick={() => goWhatsapp("agendar meu horário")}><MessageCircle size={18}/> Agendar pelo WhatsApp</button><a className="btn btn-outline" href={MAP} target="_blank" rel="noreferrer"><Navigation size={17}/> Ver no mapa</a></div></div></div></section>

      <section className="final-cta"><div className="final-glow"/><div className="container center"><span className="eyebrow light">SEU MOMENTO COMEÇA COM UMA MENSAGEM</span><h2>Pronta para se colocar na sua própria lista de prioridades?</h2><p>Converse com a Jaqueline e encontre o atendimento que combina com o que você procura.</p><button className="btn btn-primary" onClick={() => goWhatsapp("agendar meu atendimento")}><MessageCircle size={19}/> Quero agendar meu atendimento</button></div></section>

      <footer className="footer"><div className="container footer-grid"><div><a className="brand footer-brand brand-logo" href="#inicio"><img src={logoAsset.url} alt="Jaqueline Teixeira Estética e Massoterapia" /></a><p>Corpo leve, cuidado personalizado e um momento só seu em Formosa-GO.</p></div><div><h4>Atalhos</h4><a href="#procedimentos">Procedimentos</a><a href="#jaqueline">Quem é Jaqueline</a><a href="#como-funciona">Como funciona</a><a href="#faq">Perguntas frequentes</a><a href="#localizacao">Localização</a></div><div><h4>Contato</h4><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={15}/> WhatsApp</a><a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={15}/> Instagram</a><span><MapPin size={15}/> Formosa • Goiás</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Jaqueline Teixeira. Todos os direitos reservados.</span><span>Estética & Massoterapia</span></div></footer>

      <a className="floating-wa" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"><img src={whatsappAsset.url} alt="" /></a>
    </main>
  );
}

function ShieldIcon(){ return <Check size={20}/>; }
