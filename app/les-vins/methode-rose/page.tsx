import { WinePageLuxe } from "@/components/wine-page-luxe"
import { getWineBySlug } from "@/lib/wines-data"
import { notFound } from "next/navigation"

export default function MethodeRosePage() {
  const wine = getWineBySlug("methode-rose-2020")
  
  if (!wine) {
    notFound()
  }

  return (
    <WinePageLuxe
      wine={wine}
      imagePath="/Page/Page Méthode Rosé/LA METHODE ROSE.jpg"
      pdfPath="/Page/Page Méthode Rosé/FT_la_méthode_rosée_23.pdf"
    />
  )
}

export async function generateMetadata() {
  const wine = getWineBySlug("methode-rose-2020")
  
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
      images: ["/Page/Page Méthode Rosé/LA METHODE ROSE.jpg"],
    },
  }
}
