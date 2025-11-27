import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-black pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div
              className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center px-4"
              data-wow-delay=".2s"
            >
              {/* Иконка биткоина сверху */}
              <div className="flex justify-center mb-6">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <title>Bitcoin</title>
  <path d="M11.968 4.226c-4.42 0-8.001 3.58-8.001 8s3.58 8 8.001 8 8.001-3.58 8.001-8-3.58-8-8.001-8zm.057 1.737c3.413 0 6.19 2.777 6.19 6.19s-2.777 6.19-6.19 6.19-6.19-2.777-6.19-6.19 2.776-6.19 6.19-6.19zm-1.89 2.49v1.488h1.162c.333 0 .603.27.603.602v5.195c0 .332-.27.603-.603.603h-1.162v1.488h-.939V18.11h-1.488v.938h-.938v-.938H4.41v-.938h1.488v-5.195H4.41v-.938h1.488V8.453h.938v-.938h1.488v-.938h.939zm-.939 2.426v5.195h1.162V10.88h-1.162zm2.096 0v1.488h.603c.332 0 .602.27.602.602v1.02c0 .332-.27.603-.602.603h-.603v1.488h.603c.332 0 .602.27.602.603v1.02c0 .332-.27.603-.602.603h-.603v1.488h-.938v-1.488h-1.162V10.88h1.162v-1.488h.938v1.488h.603c.332 0 .602.27.602.602v1.02c0 .332-.27.603-.602.603h-.603v1.488h.603c.332 0 .602.27.602.603v1.02c0 .332-.27.603-.602.603h-.603v1.488h2.097c.827 0 1.49-.662 1.49-1.488v-1.02c0-.332-.27-.603-.602-.603h-.286v-1.488h.286c.332 0 .602-.27.602-.603v-1.02c0-.826-.663-1.488-1.49-1.488h-2.096z"/>
</svg>

              </div>

              <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-5xl lg:leading-[1.2]">
                Добро пожаловать в мир криптовалют!  
                Биткоин — первая и самая известная цифровая валюта, которая изменила представление о финансах.  
                Здесь вы найдёте актуальные курсы, графики и аналитику, а также сможете узнать, как работают криптобиржи.
              </h1>

              <p className="mx-auto mb-6 max-w-[600px] text-base font-medium text-white/80 sm:text-lg">
                Биржа криптовалют — это площадка, где пользователи покупают и продают биткоины и другие токены.  
                Она обеспечивает прозрачность сделок, безопасность хранения и быстрый обмен активов.
              </p>

              <p className="mb-8 text-center text-base font-medium text-white/60">
                Следите за курсами Bitcoin, Ethereum и других криптовалют. Аналитика, новости и тренды.
              </p>

              {/* Кнопки */}
              <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                <li>
                  <Link
                    href="#crypto"
                    className="rounded-full bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 transition"
                  >
                    Смотреть курсы
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="rounded-full border border-white px-6 py-2 text-white hover:bg-white hover:text-black transition"
                  >
                    О проекте
                  </Link>
                </li>
              </ul>

              {/* Анимированная стрелка вниз */}
              <div className="flex justify-center">
                <span className="animate-bounce text-white text-3xl">↓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
