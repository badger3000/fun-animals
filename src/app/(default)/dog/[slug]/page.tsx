import Image from "next/image";
import Link from "next/link";
import {ArrowLeft, Heart, MapPin} from "lucide-react";
import {getAnimalsPost} from "@/content/querys";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
export const runtime = "edge";
export default async function AnimialSingle({
  params,
}: {
  params: {slug: string};
}) {
  const {slug} = await params;
  const data = await getAnimalsPost(slug);
  const content = data.funAnimalsCollection.items[0];

  return (
    <section className="relative min-h-screen min-w-screen pt-[50vh] lg:pt-0">
      <Link href="/" className="absolute top-4 lg:top-12 left-4 z-10">
        <ArrowLeft color="white" size={35} />
      </Link>
      <div className="fixed lg:relative top-0 left-0">
        <Image
          src={content.image.url}
          alt={content.name}
          width={content.image.width}
          height={content.image.height}
          priority={true}
          className="object-cover z-0 w-full lg:mt-8 lg:rounded-t-2xl transition-all duration-200"
        />
      </div>
      <div className="bg-white w-screen h-screen lg:w-full  z-10 relative p-4 rounded-2xl lg:mt-[-10rem]">
        <div className="flex flex-row justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">{content.name}</h1>
          <span className="p-4 bg-peach inline-block rounded-lg">
            <Heart className="stroke-pink" />
          </span>
        </div>
        <div className="flex flex-row items-center justify-start mb-6">
          <MapPin className=" stroke-blue mr-2" />
          <p>{content.origin}</p>
        </div>
        <div className="flex flex-row items-center justify-start text-gray mb-6 ">
          {documentToReactComponents(content.shortStory.json)}
        </div>
        {/* <Range friendliness={friendliness} shedding={shedding} />
          <Button text={buttonTxT} /> */}
      </div>
    </section>
  );
}
