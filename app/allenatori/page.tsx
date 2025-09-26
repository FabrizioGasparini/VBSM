"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Info, Trophy } from "lucide-react"
import { squadreOptions } from "@/lib/matches-data"
import { palestreOptions, type Evento } from "@/lib/events-data"

export default function CalendarioCustomPage() {
  const [palestraFiltro, setPalestraFiltro] = useState("Tutte le Palestre")
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const [listaEventi, setListaEventi] = useState<Evento[]>() // In futuro puoi caricare da DB
  const [formData, setFormData] = useState({
    squadra: "",
    palestra: palestreOptions[0],
    data: "",
    ora: "",
    tipo: "Amichevole",
  })


  useEffect(() => {
    async function fetchEventi() {
      const response = await fetch("/api/events");
      const data: Evento[] = await response.json();
      setListaEventi(data);
    }
    fetchEventi();
  }, []);

  if (!listaEventi) {
    return <div>Loading...</div>
  }

  const eventiFiltrati = listaEventi.filter(
    (e) => palestraFiltro === "Tutte le Palestre" || e.palestra === palestraFiltro
  )

  const daysInMonth = (month: number, year: number) => {
    const date = new Date(year, month, 1)
    const days = []
    while (date.getMonth() === month) {
      days.push(new Date(date))
      date.setDate(date.getDate() + 1)
    }
    return days
  }

  const days = daysInMonth(currentMonth.getMonth(), currentMonth.getFullYear())

  const eventiDelGiorno = (giorno: Date) => {
    return eventiFiltrati.filter(ev => new Date(ev.data).toISOString().slice(0, 10) === giorno.toISOString().slice(0, 10))
  }

  const formatGiorno = (d: Date) => d.getDate()

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-ethnocentric text-4xl lg:text-6xl mb-6">CALENDARIO EVENTI</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty mb-8">
            Visualizza tutti gli allenamenti e le partite delle squadre
          </p>
        </div>
      </section>

      <section className="py-8 bg-background border-b">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold">Calendario Eventi</h2>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">Filtra per palestra:</span>
            <Select value={palestraFiltro} onValueChange={setPalestraFiltro}>
              <SelectTrigger className="w-56">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {palestreOptions.map((palestra) => (
                  <SelectItem key={palestra} value={palestra}>{palestra}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Form per aggiungere evento */}
          <Card className="mb-8">
            <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              <Select value={formData.squadra} onValueChange={(val) => setFormData({ ...formData, squadra: val })}>
                <SelectTrigger className="w-full md:w-auto bg-secondary p-2">
                  <SelectValue placeholder="Seleziona Squadra" />
                </SelectTrigger>
                <SelectContent>
                  {squadreOptions.slice(1).map((squadra) => (
                    <SelectItem key={squadra} value={squadra}>{squadra}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={formData.palestra} onValueChange={(val) => setFormData({ ...formData, palestra: val })}>
                <SelectTrigger className="w-full md:w-auto bg-secondary ">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {palestreOptions.map((palestra) => (
                    <SelectItem key={palestra} value={palestra}>{palestra}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input
                type="date"
                value={formData.data}
                onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                className="border rounded p-2 bg-secondary h-full"
              />
              <input
                type="time"
                value={formData.ora}
                onChange={(e) => setFormData({ ...formData, ora: e.target.value })}
                className="border rounded p-2 bg-secondary"
              />
              <Button onClick={() => { }} className="col-span-1 md:col-span-1">Aggiungi Evento</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Calendario */}
      <div className="flex items-center gap-2 w-full justify-center">
        <Button className="text-xs" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}>
          {"<"} Mese Precedente
        </Button>
        <span className="font-semibold text-2xl px-10">{currentMonth.toLocaleString("it-IT", { month: "long", year: "numeric" }).toUpperCase()}</span>
        <Button className="text-xs" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}>
          Mese Successivo {">"}
        </Button>
      </div>
      <section className="py-8 bg-background">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-7 gap-2">
          {["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"].map(d => (
            <div key={d} className="text-center font-semibold">{d}</div>
          ))}

          {days.map(giorno => (
            <div key={giorno.toISOString()} className="border rounded-lg p-2 min-h-[8px] relative">
              <span className="font-bold">{formatGiorno(giorno)}</span>

              <div className="mt-1 space-y-1">
                {eventiDelGiorno(giorno).map(ev => (
                  <Card key={ev.id} className="border-l-4 border-l-primary bg-primary/10 hover:shadow-lg p-2">
                    <CardContent className="p-1 text-xs">
                      <div className="font-semibold text-sm mb-2">{ev.squadra}</div>
                      <Badge variant="secondary" className="text-[10px] mb-1 hidden">{ev.tipo}</Badge>
                      <div className="text-[10px]">{ev.palestra}</div>
                      <div className="text-[10px]">{new Date(ev.data.replace("00:00:00.000Z", ev.oraInizio)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(ev.data.replace("00:00:00.000Z", ev.oraFine)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}