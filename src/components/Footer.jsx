export default function Footer() {
  return (
    <footer className="py-6 border-t border-slate-200 dark:border-slate-800 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} Naveen K. All rights reserved.</p>
      </div>
    </footer>
  );
}