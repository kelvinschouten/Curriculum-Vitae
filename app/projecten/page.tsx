import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Projecten data
const projecten = [
  {
    id: "webshop",
    titel: "E-commerce Webshop",
    beschrijving:
      "Een volledig functionele webshop gebouwd met React en Node.js. Inclusief productcatalogus, winkelwagen en betalingsintegratie.",
    afbeelding: "/placeholder.svg?height=400&width=600",
    technologieen: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/username/webshop",
    demo: "/projecten/webshop",
    datum: "Maart 2023",
  },
  {
    id: "dashboard",
    titel: "Admin Dashboard",
    beschrijving:
      "Een uitgebreid dashboard voor het beheren van gebruikers, producten en bestellingen. Bevat grafieken en analyses.",
    afbeelding: "/placeholder.svg?height=400&width=600",
    technologieen: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    github: "https://github.com/username/dashboard",
    demo: "/projecten/dashboard",
    datum: "Juni 2023",
  },
  {
    id: "game",
    titel: "Unity 2D Platformer",
    beschrijving: "Een 2D platformspel ontwikkeld in Unity met C#. Bevat meerdere levels, vijanden en power-ups.",
    afbeelding: "/placeholder.svg?height=400&width=600",
    technologieen: ["Unity", "C#", "Blender", "Photoshop"],
    github: "https://github.com/username/unity-game",
    demo: "/projecten/game",
    datum: "Oktober 2023",
  },
  {
    id: "arduino",
    titel: "Arduino Weerstation",
    beschrijving:
      "Een weerstation gebouwd met Arduino dat temperatuur, luchtvochtigheid en luchtdruk meet en de gegevens naar een webapplicatie stuurt.",
    afbeelding: "/placeholder.svg?height=400&width=600",
    technologieen: ["Arduino", "C++", "ESP8266", "MQTT", "React"],
    github: "https://github.com/username/weather-station",
    demo: "/projecten/arduino",
    datum: "December 2023",
  },
]

export default function ProjectenPage() {
  return (
    <div className="py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Mijn Projecten</h1>
        <p className="text-muted-foreground">
          Een overzicht van mijn persoonlijke projecten. Klik op een project voor meer details of bekijk de broncode op
          GitHub.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projecten.map((project) => (
          <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.afbeelding || "/placeholder.svg"}
                alt={project.titel}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.titel}</CardTitle>
              <CardDescription>{project.datum}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{project.beschrijving}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologieen.map((tech) => (
                  <Badge key={tech} variant="secondary" className="transition-all hover:scale-105">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline" size="sm">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link href={project.demo}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Bekijk Project
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

