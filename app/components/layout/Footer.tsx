export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-xl tracking-tighter">ALGO<span className="text-primary">FUTURE</span></p>
          <p className="text-default-500 text-sm">Defining the future with algorithms.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-default-500 hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="text-default-500 hover:text-foreground transition-colors">Twitter</a>
          <a href="#" className="text-default-500 hover:text-foreground transition-colors">GitHub</a>
        </div>

        <div className="text-default-500 text-xs text-center md:text-right max-w-xs">
          <p>&copy; {new Date().getFullYear()} AlgoFuture. All rights reserved.</p>
          <p className="mt-2">Risk Disclaimer: Trading involves substantial risk and is not suitable for every investor.</p>
        </div>
      </div>
    </footer>
  );
}
