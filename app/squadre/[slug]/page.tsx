import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Trophy, Target, Calendar } from "lucide-react"
import Link from "next/link"
import { getTeamBySlug, getAllTeamSlugs } from "@/lib/teams-data"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return getAllTeamSlugs().map((slug) => ({
    slug: slug,
  }))
}

interface TeamPageProps {
  params: Promise<{ slug: string }>
}

export default async function TeamPage({ params }: TeamPageProps) {
  const { slug } = await params
  const team = getTeamBySlug(slug)

  if (!team) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/squadre">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Torna alle Squadre
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <Badge className="mb-4 bg-primary-foreground text-primary">{team.campionato}</Badge>
            <h1 className="font-ethnocentric text-4xl lg:text-5xl mb-4">{team.categoria}</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
              {team.descrizione}
            </p>
          </div>
        </div>
      </section>

      {/* Team Image and Stats */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="lg:col-span-2 h-fit">
              <img
                src={team.immagine || "/placeholder.svg"}
                alt={`Squadra ${team.categoria}`}
                className="h-full  object-cover rounded-lg"
              />
            </div>
      
          </div>

          {/* Team Details */}
          <Tabs defaultValue="giocatori" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="giocatori">Giocatori</TabsTrigger>
              <TabsTrigger value="staff">Staff</TabsTrigger>
            </TabsList>

            <TabsContent value="giocatori" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {team.giocatori.map((giocatore) => (
                  <Card key={giocatore.id} className={`hover:shadow-lg transition-shadow ${giocatore.capitano ? "border-2 border-yellow-400" : ""}`}>
                    <CardHeader className="pb-0">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={giocatore.foto || "/placeholder.png"} />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {giocatore.nome[0]}
                            {giocatore.cognome[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">
                            {giocatore.nome} {giocatore.cognome} {giocatore.capitano ? <span className="text-yellow-400" title="Capitano">★</span> : null}
                          </CardTitle>
                          <CardDescription>
                            #{giocatore.numero} - {giocatore.ruolo}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2 hidden">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="font-medium">Età:</span> {giocatore.eta} anni
                        </div>
                        <div>
                          <span className="font-medium">Altezza:</span> {giocatore.altezza}
                        </div>
                        <div>
                          <span className="font-medium">Peso:</span> {giocatore.peso}
                        </div>
                        <div>
                          <span className="font-medium">Nazionalità:</span> {giocatore.nazionalita}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="staff" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {team.staff.map((membro) => (
                  <Card key={membro.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={membro.foto || "/placeholder.svg"} />
                          <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                            {membro.nome[0]}
                            {membro.cognome[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-xl">
                            {membro.nome} {membro.cognome}
                          </CardTitle>
                          <CardDescription className="text-base">{membro.ruolo}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="hidden">
                        <h4 className="font-medium mb-2">Esperienza</h4>
                        <p className="text-sm text-muted-foreground">{membro.esperienza}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Qualifiche</h4>
                        <div className="space-y-1">
                          {membro.qualifiche.map((qualifica, idx) => (
                            <Badge key={idx} variant="secondary" className="mr-2 mb-1">
                              {qualifica}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  )
}
