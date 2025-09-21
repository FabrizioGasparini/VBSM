"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Clock, Home, Plane, Dumbbell, School, School2, Trophy, Info  } from "lucide-react"
import { partite, squadreOptions, type Match } from "@/lib/matches-data"

export default function CalendarioPage() {
  const [squadraFiltro, setSquadraFiltro] = useState("Tutte le Squadre")

  const partiteFiltrate = partite.filter(
    (partita) => squadraFiltro === "Tutte le Squadre" || partita.campionato === squadraFiltro,
  )

  console.log(partiteFiltrate)

  const partiteCompletate = partiteFiltrate.filter((p) => p.completata)
  const partiteProssime = partiteFiltrate.filter((p) => !p.completata)

  const formatData = (dataString: string) => {
    const data = new Date(dataString)
    return data.toLocaleDateString("it-IT", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatDataBreve = (dataString: string) => {
    const data = new Date(dataString)
    return data.toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "2-digit",
    })
  }

  const MatchCard = ({ partita }: { partita: Match }) => (
    <Card
      className={`transition-all duration-300 hover:shadow-lg border-l-4 ${
        partita.completata
          ? partita.risultato?.startsWith("3") || partita.risultato?.endsWith("3")
            ? "border-l-green-500 bg-green-50/30"
            : "border-l-red-500 bg-red-50/30"
          : "border-l-primary hover:border-l-primary/80"
      }`}
    >
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
          {/* Data e Ora */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">{formatDataBreve(partita.data)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{partita.ora}</span>
            </div>
            {partita.giornata && (
              <Badge variant="secondary" className="text-xs">
                {partita.giornata}ª Giornata
              </Badge>
            )}
          </div>

          {/* Squadre e Campionato */}
          <div className="space-y-2 lg:col-span-2">
            <Badge variant="outline" className="mb-2 text-xs">
              {partita.squadra}
            </Badge>
            <div className="text-lg font-semibold">
              {partita.casa ? "San Martino" : partita.avversario}
              <span className="mx-2 text-muted-foreground">vs</span>
              {partita.casa ? partita.avversario : "San Martino"}
            </div>
            <div className="text-xs text-muted-foreground">{partita.campionato}</div>
            {partita.risultato && (
              <div className="text-sm">
                <span className="text-muted-foreground">Risultato: </span>
                <span
                  className={`font-bold ${
                    partita.risultato.startsWith("3") || partita.risultato.endsWith("3")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {partita.risultato}
                </span>
              </div>
            )}
            {partita.note && <div className="text-xs text-muted-foreground italic">{partita.note}</div>}
          </div>

          {/* Luogo */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              {partita.casa ? <Home className="h-4 w-4 text-green-600" /> : <Plane className="h-4 w-4 text-blue-600" />}
              <span className="text-sm font-medium">{partita.casa ? "Casa" : "Trasferta"}</span>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
              <span className="text-sm leading-tight">{partita.palestra}</span>
            </div>
            {partita.arbitri && (
              <div className="text-xs text-muted-foreground">Arbitri: {partita.arbitri.join(", ")}</div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col space-y-2">
            {!partita.completata && (
              <>
                <Button variant="default" size="sm">
                  <Info className="h-4 w-4 mr-1" />
                  Dettagli
                </Button>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  Aggiungi
                </Button>
              </>
            )}
            {partita.completata && (
              <Button variant="outline" size="sm">
                <Trophy className="h-4 w-4 mr-1" />
                Resoconto
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="font-ethnocentric text-4xl lg:text-6xl mb-6">CALENDARIO PARTITE</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty mb-8">
              Segui tutte le partite delle nostre squadre e vivi l'emozione del volley San Martino
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">{partiteProssime.length}</div>
                <div className="text-sm text-primary-foreground/80">Prossime Partite</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{partiteCompletate.length}</div>
                <div className="text-sm text-primary-foreground/80">Partite Giocate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  {partiteCompletate.filter((p) => p.risultato?.startsWith("3") || p.risultato?.endsWith("3")).length}
                </div>
                <div className="text-sm text-primary-foreground/80">Vittorie</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{squadreOptions.length - 1}</div>
                <div className="text-sm text-primary-foreground/80">Squadre Attive</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Trophy className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Calendario Completo</h2>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Filtra per squadra:</span>
              <Select value={squadraFiltro} onValueChange={setSquadraFiltro}>
                <SelectTrigger className="w-56">
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

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="prossime" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="prossime" className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Prossime Partite ({partiteProssime.length})</span>
              </TabsTrigger>
              <TabsTrigger value="risultati" className="flex items-center space-x-2">
                <Trophy className="h-4 w-4" />
                <span>Risultati ({partiteCompletate.length})</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="prossime" className="space-y-6">
              {partiteProssime.length > 0 ? (
                partiteProssime.map((partita) => <MatchCard key={partita.id} partita={partita} />)
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Nessuna partita in programma</h3>
                    <p className="text-muted-foreground">Non ci sono partite programmate per la squadra selezionata.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="risultati" className="space-y-6">
              {partiteCompletate.length > 0 ? (
                partiteCompletate.map((partita) => <MatchCard key={partita.id} partita={partita} />)
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Nessun risultato disponibile</h3>
                    <p className="text-muted-foreground">
                      Non ci sono risultati disponibili per la squadra selezionata.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

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
                <Button variant="outline" size="sm" onClick={() => window.open("https://maps.app.goo.gl/UgC7gkjFung7YARU6", "_blank")}>
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
                <Button variant="outline" size="sm" onClick={() => window.open("https://maps.app.goo.gl/pG8pnKMbBLmZ7yfH7", "_blank")}>
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
                <Button variant="outline" size="sm" onClick={() => window.open("https://maps.app.goo.gl/Dq2NkTaoiiRty1m8A", "_blank")}>
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
