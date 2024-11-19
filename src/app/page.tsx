"use client"

import Layout from "./layout"
import AnimalCard from "@/component/AnimalCard"
export default function Home() {
  return (
    <Layout>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AnimalCard
          breed={node.breed}
          name={node.name}
          slug={node.slug}
          image={node.image}
          key={node.id}
          origin={node.origin}
          shortStory={node.shortStory}
        />
      </section>
    </Layout>
  )
}
