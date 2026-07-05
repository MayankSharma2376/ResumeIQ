interface Props {

    title?: string;

    description?: string;

    onRetry?: () => void;

}

export default function ErrorState({

    title = "Something went wrong",

    description = "Please try again.",

    onRetry

}: Props) {

    return (

        <div className="flex flex-col items-center justify-center py-20">

            <div className="text-6xl">

                ⚠️

            </div>

            <h2 className="text-2xl font-bold mt-5">

                {title}

            </h2>

            <p className="text-gray-400 mt-3 text-center">

                {description}

            </p>

            {onRetry && (

                <button

                    onClick={onRetry}

                    className="mt-6 bg-violet-600 hover:bg-violet-700 px-5 py-3 rounded-xl"

                >

                    Retry

                </button>

            )}

        </div>

    );

}