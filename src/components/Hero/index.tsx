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
              <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                Добро пожаловать в мир криптовалют!  
                Биткоин — первая и самая известная цифровая валюта, которая изменила представление о финансах.  
                Здесь вы найдёте актуальные курсы, графики и аналитику, а также сможете узнать, как работают криптобиржи.
              </h1>

              <p className="mx-auto mb-6 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                Биржа криптовалют — это площадка, где пользователи покупают и продают биткоины и другие токены.  
                Она обеспечивает прозрачность сделок, безопасность хранения и быстрый обмен активов.
              </p>

              <p className="mb-8 text-center text-base font-medium text-white/60">
                Следите за курсами Bitcoin, Ethereum и других криптовалют. Аналитика, новости и тренды.
              </p>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
