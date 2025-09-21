import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import Link from "next/link"

const squadre = [
  {
    categoria: "S3 White Red Green",
    abbreviazione: "S3",
    descrizione: "Annate 2014-20",
    giocatori: 12,
    allenatori: ["Camilla Gallingani", "Giulia Iotti", "Giulia Paterlini"],
    colore: "bg-primary",
    immagine: "/s3.png",
  },
  {
    categoria: "Under 12 Femminile",
    abbreviazione: "U12F",
    descrizione: "Annate 2014-15",
    giocatori: 12,
    allenatori: ["Giulia Iotti", "Nellusco Bonori"],
    colore: "bg-primary",
    immagine: "/u12.png",
  },
  {
    categoria: "Under 13 Femminile",
    abbreviazione: "U13F",
    descrizione: "Annate 2013-14",
    giocatori: 12,
    allenatori: ["Giorgio Bezzecchi", "Paolo Neviani"],
    colore: "bg-primary",
    immagine: "/u13.png",
  },
  {
    categoria: "Under 14 Femminile",
    abbreviazione: "U14F",
    descrizione: "Annate 2012-13",
    giocatori: 10,
    allenatori: ["Federico Monaco", "Nellusco Bonori"],
    colore: "bg-secondary",
    immagine: "/u14.png",
  },
  {
    categoria: "Under 15 Maschile",
    abbreviazione: "U15M",
    descrizione: "Annate 2013-14",
    giocatori: 12,
    allenatori: ["Gianni Fantini", "Alessandro Vezzani"],
    colore: "bg-secondary",
    immagine: "/u15.png",
  },
  {
    categoria: "Under 16 Femminile",
    abbreviazione: "U16F",
    descrizione: "Annate 2010-11",
    giocatori: 14,
    allenatori: ["Catia Cattini", "Ilenia Sacchetti"],
    colore: "bg-muted",
    immagine: "/u16.png",
  },
  {
    categoria: "Under 16 Femminile CSI",
    abbreviazione: "U16F CSI",
    descrizione: "Annate 2010-11",
    giocatori: 12,
    allenatori: ["Giorgio Bezzecchi"],
    colore: "bg-muted",
    immagine: "/u16csi.png",
  },
  {
    categoria: "Under 18 Femminile / Prima Divisione Femminile",
    abbreviazione: "U18F / 1DF",
    descrizione: "Annate 2008-09",
    giocatori: 14,
    allenatori: ["Catia Cattini"],
    colore: "bg-accent",
    immagine: "/u18.png",
  },
  {
    categoria: "Under 18 Femminile CSI",
    abbreviazione: "U18F CSI",
    descrizione: "Annate 2008-09",
    giocatori: 14,
    allenatori: ["Giorgio Bezzecchi", "Paolo Neviani"],
    colore: "bg-accent",
    immagine: "/u18csi.png",
  },
  {
    categoria: "Under 19 Maschile",
    abbreviazione: "U19M",
    descrizione: "Annate 2007-08",
    giocatori: 11,
    allenatori: ["Alberto Iotti", "Alessandro Vezzani"],
    colore: "bg-secondary",
    immagine: "/u19.png",
  },
  {
    categoria: "Prima Divisione Maschile",
    abbreviazione: "1DF",
    descrizione: "Squadra Amatoriale Maschile",
    giocatori: 14,
    allenatori: ["Claudio Caselli", "Cristian Gasparini"],
    colore: "bg-secondary",
    immagine: "/1divm.png",
  },
  {
    categoria: "Terza Divisione Femminile",
    abbreviazione: "3DF",
    descrizione: "Squadra Amatoriale Femminile",
    giocatori: 14,
    allenatori: ["Ilenia Sacchetti"],
    colore: "bg-secondary",
    immagine: "/3divf.png",
  },
  {
    categoria: "Misto Amatoriale",
    abbreviazione: "Misto",
    descrizione: "Squadra Amatoriale Mista",
    giocatori: 14,
    allenatori: ["Alessandro Vezzani"],
    colore: "bg-secondary",
    immagine: "/misto.png",
  },
  {
    categoria: "Serie D Femminile",
    abbreviazione: "DF",
    descrizione: "Squadra Senior Femminile",
    giocatori: 14,
    allenatori: ["Michele Giazzi"],
    colore: "bg-secondary",
    immagine: "/df.png",
  },
  {
    categoria: "Serie C Femminile",
    abbreviazione: "CF",
    descrizione: "Squadra Senior Femminile",
    giocatori: 14,
    allenatori: ["Antonella Ianniciello"],
    colore: "bg-secondary",
    immagine: "/cf.png",
  },
  {
    categoria: "Serie C Maschile",
    abbreviazione: "CM",
    descrizione: "Squadra Senior Maschile",
    giocatori: 14,
    allenatori: ["Marco Barozzi"],
    colore: "bg-primary",
    immagine: "/cm.png",
  },
]

export default function SquadrePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-ethnocentric text-4xl lg:text-5xl mb-4">LE NOSTRE SQUADRE</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
              Dalle categorie giovanili alle serie competitive, ogni squadra rappresenta i valori della Volleyball San
              Martino
            </p>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {squadre.map((squadra, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 pt-0">
                <div className="relative border overflow-hidden rounded-t-lg h-full ">
                  <img
                    src={squadra.immagine || "/placeholder.svg"}
                    alt={`Squadra ${squadra.categoria}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-2 left-2 ${squadra.colore} text-white`}>{squadra.categoria}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{squadra.categoria}</CardTitle>
                  <CardDescription className="text-base">{squadra.descrizione}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{squadra.giocatori} giocatori</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Staff Tecnico:</p>
                    <div className="space-y-1">
                      {squadra.allenatori.map((allenatore, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {allenatore}
                        </p>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link
                      href={`/squadre/${squadra.categoria.toLowerCase().replace(/\s+/g, "-").replace("à", "a").replace("è", "e")}`}
                    >
                      Dettagli Squadra
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-ethnocentric text-3xl lg:text-4xl mb-4 text-primary">STATISTICHE SQUADRE</h2>
            <p className="text-lg text-muted-foreground">I numeri che raccontano la nostra crescita</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">17</div>
              <div className="text-sm text-muted-foreground">Squadre Attive</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">220+</div>
              <div className="text-sm text-muted-foreground">Atleti Totali</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">19</div>
              <div className="text-sm text-muted-foreground">Allenatori</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
