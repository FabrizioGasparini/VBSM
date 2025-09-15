"use client";

import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getNewsBySlug, getLatestNews } from "@/lib/news-data"
import Link from "next/link"
import { Calendar, User, ArrowLeft } from "lucide-react"

interface NewsArticlePageProps {
  params: Promise<{ slug: string }>
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params
  const article = getNewsBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedNews = getLatestNews(4)
    .filter((news) => news.id !== article.id)
    .slice(0, 3)

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

      {/* Article Header */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="outline" asChild className="mb-6 bg-transparent">
              <Link href="/news">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Torna alle News
              </Link>
            </Button>

            <div className="space-y-4">
              <Badge className="bg-primary text-primary-foreground">{article.categoria}</Badge>

              <h1 className="font-ethnocentric text-3xl lg:text-4xl text-primary text-balance">{article.titolo}</h1>

              <div className="flex items-center space-x-6 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatData(article.data)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{article.autore}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Article Image */}
          <div className="mb-8">
            <img
              src={article.immagine || "/placeholder.svg"}
              alt={article.titolo}
              className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 font-medium text-pretty">{article.estratto}</p>

            <div className="text-foreground leading-relaxed space-y-6">
              {article.contenuto.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-primary mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  )
                }
                if (paragraph.startsWith("- ")) {
                  const listItems = paragraph.split("\n").filter((item) => item.startsWith("- "))
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 ml-4">
                      {listItems.map((item, itemIndex) => (
                        <li key={itemIndex}>{item.substring(2)}</li>
                      ))}
                    </ul>
                  )
                }
                return (
                  <p key={index} className="text-pretty">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-ethnocentric text-2xl lg:text-3xl text-primary mb-8">ALTRE NEWS</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedNews.map((news) => (
                <Card key={news.id} className="group hover:shadow-lg transition-all duration-300 pt-0">
                  <Link href={`/news/${news.slug}`}>
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={news.immagine || "/placeholder.svg"}
                        alt={news.titolo}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        {news.categoria}
                      </Badge>
                    </div>
                    <CardContent className="px-6 py-4">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatData(news.data)}</span>
                          </div>
                        </div>
                        <h3 className="font-semibold text-lg text-balance group-hover:text-primary transition-colors">
                          {news.titolo}
                        </h3>
                        <p className="text-muted-foreground text-sm text-pretty">{news.estratto}</p>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
