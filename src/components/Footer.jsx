export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xl font-semibold text-white">EMScale</div>
          <p className="mt-1 text-sm text-neutral-400">Modern motion‑first web experiences.</p>
        </div>
        <nav className="flex items-center gap-4 text-sm text-neutral-300">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#" className="hover:text-white">Contact</a>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} EMScale. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-300">Privacy</a>
            <a href="#" className="hover:text-neutral-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
