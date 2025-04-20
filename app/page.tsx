import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function Home() {
  return (
    <div className="py-8">
      {/* Header Section */}
      <header className="mb-8 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-border transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Kelvin Schouten"
                width={96}
                height={96}
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Kelvin Schouten</h1>
              <p className="text-xl text-muted-foreground mt-2">Junior Full-Stack Web Developer</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground">+31 634015396</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground">kelvinschouten@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground">Oud-Beijerland</span>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Profile Card */}
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle>Profiel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                Een junior full-stack web developer met een passie voor zelfstudie en wetenschap.
              </p>
            </CardContent>
          </Card>

          {/* Skills Card */}
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Programmeren</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="transition-all hover:scale-105">C#</Badge>
                  <Badge className="transition-all hover:scale-105">HTML</Badge>
                  <Badge className="transition-all hover:scale-105">Razor</Badge>
                  <Badge className="transition-all hover:scale-105">JavaScript</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Technologieën</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="transition-all hover:scale-105">Frontend Development</Badge>
                  <Badge className="transition-all hover:scale-105">Backend Development</Badge>
                  <Badge className="transition-all hover:scale-105">ASP.NET MVC</Badge>
                  <Badge className="transition-all hover:scale-105">nHibernate</Badge>
                  <Badge className="transition-all hover:scale-105">SQL</Badge>
                  <Badge className="transition-all hover:scale-105">REST API</Badge>
                  <Badge className="transition-all hover:scale-105">Teamsite</Badge>
                  <Badge className="transition-all hover:scale-105">Storyblok</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interests Card */}
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle>Activiteiten & Interesses</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-foreground">
                <li>Zelf studie natuurkunde curriculum</li>
                <li>Zelf studie full-stack programmeren</li>
                <li>Unity Game Dev</li>
                <li>Arduino met sensoren (Elektronica)</li>
                <li>Fitness en joggen</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Right Column (Main Content) */}
        <div className="md:col-span-2 space-y-6">
          {/* Work Experience */}
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle>Werkervaring</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">Jr. full-stack web developer</h3>
                    <p className="text-muted-foreground">Odido (T-Mobile), Den Haag</p>
                  </div>
                  <Badge variant="outline" className="text-muted-foreground">
                    Februari 2023 – November 2023
                  </Badge>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-foreground">
                  <li>
                    Onderhouden & verbeteren van bestaande pagina's en back-end services voor de publieke website van
                    Odido.
                  </li>
                  <li>Development van nieuwe functionaliteiten.</li>
                  <li>Samenwerken in een scrum team met developers, testers en een product owner.</li>
                  <li>
                    Samenwerken met andere teams, zoals communicatie met designers, business-analisten en front-end
                    developers.
                  </li>
                  <li>DevOps werkzaamheden, zoals analyseren van problemen op productie via Splunk dashboards.</li>
                </ul>
              </div>

              <Separator />

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">Crediteurenadministratie medewerker</h3>
                    <p className="text-muted-foreground">Media Markt, Rotterdam</p>
                  </div>
                  <Badge variant="outline" className="text-muted-foreground">
                    September t/m December 2017
                  </Badge>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-foreground">
                  <li>Het in kaart brengen van bedrijfsprocessen met betrekking tot Juke</li>
                  <li>
                    Het inboeken van facturen die binnen komen vanuit alle vestigingen van de Media Markt Locaties
                  </li>
                  <li>Het corrigeren van foutief ingeboekte facturen via het SAP-systeem</li>
                  <li>Het afhandelen van vragen van vestingen via mail en telefoon</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle>Opleidingen en Certificaten</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                  <div className="md:col-span-3">
                    <p className="font-medium">Eigen project React, Next.js, Node.Js</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">Bezig</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                  <div className="md:col-span-3">
                    <p className="font-medium">The Odin Project (Full stack cursus)</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">Bezig</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                  <div className="md:col-span-3">
                    <p className="font-medium">FreeCodeCamp (Full stack cursus)</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">Bezig</Badge>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                  <div className="md:col-span-3">
                    <p className="font-medium">VWO Wiskunde B Certificaat</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">Juli 2022</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                  <div className="md:col-span-3">
                    <p className="font-medium">VWO Natuurkunde Certificaat</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">Juli 2021</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                  <div className="md:col-span-3">
                    <p className="font-medium">Propedeuse HBO Bedrijfseconomie</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">September 2016</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                  <div className="md:col-span-3">
                    <p className="font-medium">HAVO Economie & Maatschappij</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">Juni 2015</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                  <div className="md:col-span-3">
                    <p className="font-medium">MAVO Economie</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">Juni 2012</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience with Technologies */}
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle>Ervaring Technologieën</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-foreground">
                <li>Frontend Development (HTML, Razor)</li>
                <li>Backend Developement (C#, ASP .NET MVC, nHibernate)</li>
                <li>Database Management (SQL)</li>
                <li>Content Management Systeem (Teamsite & Storyblok)</li>
                <li>REST-service (OpenAPI)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

