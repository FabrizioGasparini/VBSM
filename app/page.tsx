import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Users, Clock, ArrowRight, Heart, Target, Award, Zap, User } from "lucide-react"
import { getLatestNews } from "@/lib/news-data"

export default function HomePage() {
  const latestNews = getLatestNews(3)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/20 to-accent/10 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-md animate-bounce" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-foreground uppercase tracking-wide">Dal 1984</span>
              </div>

              <div className="space-y-6">
                <h1 className="font-ethnocentric text-4xl lg:text-7xl text-foreground leading-tight">
                  <span className="block">VOLLEYBALL</span>
                  <span className="block text-primary animate-pulse">SAN MARTINO</span>
                </h1>

                <div className="space-y-4">
                  <p className="text-xl lg:text-2xl text-muted-foreground text-pretty font-medium">
                    🏐 <strong>Passione, Impegno, Vittoria</strong>
                  </p>
                  <p className="text-lg lg:text-xl text-muted-foreground text-pretty leading-relaxed">
                    Oltre 41 anni di eccellenza nel volleyball. 17 squadre, 220+ atleti, una sola grande famiglia unita
                    dalla passione per questo sport.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/squadre">
                    🏆 Scopri le Squadre
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 bg-transparent"
                  asChild
                >
                  <Link href="/contatti">⚡ Vieni a Provare!</Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-muted">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">17</div>
                  <div className="text-sm text-muted-foreground">Squadre Attive</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">220+</div>
                  <div className="text-sm text-muted-foreground">Atleti</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">41</div>
                  <div className="text-sm text-muted-foreground">Anni Storia</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
                  <img
                    src="/festeggiamenti.png"
                    alt="Volleyball San Martino in azione - Squadra che salta per schiacciare"
                    className="rounded-xl shadow-lg w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                    🏆 Dall'S3 alla Serie C
                  </div>
                  <div className="absolute -bottom-2 -left-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    ⭐ 17 Squadre
                  </div>
                </div>
              </div>

              <Link className="group hover:scale-105 transition-all duration-300 absolute top-1/4 -left-8 hidden lg:block" href="/allenamenti">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Allenamenti Attivi</span>
                  </div>
                </div>
              </Link>

              <Link className="group hover:scale-105 transition-all duration-300 absolute bottom-1/4 -right-8 hidden lg:block cursor-pointer" href="/calendario">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border animate-float delay-1000">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Prossima Partita</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(157,48,27,0.15),transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(224,213,181,0.1),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(157,48,27,0.02)_50%,transparent_75%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 to-accent/20 px-6 py-3 rounded-full mb-8 shadow-lg">
              <div className="relative">
                <Zap className="h-6 w-6 text-primary animate-pulse" />
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
              </div>
              <span className="text-base font-bold text-primary uppercase tracking-wider">🔥 Ultime Novità</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
            </div>

            <h2 className="font-ethnocentric text-5xl lg:text-7xl mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              BREAKING NEWS
            </h2>
            <p className="text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto text-pretty font-medium leading-relaxed">
              🚨 Non perdere le <span className="text-primary font-bold">ultime notizie</span>, risultati esplosivi e
              aggiornamenti esclusivi dal Volleyball San Martino
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
            {latestNews.map((article, index) => (
              <Card
                key={article.id}
                className={`group hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-2 pt-0 ${
                  index === 0
                    ? "lg:scale-110 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 shadow-xl"
                    : "hover:border-primary/20"
                }`}
              >
                <Link href={`/news/${article.slug}`}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={article.immagine || "/placeholder.svg"}
                      alt={article.titolo}
                      className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                        index === 0 ? "h-54" : "h-48"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <Badge className="absolute top-6 left-6 bg-primary text-primary-foreground shadow-xl text-sm px-3 py-1">
                      {article.categoria}
                    </Badge>

                    {index === 0 && (
                      <div className="absolute top-6 right-6 flex flex-col gap-2">
                        <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white animate-bounce shadow-xl">
                          🔥 BREAKING
                        </Badge>
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black animate-pulse shadow-xl hidden">
                          ⚡ HOT
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground py-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.data).toLocaleDateString("it-IT")}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{article.autore}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-balance group-hover:text-primary transition-colors">
                      {article.titolo}
                    </CardTitle>
                    <CardDescription className="text-base text-pretty">{article.estratto}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground font-medium">✍️ {article.autore}</span>
                      <div className="flex items-center gap-2 text-primary group-hover:translate-x-2 transition-transform">
                        <span className="text-sm font-semibold">Leggi tutto</span>
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-4">
              <div className="text-lg text-muted-foreground font-medium">📰 Vuoi rimanere sempre aggiornato?</div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 text-lg px-8 py-4"
                asChild
              >
                <Link href="/news">
                  <Zap className="mr-3 h-6 w-6 animate-pulse" />🚀 Scopri Tutte le News Esplosive
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <div className="text-sm text-muted-foreground">
                ⭐ Aggiornamenti quotidiani • 📱 Sempre fresh • 🏆 Risultati in tempo reale
              </div>
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
                Il Volleyball San Martino è una società sportiva fondata nel 1984 con la missione di promuovere i valori
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
                  <div className="text-3xl font-bold text-primary mb-2">19</div>
                  <div className="text-sm text-muted-foreground">Allenatori</div>
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

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-ethnocentric text-3xl lg:text-4xl mb-6">UNISCITI ALLA FAMIGLIA</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 text-pretty">
            Che tu sia un principiante o un atleta esperto, c'è posto per te nel Volleyball San Martino. Scopri come
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
              <Link href="/allenamenti">Vieni a Provare!</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
