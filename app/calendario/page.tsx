"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Clock, Home, Plane, Dumbbell, School, School2 } from "lucide-react"

const partite = [
  {
    data: "2024-01-15",
    ora: "18:00",
    squadra: "Serie C Femminile",
    avversario: "Volley Rossi",
    casa: true,
    palestra: "Palestra Comunale",
    risultato: "3-1",
    completata: true,
  },
  {
    data: "2024-01-18",
    ora: "20:30",
    squadra: "Serie C Maschile",
    avversario: "Eagles Volleyball",
    casa: false,
    palestra: "Palestra Eagles",
    risultato: null,
    completata: false,
  },
  {
    data: "2024-01-20",
    ora: "16:00",
    squadra: "Under 16",
    avversario: "Junior Volley",
    casa: true,
    palestra: "Palestra Comunale",
    risultato: null,
    completata: false,
  },
  {
    data: "2024-01-22",
    ora: "17:30",
    squadra: "Under 18",
    avversario: "Volleyball Stars",
    casa: false,
    palestra: "Palestra Stars",
    risultato: null,
    completata: false,
  },
  {
    data: "2024-01-25",
    ora: "19:00",
    squadra: "Serie C Femminile",
    avversario: "Thunder Volley",
    casa: true,
    palestra: "Palestra Comunale",
    risultato: null,
    completata: false,
  },
  {
    data: "2024-01-27",
    ora: "18:30",
    squadra: "Under 14",
    avversario: "Young Volleyball",
    casa: true,
    palestra: "Palestra San Marco",
    risultato: null,
    completata: false,
  },
]

const squadreOptions = [
  "Tutte le Squadre",
  "Serie C Femminile",
  "Serie C Maschile",
  "Under 18",
  "Under 16",
  "Under 14",
  "Under 12",
  "Minivolley",
]

export default function CalendarioPage() {
  const [squadraFiltro, setSquadraFiltro] = useState("Tutte le Squadre")

  const partiteFiltrate = partite.filter(
    (partita) => squadraFiltro === "Tutte le Squadre" || partita.squadra === squadraFiltro,
  )

  const formatData = (dataString: string) => {
    const data = new Date(dataString)
    return data.toLocaleDateString("it-IT", {
      weekday: "long",
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
            <h1 className="font-ethnocentric text-4xl lg:text-5xl mb-4">CALENDARIO PARTITE</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
              Segui tutte le partite delle nostre squadre e non perdere nemmeno un match
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <h2 className="text-2xl font-semibold">Prossime Partite</h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Filtra per squadra:</span>
              <Select value={squadraFiltro} onValueChange={setSquadraFiltro}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {squadreOptions.map((squadra) => (
                    <SelectItem key={squadra} value={squadra}>
                      {squadra}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Matches List */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {partiteFiltrate.map((partita, index) => (
              <Card
                key={index}
                className={`transition-all duration-300 hover:shadow-lg ${partita.completata ? "opacity-75" : ""}`}
              >
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                    {/* Data e Ora */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{formatData(partita.data)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{partita.ora}</span>
                      </div>
                    </div>

                    {/* Squadre */}
                    <div className="space-y-2">
                      <Badge variant="outline" className="mb-2">
                        {partita.squadra}
                      </Badge>
                      <div className="text-lg font-semibold">
                        {partita.casa ? "San Martino" : partita.avversario}
                        <span className="mx-2 text-muted-foreground">vs</span>
                        {partita.casa ? partita.avversario : "San Martino"}
                      </div>
                      {partita.risultato && (
                        <div className="text-sm text-muted-foreground">
                          Risultato: <span className="font-medium">{partita.risultato}</span>
                        </div>
                      )}
                    </div>

                    {/* Luogo */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        {partita.casa ? (
                          <Home className="h-4 w-4 text-green-600" />
                        ) : (
                          <Plane className="h-4 w-4 text-blue-600" />
                        )}
                        <span className="text-sm font-medium">{partita.casa ? "Casa" : "Trasferta"}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{partita.palestra}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col space-y-2">
                      {!partita.completata && (
                        <>
                          <Button variant="outline" size="sm">
                            Dettagli
                          </Button>
                          <Button variant="ghost" size="sm">
                            Aggiungi al Calendario
                          </Button>
                        </>
                      )}
                      {partita.completata && (
                        <Button variant="ghost" size="sm">
                          Vedi Resoconto
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Palestre Info */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-ethnocentric text-3xl lg:text-4xl mb-4 text-primary">LE NOSTRE PALESTRE</h2>
            <p className="text-lg text-muted-foreground">Dove si svolgono i nostri allenamenti e partite casalinghe</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Dumbbell className="h-5 w-5 text-primary" />
                  <span>Palestra Bombonera</span>
                </CardTitle>
                <CardDescription>Piazza V. Carnevali, 1</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  La nostra palestra principale, dove si svolgono la maggior parte degli allenamenti e delle partite
                  casalinghe.
                </p>
                <Button variant="outline" size="sm">
                  Vedi Mappa
                </Button>
              </CardContent>
            </Card>
           
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <School2 className="h-5 w-5 text-primary" />
                  <span>Palestra Scuole Medie</span>
                </CardTitle>
                <CardDescription>Via Vasco Scaltriti, 13</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Palestra secondaria utilizzata principalmente per gli allenamenti delle categorie giovanili.
                </p>
                <Button variant="outline" size="sm">
                  Vedi Mappa
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <School className="h-5 w-5 text-primary" />
                  <span>Palestra Scuole Elementari</span>
                </CardTitle>
                <CardDescription>Via Rivone, 23</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  La palestra più piccola, utilizzata per le attività delle categorie giovanili e dalla scuola primaria.
                </p>
                <Button variant="outline" size="sm">
                  Vedi Mappa
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
