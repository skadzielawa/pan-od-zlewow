export default function NotFound() {
  return (
    <main className="mx-auto w-[min(40rem,calc(100%-2.5rem))] py-24">
      <h1 className="text-4xl font-medium tracking-[-0.035em]">
        Nie ma takiej strony.
      </h1>
      <p className="mt-6">
        <a className="underline-offset-4 hover:underline" href="/pl">
          Pan od zlewów
        </a>
      </p>
      <p className="mt-10 text-ash">This page does not exist.</p>
      <p className="mt-3">
        <a className="underline-offset-4 hover:underline" href="/en">
          Pan od zlewów
        </a>
      </p>
    </main>
  );
}
