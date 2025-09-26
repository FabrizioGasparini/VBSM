import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Heart, Target, Award } from "lucide-react"

const storia = [
  {
    anno: "1984",
    evento: "Fondazione della Società",
    descrizione: "Nasce il Volleyball San Martino con l'obiettivo di promuovere la pallavolo nel territorio",
  },
  {
    anno: "Giugno 2025",
    evento: "Serie B",
    descrizione: "La Serie C Maschile ottiene la promozione in Serie B, diventando la seconda Serie B Maschile a San Martino",
  },
  {
    anno: "Agosto 2025",
    evento: "Cambio di Presidenza",
    descrizione: "Cambio al vertice della società con l'elezione di un nuovo presidente, Roberto Intonti",
  },
  {
    anno: "2025",
    evento: "Oggi",
    descrizione: "17 squadre attive, oltre 220 atleti e una grande famiglia sportiva",
  },
]

const staff = [
  {
    nome: "Roberto Intonti",
    ruolo: "Presidente / Direttore Sportivo",
    descrizione: "Guida la società con passione e dedizione",
    immagine: "/images/2025-26/pages/chi-siamo/presidente.png",
    large: true,
  },
  {
    nome: "Enrico Ruozzi",
    ruolo: "Vice Presidente",
    descrizione: "Supporta il presidente nelle decisioni strategiche",
    immagine: "/images/2025-26/pages/chi-siamo/vice-presidente.png",
    large: true,
  },
  {
    nome: "Alberto Iotti",
    ruolo: "Direttore Tecnico Maschile",
    descrizione: "Coordina l'attività delle squadre maschili",
    immagine: "/images/2025-26/pages/chi-siamo/direttore-tecnico-maschile.png",
  },
  {
    nome: "Catia Cattini",
    ruolo: "Direttrice Tecnica Femminile",
    descrizione: "Coordina l'attività delle squadre femminili",
    immagine: "/images/2025-26/pages/chi-siamo/direttore-tecnico-femminile.png",
  },
  {
    nome: "Erio Cavazzoni",
    ruolo: "Dirigente Maschile",
    descrizione: "Assiste il direttore tecnico maschile nella gestione delle squadre",
    immagine: "/images/2025-26/pages/chi-siamo/dirigente-maschile.png",
  },
  {
    nome: "Antonella Iannicello",
    ruolo: "Dirigente Femminile",
    descrizione: "Assiste il direttore tecnico femminile nella gestione delle squadre",
    immagine: "/images/2025-26/pages/chi-siamo/dirigente-femminile.png",
  },
]

const valori = [
  {
    icona: Heart,
    titolo: "Passione",
    descrizione: "L'amore per la pallavolo è il motore che ci spinge ogni giorno a dare il massimo",
  },
  {
    icona: Users,
    titolo: "Famiglia",
    descrizione: "Creiamo un ambiente accogliente dove ogni atleta si sente parte di una grande famiglia",
  },
  {
    icona: Target,
    titolo: "Crescita",
    descrizione: "Puntiamo allo sviluppo completo della persona, non solo dell'atleta",
  },
  {
    icona: Trophy,
    titolo: "Eccellenza",
    descrizione: "Cerchiamo sempre di migliorare e raggiungere nuovi traguardi sportivi",
  },
]

export default function ChiSiamoPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-ethnocentric text-4xl lg:text-5xl mb-4">CHI SIAMO</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
              Scopri la storia, i valori e le persone che rendono speciale il Volleyball San Martino
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-ethnocentric text-3xl lg:text-4xl mb-6 text-primary">LA NOSTRA MISSIONE</h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                Il Volleyball San Martino è molto più di una società sportiva: siamo una comunità che crede nel potere
                educativo e formativo dello sport. Dal 1984 promuoviamo i valori della pallavolo, creando opportunità di
                crescita per atleti di tutte le età.
              </p>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Il nostro obiettivo è formare non solo campioni sul campo, ma anche persone migliori nella vita,
                attraverso l'insegnamento del rispetto, della disciplina e dello spirito di squadra.
              </p>
              <Button size="lg">Unisciti a Noi</Button>
            </div>
            <div className="relative">
              <img
                src="/images/2025-26/pages/promozioneb2.png"
                alt="La famiglia Volleyball San Martino"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-ethnocentric text-3xl lg:text-4xl mb-4 text-primary">I NOSTRI VALORI</h2>
            <p className="text-lg text-muted-foreground">I principi che guidano ogni nostra azione</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valori.map((valore, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <valore.icona className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{valore.titolo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">{valore.descrizione}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-ethnocentric text-3xl lg:text-4xl mb-4 text-primary">LA NOSTRA STORIA</h2>
            <p className="text-lg text-muted-foreground">Un percorso di crescita lungo quasi 40 anni</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            <div className="space-y-12">
              {storia.map((evento, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-primary text-primary-foreground">{evento.anno}</Badge>
                          <CardTitle className="text-lg">{evento.evento}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-pretty">{evento.descrizione}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-ethnocentric text-3xl lg:text-4xl mb-4 text-primary">IL NOSTRO STAFF</h2>
            <p className="text-lg text-muted-foreground">Le persone che guidano la nostra società</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.map((membro, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${membro.large ? "md:col-span-2 lg:col-span-2" : ""}`}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={membro.immagine || "/placeholder.svg"}
                    alt={membro.nome}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{membro.nome}</CardTitle>
                  <CardDescription className="text-primary font-medium">{membro.ruolo}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground text-pretty">{membro.descrizione}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-ethnocentric text-3xl lg:text-4xl mb-4 text-primary">I NOSTRI NUMERI</h2>
            <p className="text-lg text-muted-foreground">Quello che abbiamo costruito insieme</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">41</div>
              <div className="text-sm text-muted-foreground">Anni di Storia</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">220+</div>
              <div className="text-sm text-muted-foreground">Atleti Attivi</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">17</div>
              <div className="text-sm text-muted-foreground">Squadre</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">25</div>
              <div className="text-sm text-muted-foreground">Trofei Vinti</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
