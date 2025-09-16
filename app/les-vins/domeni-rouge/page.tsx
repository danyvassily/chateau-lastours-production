import { WinePageLuxe } from "@/components/wine-page-luxe"
import { getWineBySlug } from "@/lib/wines-data"
import { notFound } from "next/navigation"

export default function DomeniRougePage() {
  const wine = getWineBySlug("domeni-rouge-2021")
  
  if (!wine) {
    notFound()
  }

  return (
    <WinePageLuxe
      wine={wine}
      imagePath="/Page/Page Cuvée Domeni Rouge/ROUGE DOMENI.jpg"
      pdfPath="/Page/Page Cuvée Domeni Rouge/FT_rouge_Domeni_2022.pdf"
    />
  )
}

export async function generateMetadata() {
  const wine = getWineBySlug("domeni-rouge-2021")
  
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
      images: ["/Page/Page Cuvée Domeni Rouge/ROUGE DOMENI.jpg"],
    },
  }
}
