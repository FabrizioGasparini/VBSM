import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Users, Clock, ArrowRight, Heart, Target, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary to-primary/80 text-primary-foreground">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-ethnocentric text-4xl lg:text-6xl mb-6 text-balance">VOLLEYBALL SAN MARTINO</h1>
              <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 text-pretty">
                Passione, impegno e spirito di squadra dal 1985. Unisciti alla nostra famiglia del volleyball!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/squadre">
                    Scopri le Squadre
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <Link href="/contatti">Unisciti a Noi</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/festeggiamenti.png"
                alt="Volleyball San Martino in azione"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Le Nostre Squadre</CardTitle>
                <CardDescription>
                  Dalle categorie giovanili alle serie competitive, scopri tutte le nostre squadre
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" asChild>
                  <Link href="/squadre">Vedi Squadre</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Calendario Partite</CardTitle>
                <CardDescription>Resta aggiornato su tutte le partite e gli eventi della società</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" asChild>
                  <Link href="/calendario">Vedi Calendario</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Orari Allenamenti</CardTitle>
                <CardDescription>Consulta gli orari di allenamento per tutte le categorie</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" asChild>
                  <Link href="/allenamenti">Vedi Orari</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-ethnocentric text-3xl lg:text-4xl mb-6 text-primary">CHI SIAMO</h2>
              <p className="text-lg mb-6 text-pretty leading-relaxed">
                La Volleyball San Martino è una società sportiva fondata nel 1985 con la missione di promuovere i valori
                del volleyball attraverso la formazione di giovani atleti e la partecipazione a competizioni di alto
                livello.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">41</div>
                  <div className="text-sm text-muted-foreground">Anni di Storia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">17</div>
                  <div className="text-sm text-muted-foreground">Squadre Attive</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">220+</div>
                  <div className="text-sm text-muted-foreground">Atleti</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Trofei Vinti</div>
                </div>
              </div>
              <Button asChild>
                <Link href="/chi-siamo">
                  Scopri la Nostra Storia
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/promozioneb2.png"
                alt="La squadra Volleyball San Martino"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-ethnocentric text-3xl lg:text-4xl mb-4 text-primary">I NOSTRI VALORI</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Questi sono i principi che guidano ogni nostra azione, dentro e fuori dal campo
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Passione</h3>
              <p className="text-muted-foreground text-sm">
                L'amore per il volleyball guida ogni nostro allenamento e partita
              </p>
            </div>
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Squadra</h3>
              <p className="text-muted-foreground text-sm">Insieme siamo più forti, il successo è sempre condiviso</p>
            </div>
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Impegno</h3>
              <p className="text-muted-foreground text-sm">
                La dedizione e il lavoro duro sono la base del miglioramento
              </p>
            </div>
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Eccellenza</h3>
              <p className="text-muted-foreground text-sm">Puntiamo sempre al massimo, dentro e fuori dal campo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-ethnocentric text-3xl lg:text-4xl text-primary">ULTIME NEWS</h2>
            <Button variant="outline" asChild>
              <Link href="/news">Vedi Tutte</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/volleyball-match-victory-celebration.jpg"
                  alt="Vittoria importante"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary">Risultati</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Grande vittoria contro i rivali storici</CardTitle>
                <CardDescription>La Serie C Femminile conquista una vittoria importante...</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/volleyball-training-camp-for-young-players.jpg"
                  alt="Camp estivo"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Eventi</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Camp estivo 2024: iscrizioni aperte</CardTitle>
                <CardDescription>Un'esperienza unica per giovani atleti dai 8 ai 16 anni...</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/new-volleyball-equipment-and-uniforms.jpg"
                  alt="Nuove divise"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">Novità</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Presentate le nuove divise ufficiali</CardTitle>
                <CardDescription>Un design moderno che riflette i nostri valori...</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-ethnocentric text-3xl lg:text-4xl mb-6">UNISCITI ALLA FAMIGLIA</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 text-pretty">
            Che tu sia un principiante o un atleta esperto, c'è posto per te nella Volleyball San Martino. Scopri come
            far parte della nostra squadra!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link href="/contatti">Contattaci Ora</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/allenamenti">Prova Gratuita</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
