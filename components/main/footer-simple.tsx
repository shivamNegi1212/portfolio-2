'use client';

export const FooterSimple = () => {
  return (
    <footer
      className="w-full border-t border-purple-500/20 py-6 px-10 relative"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="text-center text-gray-400 text-sm hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 transition-all duration-300">
          © Shivam NEGI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
