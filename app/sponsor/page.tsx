import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Heart, Award, Handshake } from "lucide-react"

const sponsorPrincipali = [
  {
    nome: "SportTech Solutions",
    categoria: "Main Sponsor",
    logo: "/sponsor-sporttech-solutions-logo.jpg",
    descrizione: "Tecnologie innovative per lo sport",
    contributo: "Attrezzature tecniche e divise ufficiali",
    livello: "Oro",
    anni: "Dal 2020",
  },
  {
    nome: "Banca del Territorio",
    categoria: "Official Partner",
    logo: "/sponsor-banca-territorio-logo.jpg",
    descrizione: "La banca di fiducia della comunità",
    contributo: "Supporto finanziario e servizi bancari",
    livello: "Oro",
    anni: "Dal 2018",
  },
]

const sponsorUfficiali = [
  {
    nome: "Ristorante Da Mario",
    categoria: "Food Partner",
    logo: "/sponsor-ristorante-mario-logo.jpg",
    descrizione: "Cucina tradizionale italiana",
    contributo: "Catering per eventi e trasferte",
    livello: "Argento",
  },
  {
    nome: "Farmacia Centrale",
    categoria: "Health Partner",
    logo: "/sponsor-farmacia-centrale-logo.jpg",
    descrizione: "Salute e benessere per tutti",
    contributo: "Assistenza sanitaria e prodotti per il recupero",
    livello: "Argento",
  },
  {
    nome: "AutoService Rossi",
    categoria: "Transport Partner",
    logo: "/sponsor-autoservice-rossi-logo.jpg",
    descrizione: "Servizi automotive completi",
    contributo: "Trasporti per trasferte e manutenzione mezzi",
    livello: "Argento",
  },
  {
    nome: "Palestra FitZone",
    categoria: "Fitness Partner",
    logo: "/sponsor-palestra-fitzone-logo.jpg",
    descrizione: "Fitness e preparazione atletica",
    contributo: "Programmi di preparazione fisica",
    livello: "Argento",
  },
]

const sponsorSostenitori = [
  {
    nome: "Bar Sport Centrale",
    categoria: "Local Supporter",
    logo: "/sponsor-bar-sport-logo.jpg",
    livello: "Bronzo",
  },
  {
    nome: "Pizzeria La Schiacciatina",
    categoria: "Local Supporter",
    logo: "/sponsor-pizzeria-schiacciatina-logo.jpg",
    livello: "Bronzo",
  },
  {
    nome: "Ferramenta Bianchi",
    categoria: "Local Supporter",
    logo: "/sponsor-ferramenta-bianchi-logo.jpg",
    livello: "Bronzo",
  },
  {
    nome: "Parrucchiere Style & Cut",
    categoria: "Local Supporter",
    logo: "/sponsor-parrucchiere-style-logo.jpg",
    livello: "Bronzo",
  },
  {
    nome: "Libreria Il Punto",
    categoria: "Local Supporter",
    logo: "/sponsor-libreria-punto-logo.jpg",
    livello: "Bronzo",
  },
  {
    nome: "Ottica Visione",
    categoria: "Local Supporter",
    logo: "/sponsor-ottica-visione-logo.jpg",
    livello: "Bronzo",
  },
]

const pacchetti = [
  {
    nome: "Sponsor Oro",
    prezzo: "€ 5.000/anno",
    benefici: [
      "Logo su tutte le divise ufficiali",
      "Spazio pubblicitario in palestra",
      "Menzione in tutti i comunicati stampa",
      "Inviti VIP agli eventi",
      "Pagina dedicata sul sito web",
    ],
    icona: Award,
    colore: "bg-yellow-500",
  },
  {
    nome: "Sponsor Argento",
    prezzo: "€ 2.500/anno",
    benefici: [
      "Logo su divise da allenamento",
      "Banner pubblicitario in palestra",
      "Menzione sui social media",
      "Inviti agli eventi principali",
    ],
    icona: Star,
    colore: "bg-gray-400",
  },
  {
    nome: "Sponsor Bronzo",
    prezzo: "€ 1.000/anno",
    benefici: [
      "Logo sul sito web",
      "Menzione nei programmi delle partite",
      "Post dedicati sui social",
      "Inviti alle partite casalinghe",
    ],
    icona: Heart,
    colore: "bg-amber-600",
  },
]

export default function SponsorPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-ethnocentric text-4xl lg:text-5xl mb-4">I NOSTRI SPONSOR</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
              Grazie ai nostri partner che credono nei valori dello sport e sostengono la crescita della Volleyball San
              Martino
            </p>
          </div>
        </div>
      </section>

      {/* Main Sponsors */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-ethnocentric text-3xl lg:text-4xl mb-4 text-primary">SPONSOR PRINCIPALI</h2>
            <p className="text-lg text-muted-foreground">I partner che ci accompagnano nel nostro percorso</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sponsorPrincipali.map((sponsor, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={sponsor.logo || "/placeholder.svg?height=200&width=400&query=company logo"}
                    alt={`Logo ${sponsor.nome}`}
                    className="w-full h-32 object-contain bg-muted/30 p-4"
                  />
                  <Badge className="absolute top-4 right-4 bg-yellow-500 text-yellow-900 hidden">{sponsor.livello}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{sponsor.nome}</CardTitle>
                  <CardDescription className="text-primary font-medium">{sponsor.categoria}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-pretty">{sponsor.descrizione}</p>
                  <div>
                    <div className="text-sm font-medium mb-1">Contributo:</div>
                    <div className="text-sm text-muted-foreground">{sponsor.contributo}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{sponsor.anni}</span>
                    <Button variant="outline" size="sm">
                      Scopri di più
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Official Sponsors */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-ethnocentric text-3xl lg:text-4xl mb-4 text-primary">SPONSOR UFFICIALI</h2>
            <p className="text-lg text-muted-foreground">
              Partner che supportano settori specifici della nostra attività
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorUfficiali.map((sponsor, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={sponsor.logo || "/placeholder.svg?height=120&width=200&query=business logo"}
                    alt={`Logo ${sponsor.nome}`}
                    className="w-full h-24 object-contain bg-muted/30 p-2"
                  />
                  <Badge className="absolute top-2 right-2 bg-gray-400 text-gray-900 text-xs hidden">{sponsor.livello}</Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{sponsor.nome}</CardTitle>
                  <CardDescription className="text-sm">{sponsor.categoria}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground text-pretty">{sponsor.descrizione}</p>
                  <div className="text-xs text-muted-foreground">{sponsor.contributo}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Supporters */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-ethnocentric text-3xl lg:text-4xl mb-4 text-primary">SOSTENITORI LOCALI</h2>
            <p className="text-lg text-muted-foreground">Le attività del territorio che credono nel nostro progetto</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sponsorSostenitori.map((sponsor, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={sponsor.logo || "/placeholder.svg?height=80&width=120&query=local business logo"}
                    alt={`Logo ${sponsor.nome}`}
                    className="w-full h-16 object-contain bg-muted/30 p-2"
                  />
                  <Badge className="absolute top-1 right-1 bg-amber-600 text-amber-100 text-xs hidden">
                    {sponsor.livello}
                  </Badge>
                </div>
                <CardContent className="p-3">
                  <div className="text-sm font-medium text-center">{sponsor.nome}</div>
                  <div className="text-xs text-muted-foreground text-center">{sponsor.categoria}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-16 bg-muted/30 hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-ethnocentric text-3xl lg:text-4xl mb-4 text-primary">DIVENTA NOSTRO SPONSOR</h2>
            <p className="text-lg text-muted-foreground">Scegli il pacchetto più adatto alla tua azienda</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pacchetti.map((pacchetto, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative">
                <div className={`absolute top-0 left-0 right-0 h-2 ${pacchetto.colore}`}></div>
                <CardHeader className="text-center pt-6">
                  <div
                    className={`mx-auto w-16 h-16 ${pacchetto.colore} rounded-full flex items-center justify-center mb-4`}
                  >
                    <pacchetto.icona className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{pacchetto.nome}</CardTitle>
                  <CardDescription className="text-xl font-bold text-primary">{pacchetto.prezzo}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pacchetto.benefici.map((beneficio, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Contattaci</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Handshake className="mx-auto h-16 w-16 mb-6" />
          <h2 className="font-ethnocentric text-3xl lg:text-4xl mb-4">UNISCITI AI NOSTRI PARTNER</h2>
          <p className="text-xl mb-8 text-pretty">
            Diventa parte della famiglia Volleyball San Martino e sostieni lo sport nel nostro territorio. Insieme
            possiamo crescere e raggiungere nuovi traguardi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Richiedi Informazioni
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Scarica Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
