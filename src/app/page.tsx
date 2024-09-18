// src/app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Login from "./login";
import styles from "./page.module.css";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="http://192.168.33.14/bin/background.png" // 替换为你的图片路径
            alt="Background Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.loginContainer}>
          {!isLoggedIn ? (
            <Login onLogin={handleLogin} />
          ) : (
            <p>Welcome! You are logged in.</p>
          )}
        </div>
      </div>
      <footer className="mt-auto flex gap-6 flex-wrap items-center justify-center p-4">
        <Link href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">
          <span className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </span>
        </Link>
        <Link href="https://vercel.com/templates?framework=next.js" target="_blank" rel="noopener noreferrer">
          <span className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </span>
        </Link>
        <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          <span className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </span>
        </Link>
      </footer>
    </div>
  );
}