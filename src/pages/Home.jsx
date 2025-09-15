import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export default function Home() {
return (
<div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
<Header />
<main className="container mx-auto px-6 py-12">
<Hero />
<About />
<Skills />
<Projects />
<Contact />
</main>
<Footer />
</div>
)
}