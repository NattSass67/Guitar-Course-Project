"use client";
import { logoutUser } from "@/sessions/my-auth";
import { useAppDispatch, useAppSelector } from "@/sessions/store";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const session = useAppSelector((state) => state.mySession);
  const router = useRouter();
  const [dropClickMobile, setDropMobile] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const handleClickMobile = () => {
    if (!dropClickMobile) {
      setDropMobile(true);
    } else {
      setDropMobile(false);
    }
  };

  const dropMenu: ReactNode = (
    <div className="items-center justify-between font-medium w-full md:hidden md:flex md:w-auto md:order-1">
      <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/my-courses"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            My Course
          </a>
        </li>
        <li>
          <a
            href="/creator/my-course"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Creator tools
          </a>
        </li>
        <li>
          {!session.isLoggedIn ? <a
            href="/auth//login"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Log in
          </a> : <a
            href="#" onClick={handleLogout}
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Log out
          </a> 
          }
        </li>
        {!session.isLoggedIn && <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Register
          </a>
        </li>}
      </ul>
    </div>
  );

  return (
    <>
      <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://cdn.dribbble.com/users/88313/screenshots/4325546/db.png?compress=1&resize=400x300&vertical=top"
              className="size-24"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              JackGT
            </span>
          </a>
          <button
            onClick={handleClickMobile}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {dropClickMobile ? dropMenu : <></>}
          <div className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col mr-4 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:gap-x-4 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/my-courses"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  My Course
                </a>
              </li>
              <li>
                <a
                  href="/creator/my-course"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Creator tools
                </a>
              </li>
              <li>
                {!session.isLoggedIn ? (
                  <button
                    onClick={() => {
                      router.push("/auth/login");
                      console.log(session.isLoggedIn)
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Log In
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleLogout();
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Log Out
                  </button>
                )}
              </li>
              {!session.isLoggedIn && <li>
                <button
                  onClick={() => {
                    router.push("/auth/register");
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Register
                </button>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
