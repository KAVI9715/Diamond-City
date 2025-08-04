export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl">
        Welcome to Diamond City
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        A modern, responsive application built with Next.js and styled with Tailwind CSS. Explore our services and projects.
      </p>
    </div>
  );
}
