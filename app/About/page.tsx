"use client"; //learn this better
import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../About/About.module.css";


export default function About() {
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Helper to set refs
  const setSectionRef = (el: HTMLDivElement | null, idx: number) => {
    sectionRefs.current[idx] = el;
  };

  useEffect(() => {
    console.log("test");
    sectionRefs.current.forEach((ref, i) => {
      if (ref) {
        console.log("ref",    ref.style.animationDelay = `${i * 0.4 + 0.5}s`);
        ref.style.animationDelay = `${i * 0.4 + 0.5}s`;
        ref.style.opacity = "1";
      }
    });
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>ABOUT VODAFONE</h1>
          <p className={styles.heroText}>
            Connecting people, businesses, and communities across the globe.
          </p>
        </section>

        {/* Who We Are */}
        <section
          className={styles.section}
          ref={el => setSectionRef(el as HTMLDivElement, 0)}
        >
          <h2>Who We Are</h2>
          <p>
            Vodafone is one of the world’s leading telecommunications companies,
            providing mobile, fixed, and digital services to millions of customers.
          </p>
        </section>

        {/* Mission & Vision */}
        <section
          className={styles.section}
          ref={el => setSectionRef(el as HTMLDivElement, 1)}
        >
          <h2>Our Mission</h2>
          <p>
            To empower people and businesses to stay connected, share experiences,
            and drive digital innovation that improves everyday life.
          </p>
        </section>

        {/* Innovation */}
        <section
          className={styles.section}
          ref={el => setSectionRef(el as HTMLDivElement, 2)}
        >
          <h2>Innovation & Technology</h2>
          <p>
            Vodafone is at the forefront of 5G, IoT, and cloud services, delivering
            next-generation connectivity for the future.
          </p>
        </section>

        {/* Sustainability */}
        <section
          className={styles.section}
          ref={el => setSectionRef(el as HTMLDivElement, 3)}
        >
          <h2>Sustainability</h2>
          <p>
            We are committed to reducing carbon emissions and promoting digital
            inclusion, building a more sustainable digital society for everyone.
          </p>
        </section>
      </main>
    </div>
  );
}