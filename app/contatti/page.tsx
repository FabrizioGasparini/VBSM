"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Users, MessageSquare, Calendar, Dumbbell, School2, School } from "lucide-react"

const contatti = [
  {
    tipo: "Presidente",
    nome: "Roberto Intonti",
    telefono: "+39 0123 456792",
    email: "presidente@volleysanmartino.it",
    orari: "Su appuntamento",
    icona: Calendar,
  },
  {
    tipo: "Segreteria Generale",
    nome: "Anna Verdi",
    telefono: "+39 0123 456789",
    email: "segreteria@volleysanmartino.it",
    orari: "Lun-Ven: 18:00-20:00",
    icona: Phone,
  },
  {
    tipo: "Settore Giovanile",
    nome: "Marco Bianchi",
    telefono: "+39 0123 456790",
    email: "giovanile@volleysanmartino.it",
    orari: "Mar-Gio: 17:00-19:00",
    icona: Users,
  },
  {
    tipo: "Squadre Senior",
    nome: "Elena Rossi",
    telefono: "+39 0123 456791",
    email: "senior@volleysanmartino.it",
    orari: "Lun-Mer-Ven: 19:00-21:00",
    icona: MessageSquare,
  },
]

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    oggetto: "",
    messaggio: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, oggetto: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-ethnocentric text-4xl lg:text-5xl mb-4">CONTATTI</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
              Hai domande o vuoi unirti alla nostra famiglia? Contattaci, saremo felici di risponderti
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-ethnocentric text-3xl lg:text-4xl mb-4 text-primary">COME RAGGIUNGERCI</h2>
            <p className="text-lg text-muted-foreground">Scegli il contatto più adatto alle tue esigenze</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contatti.map((contatto, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <contatto.icona className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{contatto.tipo}</CardTitle>
                  <CardDescription className="font-medium">{contatto.nome}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{contatto.telefono}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm break-all">{contatto.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{contatto.orari}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-ethnocentric text-3xl lg:text-4xl mb-4 text-primary">SCRIVICI</h2>
            <p className="text-lg text-muted-foreground">Compila il form e ti risponderemo il prima possibile</p>
          </div>
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome e Cognome *</Label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Il tuo nome completo"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="la-tua-email@esempio.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Telefono</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      placeholder="+39 123 456 7890"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="oggetto">Oggetto *</Label>
                    <Select value={formData.oggetto} onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleziona l'oggetto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="informazioni-generali">Informazioni Generali</SelectItem>
                        <SelectItem value="iscrizione-squadra">Iscrizione a una Squadra</SelectItem>
                        <SelectItem value="prova">Richiesta Prova</SelectItem>
                        <SelectItem value="settore-giovanile">Settore Giovanile</SelectItem>
                        <SelectItem value="squadre-senior">Squadre Senior</SelectItem>
                        <SelectItem value="sponsorizzazioni">Sponsorizzazioni</SelectItem>
                        <SelectItem value="altro">Altro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="messaggio">Messaggio *</Label>
                  <Textarea
                    id="messaggio"
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleInputChange}
                    placeholder="Scrivi qui il tuo messaggio..."
                    rows={6}
                    required
                  />
                </div>
                <div className="text-center">
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Invia Messaggio
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-background">
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

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-ethnocentric text-3xl lg:text-4xl mb-4 text-primary">DOMANDE FREQUENTI</h2>
            <p className="text-lg text-muted-foreground">Le risposte alle domande più comuni</p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Come posso iscrivermi a una squadra?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Puoi contattare direttamente la segreteria o il responsabile del settore di tuo interesse. Vieni in palestra
                  a provare per valutare il tuo livello e trovare il gruppo più adatto a te.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quali sono i costi di iscrizione?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I costi variano in base alla categoria e includono tessera federale e assicurazione.
                  Contattaci per informazioni dettagliate sui prezzi delle singole squadre.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Serve esperienza per iniziare?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No, accogliamo atleti di tutti i livelli. Abbiamo programmi specifici per principianti e i nostri
                  allenatori sono specializzati nell'insegnamento delle basi della pallavolo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
