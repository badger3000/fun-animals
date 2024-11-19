import Search from "./Search";
import Navigation from "./Nav";

export default function Header() {
  const title = "Choose your dog";
  const tagline = "We have the the largest selection of dogs";
  return (
    <header className="flex flex-col m-auto text-center mb-8 container px-2 lg:px-0 py-4">
      <Search />
      <h1 className="lg:text-5xl text-4xl font-bold lg:py-2 transition-all duration-200 mb-2 lg:mb-4">
        {title}
      </h1>
      <p className="text-gray lg:pb-2 lg:mb-4 mb-6">{tagline}</p>
      <Navigation />
    </header>
  );
}
