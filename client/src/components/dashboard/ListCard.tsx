import DashboardCard from "../ui/DashboardCard";

type Props = {
    title: string;
    items: string[];
};

export default function ListCard({
    title,
    items,
}: Props) {
    return (
        <DashboardCard title={title}>

            <ul className="space-y-3">

                {items.slice(0, 5).map((item) => (

                    <li key={item}>

                        • {item}

                    </li>

                ))}

            </ul>

        </DashboardCard>
    );
}