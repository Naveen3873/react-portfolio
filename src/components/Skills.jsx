const skills = [
  { name: 'React', logo: '⚛️' },
  { name: 'Node.js', logo: '⬢' },
  { name: 'Tailwind', logo: '💠' },
  { name: 'MongoDB', logo: '🍃' },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
        {skills.map((s) => (
          <div
            key={s.name}
            className="flex items-center gap-1 p-4 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="text-2xl">{s.logo}</div>
            <div>{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}