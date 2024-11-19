import AnimalCard from "@/components/AnimalCard";
export default function Home() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <AnimalCard
        breed="Boxer"
        name="tyson"
        slug="tyson"
        image="/dog.png"
        key="1"
        origin="Germany"
        shortStory="he Boxer is a medium to large, short-haired dog breed of mastiff-type, developed in Germany. The coat is smooth and tight-fitting; colors are fawn, brindled, or white, with or without white markings. Boxers are brachycephalic (they have broad, short skulls), have a square muzzle, mandibular prognathism (an underbite), very strong jaws, and a powerful bite ideal for hanging on to large prey"
      />
    </section>
  );
}
