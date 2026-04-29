export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-white/5 py-12 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-6">
        <div>
          <span className="font-bold text-white">Algorithm Alchemists</span>
          <p className="text-sm text-slate-500">© 2024 Algorithm Alchemists</p>
        </div>

        <div className="flex gap-6">
          <a className="text-sm text-slate-500 hover:text-white">Privacy</a>
          <a className="text-sm text-slate-500 hover:text-white">Terms</a>
          <a className="text-sm text-slate-500 hover:text-white">Security</a>
        </div>
      </div>
    </footer>
  );
}
