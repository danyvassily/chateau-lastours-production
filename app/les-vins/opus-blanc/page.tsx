import { WinePageLuxe } from "@/components/wine-page-luxe"
import { getWineBySlug } from "@/lib/wines-data"
import { notFound } from "next/navigation"

export default function OpusBlancPage() {
  const wine = getWineBySlug("opus-blanc-2022")
  
  if (!wine) {
    notFound()
  }

  return (
    <WinePageLuxe
      wine={wine}
      imagePath="/Page/Page Cuvée Opus Balnc/BLANC OPUS.jpg"
      pdfPath="/Page/Page Cuvée Opus Balnc/FT_blanc_Opus_2023.pdf"
    />
  )
}

export async function generateMetadata() {
  const wine = getWineBySlug("opus-blanc-2022")
  
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
      images: ["/Page/Page Cuvée Opus Balnc/BLANC OPUS.jpg"],
    },
  }
}
