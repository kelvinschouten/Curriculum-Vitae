import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, ArrowLeft, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Blog posts data (normaal gesproken zou dit uit een database of CMS komen)
const blogPosts = {
  "nextjs-vs-react": {
    titel: "Next.js vs React: Wanneer gebruik je wat?",
    samenvatting:
      "Een vergelijking tussen Next.js en React, en wanneer je welk framework zou moeten gebruiken voor je projecten.",
    inhoud: `
      # Next.js vs React: Wanneer gebruik je wat?

      Als webontwikkelaar sta je vaak voor de keuze: gebruik ik React of Next.js voor mijn volgende project? Beide zijn krachtige tools voor het bouwen van moderne webapplicaties, maar ze hebben verschillende sterke punten en use cases.

      ## Wat is React?

      React is een JavaScript-bibliotheek voor het bouwen van gebruikersinterfaces, ontwikkeld en onderhouden door Facebook (nu Meta). Het stelt ontwikkelaars in staat om herbruikbare UI-componenten te maken die efficiënt updaten wanneer de data verandert.

      ### Voordelen van React:

      - **Flexibiliteit**: React dicteert niet hoe je je applicatie structureert of welke tools je gebruikt voor routing, state management, etc.
      - **Lichtgewicht**: De core library is relatief klein.
      - **Enorme community**: React heeft een grote community en ecosysteem van bibliotheken.
      - **Ideaal voor single-page applications (SPAs)**: React is ontworpen voor het bouwen van dynamische client-side applicaties.

      ## Wat is Next.js?

      Next.js is een React framework dat extra structuur, features en optimalisaties biedt. Het is ontwikkeld door Vercel en biedt een meer opinionated benadering van React-ontwikkeling.

      ### Voordelen van Next.js:

      - **Server-side rendering (SSR)**: Next.js kan pagina's op de server renderen, wat voordelen biedt voor SEO en initiële laadtijden.
      - **Static site generation (SSG)**: Pagina's kunnen tijdens de build worden gegenereerd, wat resulteert in zeer snelle websites.
      - **File-based routing**: De mappenstructuur bepaalt automatisch de routes van je applicatie.
      - **API routes**: Je kunt eenvoudig API endpoints maken binnen je Next.js applicatie.
      - **Image optimization**: Ingebouwde ondersteuning voor het optimaliseren van afbeeldingen.
      - **Zero config**: Werkt out-of-the-box met minimale configuratie.

      ## Wanneer kies je voor React?

      React is een goede keuze wanneer:

      1. **Je volledige controle wilt over je stack**: Als je specifieke voorkeuren hebt voor routing, state management, etc.
      2. **Je een bestaande backend hebt**: Als je al een API hebt en alleen een frontend nodig hebt.
      3. **Je een widget of component bouwt**: Voor het integreren van React in een bestaande applicatie.
      4. **Je een mobiele app bouwt met React Native**: De kennis is overdraagbaar.

      ## Wanneer kies je voor Next.js?

      Next.js is een betere keuze wanneer:

      1. **SEO belangrijk is**: Dankzij server-side rendering worden je pagina's beter geïndexeerd door zoekmachines.
      2. **Je een complete website bouwt**: Next.js biedt een all-in-one oplossing.
      3. **Performance cruciaal is**: De optimalisaties van Next.js resulteren in snellere websites.
      4. **Je snel wilt ontwikkelen**: De conventies en ingebouwde features versnellen het ontwikkelproces.
      5. **Je een full-stack applicatie nodig hebt**: Met API routes kun je backend functionaliteit bouwen binnen hetzelfde project.

      ## Conclusie

      De keuze tussen React en Next.js hangt af van je specifieke behoeften:

      - **Kies React** als je maximale flexibiliteit wilt en volledige controle over je tooling.
      - **Kies Next.js** als je een complete oplossing zoekt met ingebouwde optimalisaties en conventies die je ontwikkelproces versnellen.

      In veel gevallen is Next.js de betere keuze voor nieuwe projecten, tenzij je specifieke redenen hebt om alleen React te gebruiken. Het biedt alle voordelen van React, plus extra features die je anders zelf zou moeten implementeren of configureren.

      Wat is jouw ervaring met React en Next.js? Laat het me weten in de comments!
    `,
    afbeelding: "/placeholder.svg?height=600&width=1200",
    datum: "15 april 2024",
    leestijd: "8 min",
    categorieen: ["Frontend", "React", "Next.js"],
    auteur: "Kelvin Schouten",
  },
  "typescript-tips": {
    titel: "5 TypeScript tips die je code beter maken",
    samenvatting:
      "Ontdek vijf TypeScript tips en trucs die je code leesbaarder, veiliger en beter onderhoudbaar maken.",
    inhoud: `
      # 5 TypeScript tips die je code beter maken

      TypeScript is een krachtige superset van JavaScript die statische typering toevoegt aan de taal. Het helpt je om veel voorkomende fouten te voorkomen en maakt je code beter onderhoudbaar. Hier zijn vijf tips om het meeste uit TypeScript te halen.

      ## 1. Gebruik strikte configuratie

      Een van de eerste dingen die je zou moeten doen in een TypeScript project is het inschakelen van strikte modus. Dit zorgt ervoor dat TypeScript strenger is bij het controleren van je code.

      \`\`\`json
      // tsconfig.json
      {
        "compilerOptions": {
          "strict": true
        }
      }
      \`\`\`

      Dit schakelt verschillende strikte checks in, zoals \`noImplicitAny\`, \`strictNullChecks\`, \`strictFunctionTypes\` en meer. Het kan in het begin wat meer werk zijn, maar het levert op de lange termijn veel voordelen op.

      ## 2. Maak gebruik van utility types

      TypeScript komt met een aantal ingebouwde utility types die je helpen bij het manipuleren van bestaande types. Hier zijn enkele nuttige voorbeelden:

      \`\`\`typescript
      interface User {
        id: number;
        name: string;
        email: string;
        password: string;
      }

      // Alleen lezen versie van User
      type ReadonlyUser = Readonly<User>;

      // Een User zonder het password veld
      type PublicUser = Omit<User, 'password'>;

      // Alleen de id en name velden van User
      type BasicUser = Pick<User, 'id' | 'name'>;

      // Maak alle velden optioneel (handig voor updates)
      type PartialUser = Partial<User>;
      \`\`\`

      Deze utility types maken je code meer expressief en helpen je om DRY (Don't Repeat Yourself) principes te volgen.

      ## 3. Gebruik discriminated unions voor state management

      Discriminated unions zijn een krachtig patroon in TypeScript, vooral nuttig voor state management:

      \`\`\`typescript
      type LoadingState = {
        status: 'loading';
      };

      type SuccessState = {
        status: 'success';
        data: User[];
      };

      type ErrorState = {
        status: 'error';
        error: string;
      };

      type State = LoadingState | SuccessState | ErrorState;

      function renderState(state: State) {
        switch (state.status) {
          case 'loading':
            return <LoadingSpinner />;
          case 'success':
            return <UserList users={state.data} />;
          case 'error':
            return <ErrorMessage message={state.error} />;
        }
      }
      \`\`\`

      Dit patroon zorgt ervoor dat je alle mogelijke states afhandelt en TypeScript zal je waarschuwen als je een case mist.

      ## 4. Gebruik generics voor herbruikbare componenten en functies

      Generics stellen je in staat om types te maken die met verschillende datatypes kunnen werken, terwijl je toch type safety behoudt:

      \`\`\`typescript
      function fetchData<T>(url: string): Promise<T> {
        return fetch(url).then(response => response.json());
      }

      // TypeScript weet nu dat users van type User[] is
      const users = await fetchData<User[]>('/api/users');

      // En dat product van type Product is
      const product = await fetchData<Product>('/api/products/1');
      \`\`\`

      Dit is ook zeer nuttig voor React componenten:

      \`\`\`typescript
      interface ListProps<T> {
        items: T[];
        renderItem: (item: T) => React.ReactNode;
      }

      function List<T>({ items, renderItem }: ListProps<T>) {
        return (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{renderItem(item)}</li>
            ))}
          </ul>
        );
      }
      \`\`\`

      ## 5. Gebruik type predicates voor type narrowing

      Type predicates zijn functies die TypeScript helpen om types te verfijnen:

      \`\`\`typescript
      interface Car {
        make: string;
        model: string;
        year: number;
      }

      interface Motorcycle {
        make: string;
        model: string;
        year: number;
        type: 'sport' | 'cruiser' | 'touring';
      }

      type Vehicle = Car | Motorcycle;

      // Dit is een type predicate
      function isMotorcycle(vehicle: Vehicle): vehicle is Motorcycle {
        return 'type' in vehicle;
      }

      function getVehicleInfo(vehicle: Vehicle) {
        if (isMotorcycle(vehicle)) {
          // TypeScript weet nu dat vehicle een Motorcycle is
          console.log(\`\${vehicle.make} \${vehicle.model} (\${vehicle.year}) - \${vehicle.type}\`);
        } else {
          // TypeScript weet nu dat vehicle een Car is
          console.log(\`\${vehicle.make} \${vehicle.model} (\${vehicle.year})\`);
        }
      }
      \`\`\`

      Dit maakt je code veiliger en expressiver, en voorkomt het gebruik van type assertions.

      ## Conclusie

      TypeScript is een krachtige tool die je helpt om betere, veiligere code te schrijven. Door deze tips te volgen, kun je het volledige potentieel van TypeScript benutten en veel voorkomende valkuilen vermijden.

      Heb je nog andere TypeScript tips die je graag deelt? Laat het me weten in de comments!
    `,
    afbeelding: "/placeholder.svg?height=600&width=1200",
    datum: "2 april 2024",
    leestijd: "6 min",
    categorieen: ["TypeScript", "Programmeren", "Tips"],
    auteur: "Kelvin Schouten",
  },
  "arduino-projecten": {
    titel: "Beginnen met Arduino: 3 leuke projecten voor beginners",
    samenvatting:
      "Een gids voor beginners die willen starten met Arduino. Inclusief drie eenvoudige maar leuke projecten om mee te beginnen.",
    inhoud: `
      # Beginnen met Arduino: 3 leuke projecten voor beginners

      Arduino is een geweldige manier om te beginnen met elektronica en programmeren. Het is een open-source platform dat bestaat uit zowel hardware als software, en is ontworpen om het gemakkelijk te maken voor hobbyisten, studenten en professionals om interactieve projecten te bouwen.

      In deze blog deel ik drie eenvoudige maar leuke Arduino-projecten die perfect zijn voor beginners. Je hebt voor deze projecten een Arduino Uno (of compatible board) nodig, plus enkele basiscomponenten.

      ## Project 1: LED Knipperlicht

      Dit is het "Hello World" van Arduino-projecten. Je gaat een LED laten knipperen met een bepaalde interval.

      ### Benodigdheden:
      - Arduino Uno
      - LED (elke kleur)
      - Weerstand van 220 ohm
      - Breadboard
      - Jumper draden

      ### Stappen:
      1. Verbind de anode (langere poot) van de LED met pin 13 van de Arduino via een 220 ohm weerstand.
      2. Verbind de kathode (kortere poot) van de LED met de GND (ground) pin van de Arduino.

      ### Code:
      \`\`\`cpp
      // Pin 13 heeft een ingebouwde LED op de meeste Arduino boards
      int ledPin = 13;

      void setup() {
        // Initialiseer de digitale pin als een output
        pinMode(ledPin, OUTPUT);
      }

      void loop() {
        digitalWrite(ledPin, HIGH);   // Zet de LED aan
        delay(1000);                  // Wacht 1 seconde
        digitalWrite(ledPin, LOW);    // Zet de LED uit
        delay(1000);                  // Wacht 1 seconde
      }
      \`\`\`

      Dit project leert je de basisprincipes van het aansluiten van componenten en het schrijven van eenvoudige code.

      ## Project 2: Temperatuur- en Vochtigheidsmeter

      Dit project gebruikt een DHT11 sensor om de temperatuur en luchtvochtigheid te meten en deze weer te geven op de seriële monitor.

      ### Benodigdheden:
      - Arduino Uno
      - DHT11 temperatuur- en vochtigheidssensor
      - Breadboard
      - Jumper draden
      - 10k ohm weerstand

      ### Stappen:
      1. Verbind de VCC pin van de DHT11 met de 5V pin van de Arduino.
      2. Verbind de GND pin van de DHT11 met de GND pin van de Arduino.
      3. Verbind de DATA pin van de DHT11 met pin 2 van de Arduino.
      4. Plaats een 10k ohm pull-up weerstand tussen de DATA pin en de VCC pin.

      ### Code:
      \`\`\`cpp
      #include <DHT.h>

      #define DHTPIN 2      // De pin waarop de DHT11 is aangesloten
      #define DHTTYPE DHT11 // DHT 11

      DHT dht(DHTPIN, DHTTYPE);

      void setup() {
        Serial.begin(9600);
        Serial.println("DHT11 test!");
        dht.begin();
      }

      void loop() {
        // Wacht 2 seconden tussen metingen
        delay(2000);

        // Lees de luchtvochtigheid
        float h = dht.readHumidity();
        // Lees de temperatuur in Celsius
        float t = dht.readTemperature();

        // Controleer of de metingen zijn gelukt
        if (isnan(h) || isnan(t)) {
          Serial.println("Fout bij het lezen van de DHT sensor!");
          return;
        }

        Serial.print("Luchtvochtigheid: ");
        Serial.print(h);
        Serial.print(" %\\t");
        Serial.print("Temperatuur: ");
        Serial.print(t);
        Serial.println(" °C");
      }
      \`\`\`

      Dit project introduceert het gebruik van sensoren en bibliotheken in Arduino.

      ## Project 3: Ultrasone Afstandsmeter

      Dit project gebruikt een ultrasone sensor om de afstand tot een object te meten en deze weer te geven op de seriële monitor.

      ### Benodigdheden:
      - Arduino Uno
      - HC-SR04 ultrasone sensor
      - Breadboard
      - Jumper draden

      ### Stappen:
      1. Verbind de VCC pin van de HC-SR04 met de 5V pin van de Arduino.
      2. Verbind de GND pin van de HC-SR04 met de GND pin van de Arduino.
      3. Verbind de TRIG pin van de HC-SR04 met pin 9 van de Arduino.
      4. Verbind de ECHO pin van de HC-SR04 met pin 10 van de Arduino.

      ### Code:
      \`\`\`cpp
      const int trigPin = 9;
      const int echoPin = 10;

      // Definieert variabelen
      long duration;
      int distance;

      void setup() {
        // Initialiseer de seriële communicatie
        Serial.begin(9600);
        // Stel de trigPin in als Output
        pinMode(trigPin, OUTPUT);
        // Stel de echoPin in als Input
        pinMode(echoPin, INPUT);
      }

      void loop() {
        // Zet de trigPin op LOW
        digitalWrite(trigPin, LOW);
        delayMicroseconds(2);
        
        // Zet de trigPin op HIGH voor 10 microseconden
        digitalWrite(trigPin, HIGH);
        delayMicroseconds(10);
        digitalWrite(trigPin, LOW);
        
        // Leest de echoPin, geeft de geluidsgolftijd in microseconden
        duration = pulseIn(echoPin, HIGH);
        
        // Berekent de afstand
        distance = duration * 0.034 / 2;
        
        // Geeft de afstand op de seriële monitor weer
        Serial.print("Afstand: ");
        Serial.print(distance);
        Serial.println(" cm");
        
        delay(500);
      }
      \`\`\`

      Dit project leert je hoe je kunt werken met ultrasone sensoren en hoe je berekeningen kunt uitvoeren op basis van sensorgegevens.

      ## Volgende stappen

      Nadat je deze projecten hebt voltooid, kun je ze combineren of uitbreiden. Bijvoorbeeld:

      - Voeg een LCD-scherm toe aan de temperatuurmeter om de metingen direct weer te geven.
      - Maak een parkeerassistent met de ultrasone sensor en LEDs die aangeven hoe dichtbij een object is.
      - Bouw een weerstation door de temperatuursensor te combineren met andere sensoren zoals een barometer.

      Arduino is een geweldig platform om te leren over elektronica en programmeren. Het is toegankelijk voor beginners, maar krachtig genoeg voor complexe projecten. Begin klein, experimenteer veel, en bouw geleidelijk je kennis op!

      Heb je vragen over deze projecten of heb je ideeën voor toekomstige Arduino-blogs? Laat het me weten in de comments!
    `,
    afbeelding: "/placeholder.svg?height=600&width=1200",
    datum: "20 maart 2024",
    leestijd: "10 min",
    categorieen: ["Arduino", "Elektronica", "DIY"],
    auteur: "Kelvin Schouten",
  },
  "css-grid-flexbox": {
    titel: "CSS Grid vs Flexbox: De ultieme gids",
    samenvatting:
      "Een diepgaande vergelijking tussen CSS Grid en Flexbox, met voorbeelden van wanneer je welke techniek zou moeten gebruiken.",
    inhoud: `
      # CSS Grid vs Flexbox: De ultieme gids

      Als het gaat om layout in moderne webontwikkeling, zijn CSS Grid en Flexbox de twee belangrijkste tools in je gereedschapskist. Beide hebben hun sterke punten en ideale toepassingen. In deze gids vergelijken we ze en leren we wanneer je welke techniek zou moeten gebruiken.

      ## Wat is Flexbox?

      Flexbox, of de Flexible Box Module, is een one-dimensional layout model. Het is ontworpen voor het rangschikken van items in rijen OF kolommen. Flexbox is ideaal voor:

      - Navigatiebalken en menu's
      - Uitlijnen van items binnen een container
      - Verdelen van ruimte tussen items in één richting
      - Centreren van elementen (zowel horizontaal als verticaal)

      ### Basisvoorbeeld Flexbox:

      \`\`\`css
      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .item {
        flex: 1;
      }
      \`\`\`

      ## Wat is CSS Grid?

      CSS Grid is een two-dimensional layout system. Het stelt je in staat om items te rangschikken in rijen EN kolommen tegelijkertijd. Grid is perfect voor:

      - Volledige pagina layouts
      - Plaatsen van elementen in een raster
      - Overlappende elementen
      - Complexe layouts die niet eenvoudig in één dimensie kunnen worden beschreven

      ### Basisvoorbeeld CSS Grid:

      \`\`\`css
      .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
      }

      .item {
        grid-column: span 2;
      }
      \`\`\`

      ## Wanneer gebruik je Flexbox?

      Gebruik Flexbox wanneer:

      1. **Je werkt in één dimensie**: Als je items alleen in een rij of alleen in een kolom wilt rangschikken.
      2. **Je content de layout bepaalt**: Als je wilt dat de grootte van je content bepaalt hoeveel ruimte het inneemt.
      3. **Je items wilt uitlijnen**: Als je items wilt centreren of op een andere manier wilt uitlijnen binnen een container.
      4. **Je ruimte wilt verdelen**: Als je de beschikbare ruimte evenredig wilt verdelen tussen items.

      ### Praktijkvoorbeeld: Navigatiebalk

      \`\`\`css
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
      }

      .logo {
        /* Logo styling */
      }

      .nav-links {
        display: flex;
        gap: 1rem;
      }
      \`\`\`

      ## Wanneer gebruik je CSS Grid?

      Gebruik CSS Grid wanneer:

      1. **Je werkt in twee dimensies**: Als je items in zowel rijen als kolommen wilt rangschikken.
      2. **Je layout de content bepaalt**: Als je wilt dat items in specifieke cellen of gebieden worden geplaatst, ongeacht hun inhoud.
      3. **Je een complexe layout nodig hebt**: Voor layouts die niet eenvoudig in één richting kunnen worden beschreven.
      4. **Je items wilt laten overlappen**: Als je elementen over elkaar heen wilt plaatsen.

      ### Praktijkvoorbeeld: Dashboard Layout

      \`\`\`css
      .dashboard {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto 1fr auto;
        grid-template-areas:
          "header header header header"
          "sidebar main main main"
          "footer footer footer footer";
        min-height: 100vh;
      }

      .header { grid-area: header; }
      .sidebar { grid-area: sidebar; }
      .main { grid-area: main; }
      .footer { grid-area: footer; }
      \`\`\`

      ## Het beste van beide werelden: Nesting

      Een van de krachtigste technieken is het nesten van Flexbox binnen Grid (of andersom). Bijvoorbeeld:

      - Gebruik Grid voor de algemene pagina layout
      - Gebruik Flexbox voor de navigatie en andere componenten binnen die layout

      \`\`\`css
      .page {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
      }

      .navbar {
        grid-column: 1 / -1;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;
      }

      .card {
        display: flex;
        flex-direction: column;
      }
      \`\`\`

      ## Conclusie

      Zowel CSS Grid als Flexbox zijn krachtige tools voor moderne weblay-outs. In plaats van te kiezen tussen de een of de ander, is het beter om te begrijpen wanneer elk het meest geschikt is:

      - **Flexbox**: Voor één-dimensionale layouts en wanneer je content de layout moet bepalen.
      - **CSS Grid**: Voor twee-dimensionale layouts en wanneer je layout de content moet bepalen.

      Door beide technieken te beheersen en te weten wanneer je welke moet gebruiken, kun je vrijwel elke layout bouwen die je kunt bedenken, op een schone en onderhoudbare manier.

      Wat is jouw ervaring met Flexbox en CSS Grid? Heb je een voorkeur voor een van beide? Laat het me weten in de comments!
    `,
    afbeelding: "/placeholder.svg?height=600&width=1200",
    datum: "5 maart 2024",
    leestijd: "12 min",
    categorieen: ["CSS", "Frontend", "Webdesign"],
    auteur: "Kelvin Schouten",
  },
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Blogpost niet gevonden</h1>
        <p className="mb-6">De blogpost die je zoekt bestaat niet of is verwijderd.</p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar blog
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="py-8 animate-fade-in">
      <div className="mb-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Terug naar blog
        </Link>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categorieen.map((categorie) => (
            <Badge key={categorie} variant="secondary" className="transition-all hover:scale-105">
              {categorie}
            </Badge>
          ))}
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.titel}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center">
            <CalendarDays className="mr-1 h-4 w-4" />
            {post.datum}
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {post.leestijd} leestijd
          </div>
          <div>Door {post.auteur}</div>
        </div>
      </div>

      <div className="relative h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image src={post.afbeelding || "/placeholder.svg"} alt={post.titel} fill className="object-cover" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3">
          <article className="prose prose-slate dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.inhoud.replace(/\n/g, "<br />") }} />
          </article>

          <div className="mt-12 pt-6 border-t">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Deel dit artikel</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-6">
            <h3 className="text-lg font-semibold mb-4">Meer artikelen</h3>
            <div className="space-y-4">
              {Object.entries(blogPosts)
                .filter(([id]) => id !== params.id)
                .slice(0, 3)
                .map(([id, post]) => (
                  <Link key={id} href={`/blog/${id}`} className="block group">
                    <div className="text-sm font-medium group-hover:text-primary transition-colors">{post.titel}</div>
                    <div className="text-xs text-muted-foreground">{post.datum}</div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

