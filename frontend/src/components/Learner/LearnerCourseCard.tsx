import { useRouter } from "next/navigation";

export default function CardLearner(params: { title: string; courseId: string ; description: string;}) {
  const router = useRouter();

  return (
    <>
      <div
        onClick={() => {
          router.push(`/my-courses/${params.courseId}`);
        }}
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-8 overflow-hidden transition ease-in-out hover:-translate-y-1 hover:scale-105"
      >
        <img src={"/guitar.jpg"} alt="Image" />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {params.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.{params.description}
          </p>
        </div>
      </div>
    </>
  );
}
