import Link from "next/link";
import Image from "next/image";
import React from "react";
import FeedbackForm from "../components/FeedbackForm";

import { montserrat } from "../fonts";
import { evolventa } from "../fonts";
import IconArrowLeft from "../../../public/icons/iconArrowLeft.svg";
import PicSupport from "../../../public/pics/picSupport.svg";

const support = () => {
  return (
    <main className={``}>
      <div className="bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD] md:h-[10.74vh] h-[128px]"></div>
      <div className={` bg-gradient-to-r from-[#EBECF1] to-[#FCFCFD]`}>
        <h1
          className={`mx-4 md:mx-[12.5vw] py-6 md:py-[5.55vh] md:text-[7.4vh] text-[32px] leading-8 md:leading-[7.4vh] font-bold text-[#1B1743]`}
        >
          Derecho <br className="hidden md:block" /> Laboral
        </h1>
      </div>
      <section className=" md:mx-[12.5vw] grid md:grid-cols-6 md:gap-x-[1.25vw] text-[#1B1743]">
        <div className="mx-4 md:mx-0 md:col-span-6">
          <Link
            href="/"
            className="flex md:gap-[0.62vw] gap-3 w-fit md:pt-[1.85vh] pt-6 pb-6 md:pb-[4.44vh]"
          >
            <Image
              src={IconArrowLeft}
              alt={`IconArrowLeft`}
              width={24}
              className="md:h-[2.22vh] md:w-[1.25vw]"
            />
            <p
              className={`${montserrat.className} md:text-[1.48vh] text-base leading-6 md:leading-[2.22vh] text-[#807D9B] font-semibold`}
            >
              volver
            </p>
          </Link>
        </div>
        <div className="md:col-span-2 md:relative hidden md:block">
          <div className=" absolute left-[-8.12vw]">
            {/* <Image
              src={PicSupport}
              alt="Bunkruptcy"
              height={1000}
              className="md:h-[42.87vh] md:w-[32.29vw] object-cover"
            /> */}
          </div>
        </div>
        <div className={`md:col-span-4 ${montserrat.className}`}>
          <div className="md:pb-[7.4vh] pb-10">
            <h1
              className={`mx-4 md:mx-0 text-2xl leading-[26px] pb-4 md:pb-[1.85vh]  ${evolventa.className} md:text-[3.33vh]  md:leading-[3.51vh] font-bold `}
            >
              Accidentes laborales
            </h1>
            <p className="mx-4 md:mx-0 text-sm leading-4 md:pb-[7.4vh] pb-[60px] md:text-[1.48vh]  md:leading-[2.22vh] font-medium">
            Nuestro equipo de abogados especialistas en derecho laboral está comprometido en proteger sus derechos y obtener la compensación justa que merece. Con años de experiencia y un enfoque centrado en el cliente, nos dedicamos a brindar asesoramiento legal integral y exhibición efectiva para ayudarte a superar las consecuencias de un accidente de trabajo.Nos encargaremos de presentar y gestionar su reclamo ante la Superintendencia de Riesgos del Trabajo (SRT) y/o la ART correspondiente.           
            
            <br className="hidden md:block" />
            <br className="hidden md:block" />
            <br className="hidden md:block" />

            <h1
              className={`mx-4 md:mx-0 text-2xl leading-[26px] pb-4 md:pb-[1.85vh]  ${evolventa.className} md:text-[3.33vh]  md:leading-[3.51vh] font-bold `}
            >
              Despidos
            </h1>

            Juicios laborales sin costo para el trabajador
            Para poder permitirle el acceso a la justicia, y obtener así la defensa de sus derechos laborales pese a no contar con recursos, asumimos la defensa en juicio sin costos iniciales ya que solo se cobra por resultado  Esto demuestra el grado de compromiso con el cliente.

            <br className="hidden md:block" />
            <br className="hidden md:block" />
            <br className="hidden md:block" />

            <h1
              className={`mx-4 md:mx-0 text-2xl leading-[26px] pb-4 md:pb-[1.85vh]  ${evolventa.className} md:text-[3.33vh]  md:leading-[3.51vh] font-bold `}
            >
              Trabajo en negro
            </h1>

            Existen leyes que amparan a los trabajadores que se encuentran  en negro o clandestinidad, las cuales crean un marco indemnizatorio para los trabajadores y trabajadores que acrediten en un proceso legal haber prestado tareas en esta situacion. Para poder reclamar debes contar con  con un abogado especializado.   <br className="hidden md:block" />
            <br className="hidden md:block" />
            <br className="hidden md:block" />
            
             <h1
              className={`mx-4 md:mx-0 text-2xl leading-[26px] pb-4 md:pb-[1.85vh]  ${evolventa.className} md:text-[3.33vh]  md:leading-[3.51vh] font-bold `}
            >
              Enfermedades laborales
            </h1>
            La enfermedad laboral  sucede cuando un trabajador contrae una enfermedad a raiz de su lugar de trabajo o el tipo de actividad que desarrolla. Por las cuales se pueden iniciar acciones legales a la ART.
            </p>
            
            
            
            
            
            
            
            
            {/* <h1
              className={`mx-4 md:mx-0 text-2xl leading-[26px] pb-4 md:pb-[1.85vh] ${evolventa.className} md:text-[3.33vh] md:leading-[3.51vh] font-bold `}
            >
              Досудебное
              <br className="hidden md:block"/> урегулирование споров
            </h1>
            <p className="mx-4 md:mx-0 text-sm leading-4 pb-10 md:pb-[5.55vh] md:text-[1.48vh] md:leading-[2.22vh] font-medium">
              В некоторых случаях достичь компромисса в споре можно во
              внесудебном
              <br className="hidden md:block"/> порядке. Имею успешный опыт урегулирования споров и решения
              юридических
              <br className="hidden md:block"/> вопросов во внесудебных процедурах.
            </p> */}
            {/* <div className="mx-4 md:mx-0 pb-10 md:pb-[4.44vh] ">
              <p className=" text-base leading-[22px] pb-4 md:pb-[1.85vh] md:text-[1.66vh] md:leading-[2.22vh] font-bold">
                Услуги
              </p>
              <ul className="text-sm leading-5 ml-[16px] md:text-[1.48vh] md:leading-[2.22vh] list-disc box-content md:ml-[1.04vw] marker:text-[#D8CACF] font-medium">
                <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                  Выработка стратегии для разрешения конфликтной ситуации
                </li>
                <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                  Переговоры с оппонентом, в том числе в рамках процедуры
                  медиации,
                  <br className="hidden md:block"/> составление претензии или ответа на претензию
                </li>
                <li className="md:pl-[0.62vw] pl-1">
                  Юридическое оформление договоренностей
                </li>
              </ul>
            </div> */}
            {/* <div
              className={`h-fit px-4 py-4 md:px-[1.25vw] md:py-[2.22vh] bg-[#F8F6F7] border-[0.09vh] border-[#F0F0F5]  rounded-md shadow-md`}
            >
              <div className="pb-2 md:pb-[1.11vh] flex items-center text-[#962C52]">
                <p className="text-base leading-[22px] md:text-[1.66vh] md:leading-[2.22vh] font-bold">
                  от 5 000 ₽
                </p>
              </div>
              <p className="text-sm leading-5 md:text-[1.29vh] md:leading-[1.85vh] font-medium md:font-normal">
                Стоимость определяется индивидуально в каждой ситуации
              </p>
            </div> */}
          </div>
          {/* <div className="pb-[60px] md:pb-0">
            <h1
              className={`mx-4 md:mx-0 text-2xl leading-[26px] pb-4 md:pb-[1.85vh] ${evolventa.className} md:text-[3.33vh] md:leading-[3.51vh] font-bold `}
            >
              Судебная защита
              <br className="hidden md:block"/> и представительство
            </h1>
            <p className="mx-4 md:mx-0 text-sm leading-4 pb-10 md:pb-[5.55vh] md:text-[1.48vh] md:leading-[2.22vh] font-medium">
              Представляю интересы клиентов в судах и административных органах.
              Имею <br className="hidden md:block"/> постоянный опыт представительства по разным правовым
              вопросам
            </p>
            <div className="mx-4 md:mx-0 pb-6 md:pb-[4.44vh]">
              <p className="text-base leading-[22px] pb-4 md:pb-[1.85vh] md:text-[1.66vh] md:leading-[2.22vh] font-bold">
                Услуги
              </p>
              <ul className="text-sm leading-5 ml-[16px] md:text-[1.48vh] md:leading-[2.22vh] list-disc box-content md:ml-[1.04vw] marker:text-[#D8CACF] font-medium">
                <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                  Оценка перспектив спора, консультирование
                </li>
                <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                  Сбор доказательств
                </li>
                <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                  Подготовка иных необходимых процессуальных документов
                  <br /> при рассмотрении дела в суде и иных органах
                </li>
                <li className="md:pb-[1.11vh] pb-2 md:pl-[0.62vw] pl-1">
                  Выработка правовой позиции
                </li>
                <li className="md:pl-[0.62vw] pl-1">
                  Представление интересов в судах и иных органах
                </li>
              </ul>
            </div>
            <p className="mx-4 md:mx-0 text-sm leading-4 pb-10 md:pb-[4.44vh] md:text-[1.48vh] md:leading-[2.22vh] font-medium">
              Занимаюсь также юридическим сопровождением
              <br className="hidden md:block"/> на стадии исполнения судебных актов
            </p>
            <div
              className={`h-fit px-4 py-4 md:px-[1.25vw] md:py-[2.22vh] bg-[#F8F6F7] border-[0.09vh] border-[#F0F0F5]  rounded-md shadow-md`}
            >
              <div className="pb-2 md:pb-[1.11vh] flex items-center text-[#962C52]">
                <p className="text-base leading-[22px] md:text-[1.66vh] md:leading-[2.22vh] font-bold">
                  от 10 000 ₽
                </p>
              </div>
              <p className="text-sm leading-5 md:text-[1.29vh] md:leading-[1.85vh] font-medium md:font-normal">
                Стоимость определяется индивидуально в каждой ситуации
              </p>
            </div>
          </div> */}
        </div>
      </section>
      <FeedbackForm />
    </main>
  );
};

export default support;
