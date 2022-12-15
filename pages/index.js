import React from 'react'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <Layout>
      <div className={styles.bodyPage}>
        <div className={styles.header}>
          <div className={styles.itemHeader}>
            <Image
              className={styles.imageHeader}
              src="/me.webp"
              width={250}
              height={250}
            />
          </div>
          <div className={styles.itemHeader}>
            <h1 className={styles.titleHeader}>Nicolas Lira</h1>
            <h3 className={styles.displayHeader}>{'< Systems Analyst >'}</h3>
          </div>
        </div>

        <div className={styles.latestWork}>
          <div className={styles.displayInline}>
            <span className={styles.line}></span>
            <h2 className={styles.displayLatest}>LATEST WORKS AND PROJECTS</h2>
            <span className={styles.line}></span>
          </div>

          <div className={styles.contentLatestWork}>
            <div className={styles.card}>
              <div className={styles.BannerWork}>
                <Image
                  src="/MyListPlus.png"
                  height={127.4}
                  width={254.6}
                />
              </div>
              <div>
                <h1 className={styles.titleWork}>My List Plus</h1>
                <p className={styles.paragraphWork}>This project aims to practice the content of the second module of Bootcamp Carrefur web Developer by DIO. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
