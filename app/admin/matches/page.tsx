"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Edit, Trash2, Save, X, ArrowLeft, MapPin, Clock, Users } from "lucide-react"
import Link from "next/link"
import { type Match, partite, squadreOptions } from "@/lib/matches-data"
import { saveToStorage, loadFromStorage, STORAGE_KEYS } from "@/lib/storage"

export default function AdminMatchesPage() {
  const [matches, setMatches] = useState<Match[]>([])
  const [editingMatch, setEditingMatch] = useState<Match | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [message, setMessage] = useState("")
    const [activeTab, setActiveTab] = useState("all")
    
    const palestre = [
        { nome: "Palestra Bombonera" },
        { nome: "Palestra Scuole Medie" },
        { nome: "Palestra Scuole Elementari" },
    ]

  useEffect(() => {
    const savedMatches = loadFromStorage(STORAGE_KEYS.MATCHES, partite)
    setMatches(savedMatches)
  }, [])

  useEffect(() => {
    if (matches.length > 0) {
      saveToStorage(STORAGE_KEYS.MATCHES, matches)
    }
  }, [matches])

  const emptyMatch: Omit<Match, "id"> = {
    data: new Date().toISOString().split("T")[0],
    ora: "18:00",
    squadra: "Serie C Femminile",
    avversario: "",
    casa: true,
    palestra: "Palestra Comunale San Martino",
    completata: false,
    campionato: "Serie C Femminile - Girone B",
    giornata: 1,
    arbitri: [],
    note: "",
  }

  const [formData, setFormData] = useState<Omit<Match, "id">>(emptyMatch)

  const isMatchInPast = (date: string) => {
    const matchDate = new Date(date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return matchDate < today
  }

  const generateId = (squadra: string) => {
    const prefix = squadra.toLowerCase().replace(/\s+/g, "").substring(0, 4)
    const timestamp = Date.now().toString().slice(-3)
    return `${prefix}-${timestamp}`
  }

  const handleSave = () => {
    if (!formData.squadra || !formData.avversario || !formData.data) {
      setMessage("Squadra, avversario e data sono obbligatori")
      return
    }

    if (formData.risultato && !formData.completata) {
      setMessage("Il risultato può essere inserito solo per partite completate")
      return
    }

    if (isCreating) {
      const newId = generateId(formData.squadra)
      const newMatch: Match = { ...formData, id: newId }
      setMatches([newMatch, ...matches])
      setMessage("Partita creata con successo!")
    } else if (editingMatch) {
      const updatedMatches = matches.map((match) =>
        match.id === editingMatch.id ? { ...formData, id: editingMatch.id } : match,
      )
      setMatches(updatedMatches)
      setMessage("Partita aggiornata con successo!")
    }

    setIsCreating(false)
    setEditingMatch(null)
    setFormData(emptyMatch)
  }

  const handleEdit = (match: Match) => {
    setEditingMatch(match)
    setFormData(match)
    setIsCreating(false)
  }

  const handleDelete = (id: string) => {
    if (confirm("Sei sicuro di voler eliminare questa partita?")) {
      setMatches(matches.filter((match) => match.id !== id))
      setMessage("Partita eliminata con successo!")
    }
  }

  const handleCancel = () => {
    setIsCreating(false)
    setEditingMatch(null)
    setFormData(emptyMatch)
  }

  const handleArbitriChange = (arbitriString: string) => {
    const arbitri = arbitriString
      .split(",")
      .map((arbitro) => arbitro.trim())
      .filter((arbitro) => arbitro.length > 0)
    setFormData({ ...formData, arbitri })
  }

  const filteredMatches = matches.filter((match) => {
    if (activeTab === "all") return true
    if (activeTab === "upcoming") return !match.completata
    if (activeTab === "completed") return match.completata
    return true
  })

  if (isCreating || editingMatch) {
    const canAddResult = isMatchInPast(formData.data) || formData.completata

    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-ethnocentric text-3xl text-foreground">
                {isCreating ? "NUOVA PARTITA" : "MODIFICA PARTITA"}
              </h1>
              <p className="text-muted-foreground">
                {isCreating ? "Aggiungi una nuova partita al calendario" : "Modifica i dettagli della partita"}
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleCancel}>
                <X className="mr-2 h-4 w-4" />
                Annulla
              </Button>
              <Button onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Salva
              </Button>
            </div>
          </div>

          {message && (
            <Alert className="mb-6">
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dettagli Partita</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="squadra">Squadra *</Label>
                      <Select
                        value={formData.squadra}
                        onValueChange={(value) => setFormData({ ...formData, squadra: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {squadreOptions
                            .filter((s) => s !== "Tutte le Squadre")
                            .map((squadra) => (
                              <SelectItem key={squadra} value={squadra}>
                                {squadra}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="avversario">Avversario *</Label>
                      <Input
                        id="avversario"
                        value={formData.avversario}
                        onChange={(e) => setFormData({ ...formData, avversario: e.target.value })}
                        placeholder="Nome squadra avversaria"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="data">Data *</Label>
                      <Input
                        id="data"
                        type="date"
                        value={formData.data}
                        onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="ora">Ora</Label>
                      <Input
                        id="ora"
                        type="time"
                        value={formData.ora}
                        onChange={(e) => setFormData({ ...formData, ora: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="campionato">Campionato</Label>
                    <Input
                      id="campionato"
                      value={formData.campionato}
                      onChange={(e) => setFormData({ ...formData, campionato: e.target.value })}
                      placeholder="Nome del campionato"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="giornata">Giornata</Label>
                      <Input
                        id="giornata"
                        type="number"
                        value={formData.giornata || ""}
                        onChange={(e) =>
                          setFormData({ ...formData, giornata: Number.parseInt(e.target.value) || undefined })
                        }
                        placeholder="Numero giornata"
                      />
                    </div>

                    <div>
                      <Label>Tipo Partita</Label>
                      <div className="flex gap-4 mt-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            checked={formData.casa}
                            onChange={() => setFormData({ ...formData, casa: true })}
                          />
                          <span>Casa</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            checked={!formData.casa}
                            onChange={() => setFormData({ ...formData, casa: false })}
                          />
                          <span>Trasferta</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="palestra">Palestra</Label>
                    <Select
                      value={formData.palestra}
                      onValueChange={(value) => setFormData({ ...formData, palestra: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {palestre.map((palestra) => (
                          <SelectItem key={palestra.nome} value={palestra.nome}>
                            {palestra.nome}
                          </SelectItem>
                        ))}
                        <SelectItem value="Altra palestra">Altra palestra</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="note">Note</Label>
                    <Textarea
                      id="note"
                      value={formData.note || ""}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      placeholder="Note aggiuntive sulla partita"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Risultato e Arbitri</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <input
                      type="checkbox"
                      id="completata"
                      checked={formData.completata}
                      onChange={(e) => {
                        const completata = e.target.checked
                        setFormData({
                          ...formData,
                          completata,
                          risultato: completata ? formData.risultato : undefined,
                        })
                      }}
                    />
                    <Label htmlFor="completata">Partita completata</Label>
                  </div>

                  {canAddResult && (
                    <div>
                      <Label htmlFor="risultato">Risultato</Label>
                      <Input
                        id="risultato"
                        value={formData.risultato || ""}
                        onChange={(e) => setFormData({ ...formData, risultato: e.target.value })}
                        placeholder="es. 3-1"
                        disabled={!formData.completata}
                      />
                      {!formData.completata && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Spunta "Partita completata" per inserire il risultato
                        </p>
                      )}
                    </div>
                  )}

                  {!canAddResult && (
                    <Alert>
                      <AlertDescription>
                        Il risultato può essere inserito solo per partite già giocate o completate.
                      </AlertDescription>
                    </Alert>
                  )}

                  <div>
                    <Label htmlFor="arbitri">Arbitri (separati da virgola)</Label>
                    <Input
                      id="arbitri"
                      value={formData.arbitri?.join(", ") || ""}
                      onChange={(e) => handleArbitriChange(e.target.value)}
                      placeholder="Mario Rossi, Laura Bianchi"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Anteprima</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant={formData.casa ? "default" : "secondary"}>
                        {formData.casa ? "Casa" : "Trasferta"}
                      </Badge>
                      {formData.completata && <Badge variant="outline">Completata</Badge>}
                    </div>

                    <div className="text-center">
                      <h3 className="font-semibold text-lg mb-2">{formData.squadra || "Squadra"}</h3>
                      <div className="text-2xl font-bold text-primary mb-2">VS</div>
                      <h3 className="font-semibold text-lg">{formData.avversario || "Avversario"}</h3>
                    </div>

                    {formData.risultato && formData.completata && (
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">{formData.risultato}</div>
                      </div>
                    )}

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>
                          {new Date(formData.data).toLocaleDateString("it-IT")} - {formData.ora}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{formData.palestra}</span>
                      </div>
                      {formData.campionato && (
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{formData.campionato}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/admin">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Admin Panel
                </Link>
              </Button>
            </div>
            <h1 className="font-ethnocentric text-3xl text-foreground">GESTIONE PARTITE</h1>
            <p className="text-muted-foreground">Gestisci tutte le partite del calendario</p>
          </div>
          <Button onClick={() => setIsCreating(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Nuova Partita
          </Button>
        </div>

        {message && (
          <Alert className="mb-6">
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList>
            <TabsTrigger value="all">Tutte ({matches.length})</TabsTrigger>
            <TabsTrigger value="upcoming">Prossime ({matches.filter((m) => !m.completata).length})</TabsTrigger>
            <TabsTrigger value="completed">Completate ({matches.filter((m) => m.completata).length})</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 gap-6">
          {filteredMatches.map((match) => (
            <Card key={match.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant={match.casa ? "default" : "secondary"}>{match.casa ? "Casa" : "Trasferta"}</Badge>
                      {match.completata && <Badge variant="outline">Completata</Badge>}
                      <span className="text-sm text-muted-foreground">
                        {match.campionato}
                        {match.giornata && ` - Giornata ${match.giornata}`}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
                      <div className="text-center md:text-left">
                        <h3 className="font-semibold text-lg">{match.squadra}</h3>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-1">VS</div>
                        {match.risultato && <div className="text-xl font-bold text-primary">{match.risultato}</div>}
                      </div>
                      <div className="text-center md:text-right">
                        <h3 className="font-semibold text-lg">{match.avversario}</h3>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>
                          {new Date(match.data).toLocaleDateString("it-IT")} - {match.ora}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{match.palestra}</span>
                      </div>
                      {match.arbitri && match.arbitri.length > 0 && (
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{match.arbitri.join(", ")}</span>
                        </div>
                      )}
                    </div>

                    {match.note && (
                      <div className="mt-3 text-sm text-muted-foreground">
                        <strong>Note:</strong> {match.note}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(match)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(match.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMatches.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">Nessuna partita trovata</p>
            <Button onClick={() => setIsCreating(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Crea la prima partita
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
