import logo from "../../assets/logo.png";

export default function LogoSection() {
  return (
    <div className="mb-10 flex flex-col items-center">
      <img
        src={logo}
        alt="ResumeIQ AI"
        className="h-20 w-20"
      />

      <h1 className="mt-4 text-3xl font-bold">
        Resume<span className="text-violet-400">IQ</span> AI
      </h1>

      <p className="mt-2 text-center text-sm text-gray-400">
        AI Powered Resume Analyzer
      </p>
    </div>
  );
}