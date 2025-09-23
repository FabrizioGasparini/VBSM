import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import Link from "next/link"
import { teamsData } from "@/lib/teams-data"

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
            {teamsData.map((squadra, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 pt-0">
                <div className="relative border overflow-hidden rounded-t-lg h-fit ">
                  <img
                    src={`/images/2025-26/squadre/${squadra.id}/squadra.png` || "/placeholder.svg"}
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
                    <span className="text-sm">{squadra.players.length} giocatori</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Staff Tecnico:</p>
                    <div className="space-y-1">
                      {squadra.coaches.map((allenatore, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {allenatore.nome} {allenatore.cognome} - {allenatore.ruolo}
                        </p>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link
                      href={`/squadre/${squadra.categoria.toLowerCase().replace(" / ", "-").replace(/\s+/g, "-").replace("à", "a").replace("è", "e")}`}
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
