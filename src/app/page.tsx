import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-4xl font-bold">Добро пожаловать!</h1>
      <p className="mt-4 text-lg">
        Пожалуйста
        <Link href="/login" className="text-cyan-500">
          {` авторизуйтесь `}
        </Link>
        для доступа к вашему профилю.
      </p>
    </div>
  );
}
