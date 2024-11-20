import AnimalCard from "@/components/AnimalCard";
import {getAnimals} from "@/content/querys";

export default async function Home() {
  const data = await getAnimals();
  const animals = data.funAnimalsCollection.items;
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {animals.map((animal) => {
        return (
          <AnimalCard
            breed={animal.breed}
            name={animal.name}
            slug={animal.slug}
            image={animal.image.url}
            key={animal._id}
            origin={animal.origin}
            shortStory={animal.shortStory.json}
          />
        );
      })}
    </section>
  );
}
