import React from 'react'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Footer from '../components/Footer'


export default function ProjectsPage() {
return (
<div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
<Header />
<main className="container mx-auto px-6 py-12">
<h1 className="text-3xl font-bold mb-6">Projects</h1>
<Projects showAll />
</main>
<Footer />
</div>
)
}