export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] py-8 px-6">
      <div className="max-w-[760px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[0.8125rem] text-gray-400">
          Built with{" "}
          <span className="text-gray-600 font-medium">Next.js</span>,{" "}
          <span className="text-gray-600 font-medium">Tailwind CSS</span>, and{" "}
          <span className="text-gray-600 font-medium">TypeScript</span>.
        </p>
        <p className="text-[0.8125rem] text-gray-400">
          © 2026 Mahek Patel
        </p>
      </div>
    </footer>
  );
}
