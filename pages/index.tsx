import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return <>
    <h1>Home content</h1>
    <Image src="/big_ass_image.png" alt="Auto optimized image" width="1960" height="1080"/>
  </>
}

export default Home
