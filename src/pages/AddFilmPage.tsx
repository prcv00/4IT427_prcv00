import AddFilmForm from "@/components/AddFilmForm";

export function AddFilmPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Přidat film
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Vyplň údaje o filmu a přidej ho do svého watchlistu.
        </p>
      </header>

      <AddFilmForm />
    </main>
  );
}
