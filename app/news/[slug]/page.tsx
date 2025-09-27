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
  const article = await getNewsBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedNews = (await getLatestNews(4))
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

  const renderInline = (text: string): React.ReactNode => {
    const parts: React.ReactNode[] = []
    const regex = /!\[([^\]]*)\]\(([^)]+)\)/g
    let lastIndex = 0
    let match: RegExpExecArray | null
    let idx = 0
    while ((match = regex.exec(text)) !== null) {
      const before = text.slice(lastIndex, match.index)
      if (before) parts.push(renderSimpleFormatting(before, `t-before-${idx}`))
      const alt = match[1]
      const url = match[2]
      parts.push(
        <img
          key={`inline-img-${idx}`}
          src={url}
          alt={alt}
          className="inline-block max-h-40 rounded ml-1 mr-1 align-middle"
        />
      )
      lastIndex = regex.lastIndex
      idx++
    }
    const rest = text.slice(lastIndex)
    if (rest) parts.push(renderSimpleFormatting(rest, `t-rest-${idx}`))
    return <>{parts}</>
  }

  const renderSimpleFormatting = (txt: string, keyPrefix: string) => {
    const tokens: React.ReactNode[] = []
    let pos = 0
    let idx = 0
    const combinedRegex = /(\*\*_(.+?)_\*\*)|(\*{2}(.+?)\*{2})|(_(.+?)_)/g
    let match: RegExpExecArray | null
    while ((match = combinedRegex.exec(txt)) !== null) {
      const before = txt.slice(pos, match.index)
      if (before) tokens.push(<span key={`${keyPrefix}-${idx}-before`}>{before}</span>)
      if (match[1]) {
        tokens.push(<strong key={`${keyPrefix}-${idx}-b`}><em>{match[2]}</em></strong>)
      } else if (match[3]) {
        tokens.push(<strong key={`${keyPrefix}-${idx}-b`}>{match[4]}</strong>)
      } else if (match[5]) {
        tokens.push(<em key={`${keyPrefix}-${idx}-i`}>{match[6]}</em>)
      }
      pos = combinedRegex.lastIndex
      idx++
    }
    const tail = txt.slice(pos)
    if (tail) tokens.push(<span key={`${keyPrefix}-tail`}>{tail}</span>)
    return <span key={`${keyPrefix}-container`}>{tokens}</span>
  }

  const renderContent = (raw: string) => {
    const lines = raw.replace("\r", "").split(/\r?\n/)
    const elements: React.ReactNode[] = []
    let inCode = false
    let codeBuffer: string[] = []

    lines.forEach((line, i) => {
      if (line.trim().startsWith("```")) {
        if (!inCode) {
          inCode = true
          codeBuffer = []
        } else {
          inCode = false
          elements.push(
            <pre key={`code-${i}`} className="bg-muted p-3 rounded overflow-x-auto text-sm">
              <code>{codeBuffer.join("\n")}</code>
            </pre>
          )
        }
        return
      }
      if (inCode) {
        codeBuffer.push(line)
        return
      }

      if (line.startsWith("# ")) {
        elements.push(<h1 key={i} className="text-3xl font-bold mt-6 mb-4">{line.replace(/^#\s+/, "")}</h1>)
        return
      }
      if (line.startsWith("## ")) {
        elements.push(<h2 key={i} className="text-2xl font-semibold mt-4 mb-2">{line.replace(/^##\s+/, "")}</h2>)
        return
      }

      if (line.trim().startsWith("- ")) {
        const items = []
        let j = i
        while (j < lines.length && lines[j].trim().startsWith("- ")) {
          items.push(lines[j].trim().replace(/^-+\s*/, ""))
          j++
        }
        elements.push(
          <ul key={`ul-${i}`} className="list-disc pl-6 mb-3">
            {items.map((it, idx) => <li key={idx}>{renderInline(it)}</li>)}
          </ul>
        )
        return
      }

      const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)\s*$/)
      if (imgMatch) {
        elements.push(
          <div key={`img-${i}`} className="my-6">
            <img src={imgMatch[2]} alt={imgMatch[1]} className="w-full rounded-lg shadow-lg" />
          </div>
        )
        return
      }

      if (line.trim() === "") {
        elements.push(<div key={`br-${i}`} className="h-2" />)
      } else {
        elements.push(<p key={`p-${i}`} className="text-pretty">{renderInline(line)}</p>)
      }
    })

    return elements
  }

  return (
    <div className="min-h-screen">
      <Navigation background="bg-transparent" />

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
                {article.tags && article.tags.map((tag, index) => (
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
              src={"/images/" + article.immagine}
              alt={article.titolo}
              className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 font-medium text-pretty">
              {article.estratto}
            </p>
            <div className="text-foreground leading-relaxed space-y-6">
              {renderContent(article.contenuto || "")}
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
                        src={"/images/" + news.immagine || "/placeholder.svg"}
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
