import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Blog posts data
const blogPosts = [
  {
    id: "nextjs-vs-react",
    titel: "Next.js vs React: Wanneer gebruik je wat?",
    samenvatting:
      "Een vergelijking tussen Next.js en React, en wanneer je welk framework zou moeten gebruiken voor je projecten.",
    afbeelding: "/placeholder.svg?height=400&width=600",
    datum: "15 april 2024",
    leestijd: "8 min",
    categorieen: ["Frontend", "React", "Next.js"],
  },
  {
    id: "typescript-tips",
    titel: "5 TypeScript tips die je code beter maken",
    samenvatting:
      "Ontdek vijf TypeScript tips en trucs die je code leesbaarder, veiliger en beter onderhoudbaar maken.",
    afbeelding: "/placeholder.svg?height=400&width=600",
    datum: "2 april 2024",
    leestijd: "6 min",
    categorieen: ["TypeScript", "Programmeren", "Tips"],
  },
  {
    id: "arduino-projecten",
    titel: "Beginnen met Arduino: 3 leuke projecten voor beginners",
    samenvatting:
      "Een gids voor beginners die willen starten met Arduino. Inclusief drie eenvoudige maar leuke projecten om mee te beginnen.",
    afbeelding: "/placeholder.svg?height=400&width=600",
    datum: "20 maart 2024",
    leestijd: "10 min",
    categorieen: ["Arduino", "Elektronica", "DIY"],
  },
  {
    id: "css-grid-flexbox",
    titel: "CSS Grid vs Flexbox: De ultieme gids",
    samenvatting:
      "Een diepgaande vergelijking tussen CSS Grid en Flexbox, met voorbeelden van wanneer je welke techniek zou moeten gebruiken.",
    afbeelding: "/placeholder.svg?height=400&width=600",
    datum: "5 maart 2024",
    leestijd: "12 min",
    categorieen: ["CSS", "Frontend", "Webdesign"],
  },
]

export default function BlogPage() {
  return (
    <div className="py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground">
          Mijn gedachten, ervaringen en tips over webontwikkeling, programmeren en technologie.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-48 md:h-full overflow-hidden">
                <Image
                  src={post.afbeelding || "/placeholder.svg"}
                  alt={post.titel}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="md:col-span-2 flex flex-col p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categorieen.map((categorie) => (
                    <Badge key={categorie} variant="secondary" className="transition-all hover:scale-105">
                      {categorie}
                    </Badge>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{post.titel}</h2>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <CalendarDays className="mr-1 h-4 w-4" />
                    {post.datum}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {post.leestijd} leestijd
                  </div>
                </div>
                <p className="mb-4 flex-grow">{post.samenvatting}</p>
                <div className="mt-auto">
                  <Button asChild variant="link" className="p-0 h-auto font-semibold">
                    <Link href={`/blog/${post.id}`} className="flex items-center">
                      Lees meer <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

