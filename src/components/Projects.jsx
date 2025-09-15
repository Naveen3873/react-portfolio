import ProjectCard from './ProjectCard';
// import p1 from '../assets/project-1.png'

const sample = [
  // { title: 'Project A', description: 'Short summary', image: p1, github: 'https://github.com/your/repo', demo: 'https://your-demo.com' },
  // { title: 'Project B', description: 'Short summary', image: p1, github: 'https://github.com/your/repo' }
];

export default function Projects({ showAll }) {
  const list = showAll ? sample.concat(sample) : sample;
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {list.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
