"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();
  const [sticky, setSticky] = useState(false);
  const pathUrl = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/80 backdrop-blur-md shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Логотип */}
        <Link href="/" className="flex items-center gap-3">
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 text-yellow-400"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Bitcoin</title>
            <path
              fill="currentColor"
              d="M11.968 4.226c-4.42 0-8.001 3.58-8.001 8s3.58 8 8.001 8 8.001-3.58 8.001-8-3.58-8-8.001-8zm.057 1.737c3.413 0 6.19 2.777 6.19 6.19s-2.777 6.19-6.19 6.19-6.19-2.777-6.19-6.19 2.776-6.19 6.19-6.19z"
            />
          </svg>
          <span className="text-xl font-bold text-white tracking-wide">
            CryptoDash
          </span>
        </Link>

        {/* Навигация */}
        <nav className="hidden md:flex gap-6 text-white">
          <Link href="#crypto" className="hover:text-yellow-400 transition">
            Курсы
          </Link>
          <Link href="#about" className="hover:text-yellow-400 transition">
            О проекте
          </Link>
          <Link href="#contact" className="hover:text-yellow-400 transition">
            Контакты
          </Link>
        </nav>

        {/* Правая часть: вход/регистрация + переключатель темы */}
        <div className="flex items-center gap-4">
          {session?.user ? (
            <>
              <p
                className={`px-4 py-2 text-base font-medium ${
                  !sticky && pathUrl === "/" ? "text-white" : "text-dark"
                }`}
              >
                {session?.user?.name}
              </p>
              <button
                onClick={() => signOut()}
                className="rounded-lg bg-yellow-500 px-5 py-2 text-base font-medium text-black hover:bg-yellow-600 transition"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/signin"
                className="px-5 py-2 text-base font-medium text-white hover:text-yellow-400 transition"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="rounded-lg bg-yellow-500 px-5 py-2 text-base font-medium text-black hover:bg-yellow-600 transition"
              >
                Sign Up
              </Link>
            </>
          )}

          {/* theme toggler */}
          <button
            aria-label="theme toggler"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-8 w-8 items-center justify-center text-white duration-300"
          >
            <span>
              {/* Луна (dark mode) */}
              <svg
                viewBox="0 0 16 16"
                className="hidden h-[22px] w-[22px] fill-current dark:block"
              >
                <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z" />
              </svg>
              {/* Солнце (light mode) */}
              <svg
                viewBox="0 0 23 23"
                className={`h-[30px] w-[30px] fill-current text-yellow-400 dark:hidden`}
              >
                <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
