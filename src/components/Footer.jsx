export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t border-white/10">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-gray-400 md:text-left">
          Built by <span className="font-medium text-white">Qasim Mansoori</span>. 
          The source code is available on <a href="https://github.com/qasimmansoori" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 hover:text-white">GitHub</a>.
        </p>
      </div>
    </footer>
  );
}
