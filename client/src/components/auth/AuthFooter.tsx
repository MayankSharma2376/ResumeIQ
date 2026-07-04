import { Link } from "react-router-dom";

type Props = {
  text: string;
  linkText: string;
  to: string;
};

export default function AuthFooter({
  text,
  linkText,
  to,
}: Props) {
  return (
    <p className="mt-8 text-center text-sm text-gray-400">
      {text}{" "}
      <Link
        to={to}
        className="font-semibold text-violet-400 hover:text-violet-300"
      >
        {linkText}
      </Link>
    </p>
  );
}