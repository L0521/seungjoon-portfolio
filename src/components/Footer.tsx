export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 mt-auto">
      <div className="flex flex-col items-center justify-center gap-1">
        <p className="text-gray-400 text-xs md:text-sm font-medium select-none">
          © {currentYear} Seungjoon Lee. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
