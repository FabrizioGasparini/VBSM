"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getNewsByCategory, getCategories } from "@/lib/news-data"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function NewsPage() {
  const [categoriaFiltro, setCategoriaFiltro] = useState("Tutte")
  const categorie = getCategories()
  const newsFiltrate = getNewsByCategory(categoriaFiltro)
  const featuredArticles = newsFiltrate.filter((articolo) => articolo.featured)

  const formatData = (dataString: string) => {
    const data = new Date(dataString)
    return data.toLocaleDateString("it-IT", {
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
            <h1 className="font-ethnocentric text-4xl lg:text-5xl mb-4">NEWS & AGGIORNAMENTI</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
              Resta sempre aggiornato su tutte le novità, i risultati e gli eventi della Volleyball San Martino
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <h2 className="text-2xl font-semibold">Ultime Notizie</h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Filtra per categoria:</span>
              <Select value={categoriaFiltro} onValueChange={setCategoriaFiltro}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categorie.map((categoria) => (
                    <SelectItem key={categoria} value={categoria}>
                      {categoria}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {featuredArticles.length > 0 &&
            featuredArticles.map((featuredArticle, idx) => (
              <Card key={featuredArticle.id || idx} className="mb-12 overflow-hidden pt-0 pb-0">
                <Link href={`/news/${featuredArticle.slug}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative">
                      <img
                        src={featuredArticle.immagine || "/placeholder.svg"}
                        alt={featuredArticle.titolo}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        {featuredArticle.categoria}
                      </Badge>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatData(featuredArticle.data)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{featuredArticle.autore}</span>
                          </div>
                        </div>
                        <h2 className="text-3xl font-bold text-balance hover:text-primary transition-colors">
                          {featuredArticle.titolo}
                        </h2>
                        <p className="text-lg text-muted-foreground text-pretty">{featuredArticle.estratto}</p>
                        <div className="flex flex-wrap gap-2">
                          {featuredArticle.tags.map((tag, index) => (
                            <Badge key={index} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button className="w-fit">
                          Leggi di più
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            ))
          }

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsFiltrate.filter((articolo) => !featuredArticles.some((fa) => fa.id === articolo.id)).map((articolo) => (
              <Card
                key={articolo.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 pt-0"
              >
                <Link href={`/news/${articolo.slug}`}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={articolo.immagine || "/placeholder.svg"}
                      alt={articolo.titolo}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {articolo.categoria}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground py-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatData(articolo.data)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{articolo.autore}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-balance group-hover:text-primary transition-colors">
                      {articolo.titolo}
                    </CardTitle>
                    <CardDescription className="text-base text-pretty">{articolo.estratto}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {articolo.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      Leggi di più
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
