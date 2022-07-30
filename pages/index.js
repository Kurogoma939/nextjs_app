import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'

export default function Home() {
  return (
    <div className='hero'>
      <h1 style={{ color: 'red', fontSize: '80px' }}>CUBE</h1>
      <hr />
      <p>アウトプットするサイト</p>
    </div>
  )
}
