import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import Post from './post'

export default function Home() {
  const subtitle = 'アウトプットするサイト';

  return (
    <>
      <header>Header</header>
      <main>
        <div>
          <h1>Cube</h1>
          <p>{subtitle}</p>
          <Post />
        </div>
      </main>
      <footer>Footer</footer>
    </>
  )
}
