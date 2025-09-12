"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, User, ArrowRight } from "lucide-react"

const news = [
  {
    id: 1,
    titolo: "Vittoria Straordinaria della Serie C Femminile",
    categoria: "Risultati",
    data: "2024-01-15",
    autore: "Redazione VSM",
    immagine: "/volleyball-match-victory-celebration.jpg",
    estratto:
      "La nostra Serie C Femminile conquista una vittoria importante contro le Thunder Volley con un risultato di 3-1, dimostrando grande carattere e determinazione.",
    contenuto: "Una partita emozionante che ha visto le nostre ragazze lottare punto su punto...",
    tags: ["Serie C", "Femminile", "Vittoria"],
  },
  {
    id: 2,
    titolo: "Nuovi Arrivi nel Settore Giovanile",
    categoria: "Squadra",
    data: "2024-01-12",
    autore: "Marco Rossi",
    immagine: "/volleyball-training-camp-for-young-players.jpg",
    estratto:
      "Benvenuti ai nuovi giovani talenti che si sono uniti alle nostre squadre Under 14 e Under 16. Il futuro della pallavolo sanmartinese è in ottime mani.",
    contenuto: "Siamo orgogliosi di accogliere 8 nuovi atleti nelle nostre categorie giovanili...",
    tags: ["Giovanili", "Nuovi Arrivi", "Under 14", "Under 16"],
  },
  {
    id: 3,
    titolo: "Nuove Divise e Attrezzature per la Stagione",
    categoria: "Società",
    data: "2024-01-10",
    autore: "Amministrazione",
    immagine: "/new-volleyball-equipment-and-uniforms.jpg",
    estratto:
      "Investimento importante della società per dotare tutte le squadre di nuove divise tecniche e attrezzature all'avanguardia per la stagione 2024.",
    contenuto: "La Volleyball San Martino ha investito oltre 15.000 euro in nuove attrezzature...",
    tags: ["Attrezzature", "Divise", "Investimenti"],
  },
  {
    id: 4,
    titolo: "Torneo Giovanile di Primavera - Iscrizioni Aperte",
    categoria: "Eventi",
    data: "2024-01-08",
    autore: "Settore Giovanile",
    immagine: "/volleyball-tournament-young-players.jpg",
    estratto:
      "Al via le iscrizioni per il tradizionale Torneo Giovanile di Primavera. Un evento che coinvolgerà oltre 200 giovani atleti da tutta la regione.",
    contenuto: "Il torneo si svolgerà dal 15 al 17 marzo presso le nostre strutture...",
    tags: ["Torneo", "Giovanili", "Primavera", "Eventi"],
  },
  {
    id: 5,
    titolo: "Corso di Formazione per Allenatori",
    categoria: "Formazione",
    data: "2024-01-05",
    autore: "Staff Tecnico",
    immagine: "/volleyball-coaching-training-session.jpg",
    estratto:
      "Weekend di formazione intensiva per tutto lo staff tecnico della società, con focus sulle nuove metodologie di allenamento e sviluppo giovanile.",
    contenuto: "Un weekend ricco di contenuti formativi che ha coinvolto tutti i nostri allenatori...",
    tags: ["Formazione", "Allenatori", "Metodologie"],
  },
  {
    id: 6,
    titolo: "Partnership con la Scuola Media Locale",
    categoria: "Società",
    data: "2024-01-03",
    autore: "Direzione Sportiva",
    immagine: "/school-volleyball-partnership.jpg",
    estratto:
      "Siglato importante accordo con l'Istituto Comprensivo San Martino per promuovere la pallavolo nelle scuole e avvicinare i giovani al nostro sport.",
    contenuto: "L'accordo prevede lezioni di pallavolo durante l'orario scolastico...",
    tags: ["Partnership", "Scuola", "Promozione"],
  },
]

const categorie = ["Tutte", "Risultati", "Squadra", "Società", "Eventi", "Formazione"]

export default function NewsPage() {
  const [categoriaFiltro, setCategoriaFiltro] = useState("Tutte")

  const newsFiltrate = news.filter((articolo) => categoriaFiltro === "Tutte" || articolo.categoria === categoriaFiltro)

  const formatData = (dataString: string) => {
    const data = new Date(dataString)
    return data.toLocaleDateString("it-IT", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-ethnocentric text-4xl lg:text-5xl mb-4">NEWS & AGGIORNAMENTI</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
              Resta sempre aggiornato su tutte le novità, i risultati e gli eventi della Volleyball San Martino
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <h2 className="text-2xl font-semibold">Ultime Notizie</h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Filtra per categoria:</span>
              <Select value={categoriaFiltro} onValueChange={setCategoriaFiltro}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categorie.map((categoria) => (
                    <SelectItem key={categoria} value={categoria}>
                      {categoria}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {newsFiltrate.length > 0 && (
            <Card className="mb-12 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={newsFiltrate[0].immagine || "/placeholder.svg"}
                    alt={newsFiltrate[0].titolo}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {newsFiltrate[0].categoria}
                  </Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatData(newsFiltrate[0].data)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{newsFiltrate[0].autore}</span>
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-balance">{newsFiltrate[0].titolo}</h2>
                    <p className="text-lg text-muted-foreground text-pretty">{newsFiltrate[0].estratto}</p>
                    <div className="flex flex-wrap gap-2">
                      {newsFiltrate[0].tags.map((tag, index) => (
                        <Badge key={index} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-fit">
                      Leggi di più
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsFiltrate.slice(1).map((articolo) => (
              <Card
                key={articolo.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={articolo.immagine || "/placeholder.svg"}
                    alt={articolo.titolo}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {articolo.categoria}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatData(articolo.data)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{articolo.autore}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-balance">{articolo.titolo}</CardTitle>
                  <CardDescription className="text-base text-pretty">{articolo.estratto}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {articolo.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Leggi di più
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
