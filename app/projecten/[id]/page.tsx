import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Projecten data (normaal gesproken zou dit uit een database of API komen)
const projecten = {
  webshop: {
    titel: "E-commerce Webshop",
    beschrijving:
      "Een volledig functionele webshop gebouwd met React en Node.js. Inclusief productcatalogus, winkelwagen en betalingsintegratie.",
    uitgebreideBeschrijving: `
      Dit project was een uitdaging om een complete e-commerce oplossing te bouwen van de grond af. 
      
      De frontend is gebouwd met React en maakt gebruik van context API voor state management. De gebruikersinterface is responsief en gebruiksvriendelijk, met een focus op toegankelijkheid.
      
      De backend is ontwikkeld met Node.js en Express, en gebruikt MongoDB als database. De API is RESTful en bevat endpoints voor producten, gebruikers, bestellingen en betalingen.
      
      Betalingen worden verwerkt via de Stripe API, met ondersteuning voor verschillende betaalmethoden. Het systeem stuurt automatisch bevestigingsmails na een succesvolle bestelling.
      
      Het project bevat ook een admin dashboard voor het beheren van producten, bestellingen en gebruikers.
    `,
    afbeelding: "/placeholder.svg?height=600&width=1200",
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologieen: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/username/webshop",
    liveDemo: "https://webshop-demo.vercel.app",
    datum: "Maart 2023",
    kenmerken: [
      "Responsief ontwerp",
      "Gebruikersbeheer en authenticatie",
      "Productcatalogus met zoek- en filterfuncties",
      "Winkelwagen en checkout proces",
      "Betalingsintegratie met Stripe",
      "Admin dashboard",
    ],
  },
  dashboard: {
    titel: "Admin Dashboard",
    beschrijving:
      "Een uitgebreid dashboard voor het beheren van gebruikers, producten en bestellingen. Bevat grafieken en analyses.",
    uitgebreideBeschrijving: `
      Dit admin dashboard is gebouwd met Next.js en TypeScript, en biedt een complete oplossing voor het beheren van een webapplicatie.
      
      Het dashboard bevat verschillende modules voor het beheren van gebruikers, producten, bestellingen en instellingen. Elke module heeft zijn eigen CRUD-functionaliteit.
      
      Voor de datavisualisatie zijn verschillende grafieken en diagrammen geïmplementeerd met behulp van Chart.js. Deze geven inzicht in verkopen, gebruikersactiviteit en andere belangrijke metrics.
      
      De UI is gebouwd met Tailwind CSS en is volledig responsief. Het ontwerp is gebaseerd op moderne design principes en biedt een intuïtieve gebruikerservaring.
      
      De backend is geïmplementeerd met Next.js API routes en gebruikt Prisma als ORM voor interactie met de PostgreSQL database.
    `,
    afbeelding: "/placeholder.svg?height=600&width=1200",
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologieen: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Chart.js"],
    github: "https://github.com/username/dashboard",
    liveDemo: "https://admin-dashboard-demo.vercel.app",
    datum: "Juni 2023",
    kenmerken: [
      "Gebruikersbeheer met rollen en permissies",
      "Productbeheer met voorraadtracking",
      "Orderverwerking en statusupdates",
      "Realtime statistieken en grafieken",
      "Exportfunctionaliteit voor rapporten",
      "Donkere en lichte modus",
    ],
  },
  game: {
    titel: "Unity 2D Platformer",
    beschrijving: "Een 2D platformspel ontwikkeld in Unity met C#. Bevat meerdere levels, vijanden en power-ups.",
    uitgebreideBeschrijving: `
      Dit 2D platformspel is ontwikkeld in Unity en geschreven in C#. Het spel bevat meerdere levels met toenemende moeilijkheidsgraad.
      
      De spelmechanica omvat platforming, combat, collectibles en verschillende power-ups die de speler kan verzamelen. Er zijn verschillende vijanden met unieke AI-patronen.
      
      De graphics zijn gemaakt met een combinatie van Photoshop voor sprites en Blender voor bepaalde 3D-elementen die zijn omgezet naar 2D.
      
      Het spel heeft een save/load systeem dat de voortgang van de speler bewaart, en een scoreboard dat de beste scores bijhoudt.
      
      De game is geoptimaliseerd voor zowel desktop als mobiele platforms, met ondersteuning voor toetsenbord, controller en touchscreen input.
    `,
    afbeelding: "/placeholder.svg?height=600&width=1200",
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologieen: ["Unity", "C#", "Blender", "Photoshop"],
    github: "https://github.com/username/unity-game",
    liveDemo: "https://unity-game-demo.itch.io",
    datum: "Oktober 2023",
    kenmerken: [
      "Meerdere levels met toenemende moeilijkheidsgraad",
      "Verschillende vijanden met unieke AI",
      "Power-ups en collectibles",
      "Save/load systeem",
      "Scoreboard",
      "Ondersteuning voor verschillende input methoden",
    ],
  },
  arduino: {
    titel: "Arduino Weerstation",
    beschrijving:
      "Een weerstation gebouwd met Arduino dat temperatuur, luchtvochtigheid en luchtdruk meet en de gegevens naar een webapplicatie stuurt.",
    uitgebreideBeschrijving: `
      Dit project combineert hardware en software om een volledig functioneel weerstation te creëren.
      
      De hardware bestaat uit een Arduino met verschillende sensoren voor het meten van temperatuur, luchtvochtigheid, luchtdruk en lichtintensiteit. Een ESP8266 WiFi-module zorgt voor de verbinding met het internet.
      
      De gemeten gegevens worden via MQTT naar een server gestuurd, waar ze worden opgeslagen in een database. Een React webapplicatie haalt deze gegevens op en toont ze in grafieken en dashboards.
      
      De webapplicatie biedt ook de mogelijkheid om historische gegevens te bekijken en te vergelijken, en om waarschuwingen in te stellen voor bepaalde weersomstandigheden.
      
      Het project is volledig open-source en kan worden aangepast voor verschillende toepassingen, zoals tuinautomatisering of klimaatbeheersing.
    `,
    afbeelding: "/placeholder.svg?height=600&width=1200",
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologieen: ["Arduino", "C++", "ESP8266", "MQTT", "React", "Node.js", "InfluxDB"],
    github: "https://github.com/username/weather-station",
    liveDemo: "https://weather-station-demo.vercel.app",
    datum: "December 2023",
    kenmerken: [
      "Realtime metingen van temperatuur, luchtvochtigheid en luchtdruk",
      "Draadloze gegevensoverdracht via WiFi",
      "Webinterface voor het bekijken van gegevens",
      "Historische gegevens en grafieken",
      "Waarschuwingssysteem voor extreme weersomstandigheden",
      "Energiezuinig ontwerp met batterijvoeding",
    ],
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projecten[params.id as keyof typeof projecten]

  if (!project) {
    return (
      <div className="py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Project niet gevonden</h1>
        <p className="mb-6">Het project dat je zoekt bestaat niet of is verwijderd.</p>
        <Button asChild>
          <Link href="/projecten">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar projecten
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="py-8 animate-fade-in">
      <div className="mb-6">
        <Link
          href="/projecten"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Terug naar projecten
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{project.titel}</h1>
        <p className="text-muted-foreground mb-4">{project.datum}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologieen.map((tech) => (
            <Badge key={tech} variant="secondary" className="transition-all hover:scale-105">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="relative h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image src={project.afbeelding || "/placeholder.svg"} alt={project.titel} fill className="object-cover" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Projectbeschrijving</h2>
          <div className="space-y-4 whitespace-pre-line">{project.uitgebreideBeschrijving}</div>
        </div>

        <div>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Kenmerken</h3>
              <ul className="space-y-2">
                {project.kenmerken.map((kenmerk, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>{kenmerk}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-3">
                <Button asChild className="w-full">
                  <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Repository
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="relative h-48 rounded-lg overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <Image
                src={screenshot || "/placeholder.svg"}
                alt={`Screenshot ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

