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
            shortStory="he Boxer is a medium to large, short-haired dog breed of mastiff-type, developed in Germany. The coat is smooth and tight-fitting; colors are fawn, brindled, or white, with or without white markings. Boxers are brachycephalic (they have broad, short skulls), have a square muzzle, mandibular prognathism (an underbite), very strong jaws, and a powerful bite ideal for hanging on to large prey"
          />
        );
      })}
    </section>
  );
}
