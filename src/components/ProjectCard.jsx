export default function ProjectCard({ project }) {
  return (
    <article className="border rounded-lg overflow-hidden hover:shadow-2xl transition-shadow">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm mt-2">{project.description}</p>
        <div className="mt-4 flex gap-3">
          <a href={project.github} target="_blank" rel="noreferrer" className="text-sm underline">
            Code
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm underline">
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}