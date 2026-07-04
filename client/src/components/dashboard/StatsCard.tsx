import { motion } from "framer-motion";

type Props = {
    title: string;
    value: string | number;
    subtitle?: string;
};

export default function StatsCard({
    title,
    value,
    subtitle
}: Props) {

    return (

        <motion.div

            whileHover={{ y: -4 }}

            className="rounded-2xl border border-white/10 bg-[#111827] p-6"

        >

            <p className="text-gray-400 text-sm">

                {title}

            </p>

            <h2 className="mt-2 text-4xl font-bold">

                {value}

            </h2>

            {subtitle && (

                <p className="mt-3 text-gray-500 text-sm">

                    {subtitle}

                </p>

            )}

        </motion.div>

    );

}