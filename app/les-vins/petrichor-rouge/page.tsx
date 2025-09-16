import { WinePageLuxe } from "@/components/wine-page-luxe"
import { getWineBySlug } from "@/lib/wines-data"
import { notFound } from "next/navigation"

export default function PetrichorRougePage() {
  const wine = getWineBySlug("petrichor-rouge-2020")
  
  if (!wine) {
    notFound()
  }

  return (
    <WinePageLuxe
      wine={wine}
      imagePath="/Page/Page Cuvée Pertichor Rouge/ROUGE PETRICHOR.jpg"
      pdfPath="/Page/Page Cuvée Pertichor Rouge/FT_Rouge_Petrichor_2020.pdf"
    />
  )
}

export async function generateMetadata() {
  const wine = getWineBySlug("petrichor-rouge-2020")
  
  if (!wine) {
    return {
      title: "Vin non trouvé",
    }
  }

  return {
    title: `${wine.name} ${wine.vintage} - Château Lastours`,
    description: wine.longDescription,
    openGraph: {
      title: `${wine.name} ${wine.vintage} - Château Lastours`,
      description: wine.longDescription,
      images: ["/Page/Page Cuvée Pertichor Rouge/ROUGE PETRICHOR.jpg"],
    },
  }
}
