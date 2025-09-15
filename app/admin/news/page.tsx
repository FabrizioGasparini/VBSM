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
import { Plus, Edit, Trash2, Eye, Save, X, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { type NewsArticle, newsData, getCategories } from "@/lib/news-data"
import { ImageUpload } from "@/components/image-upload"
import { saveToStorage, loadFromStorage, STORAGE_KEYS } from "@/lib/storage"

export default function AdminNewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [editingArticle, setEditingArticle] = useState<NewsArticle | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [message, setMessage] = useState("")
  const [tagsInput, setTagsInput] = useState("")

  useEffect(() => {
    const savedArticles = loadFromStorage(STORAGE_KEYS.NEWS, newsData)
    setArticles(savedArticles)
  }, [])

  useEffect(() => {
    if (articles.length > 0) {
      saveToStorage(STORAGE_KEYS.NEWS, articles)
    }
  }, [articles])

  const categories = getCategories().filter((cat) => cat !== "Tutte")

  const emptyArticle: Omit<NewsArticle, "id"> = {
    slug: "",
    titolo: "",
    categoria: "Risultati",
    data: new Date().toISOString().split("T")[0],
    autore: "Redazione VSM",
    immagine: "/volleyball-game.png",
    estratto: "",
    contenuto: "",
    tags: [],
    featured: false,
  }

  const [formData, setFormData] = useState<Omit<NewsArticle, "id">>(emptyArticle)

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[àáâãäå]/g, "a")
      .replace(/[èéêë]/g, "e")
      .replace(/[ìíîï]/g, "i")
      .replace(/[òóôõö]/g, "o")
      .replace(/[ùúûü]/g, "u")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
  }

  const handleSave = () => {
    if (!formData.titolo || !formData.contenuto) {
      setMessage("Titolo e contenuto sono obbligatori")
      return
    }

    const slug = formData.slug || generateSlug(formData.titolo)

    if (isCreating) {
      const newId = Math.max(...articles.map((a) => a.id), 0) + 1
      const newArticle: NewsArticle = { ...formData, id: newId, slug }
      setArticles([newArticle, ...articles])
      setMessage("Articolo creato con successo!")
    } else if (editingArticle) {
      const updatedArticles = articles.map((article) =>
        article.id === editingArticle.id ? { ...formData, id: editingArticle.id, slug } : article,
      )
      setArticles(updatedArticles)
      setMessage("Articolo aggiornato con successo!")
    }

    setIsCreating(false)
    setEditingArticle(null)
    setFormData(emptyArticle)
  }

  const handleEdit = (article: NewsArticle) => {
    setEditingArticle(article)
    setFormData(article)
    setIsCreating(false)
  }

  const handleDelete = (id: number) => {
    if (confirm("Sei sicuro di voler eliminare questo articolo?")) {
      setArticles(articles.filter((article) => article.id !== id))
      setMessage("Articolo eliminato con successo!")
    }
  }

  const handleCancel = () => {
    setIsCreating(false)
    setEditingArticle(null)
    setFormData(emptyArticle)
  }

  const handleTagsChange = (tagsString: string) => {
    setTagsInput(tagsString)
    
    const tags = tagsString
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0)
    setFormData({ ...formData, tags })
  }

  useEffect(() => {
    if (formData.titolo && !formData.slug) {
      setFormData((prev) => ({ ...prev, slug: generateSlug(prev.titolo) }))
    }
  }, [formData.titolo])

  if (isCreating || editingArticle) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-ethnocentric text-3xl text-foreground">
                {isCreating ? "NUOVA NEWS" : "MODIFICA NEWS"}
              </h1>
              <p className="text-muted-foreground">
                {isCreating ? "Crea un nuovo articolo" : "Modifica l'articolo esistente"}
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
                  <CardTitle>Contenuto Principale</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="titolo">Titolo *</Label>
                    <Input
                      id="titolo"
                      value={formData.titolo}
                      onChange={(e) => setFormData({ ...formData, titolo: e.target.value })}
                      placeholder="Inserisci il titolo dell'articolo"
                    />
                  </div>

                  <div>
                    <Label htmlFor="slug">Slug URL</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      placeholder="url-articolo"
                    />
                  </div>

                  <div>
                    <Label htmlFor="estratto">Estratto</Label>
                    <Textarea
                      id="estratto"
                      value={formData.estratto}
                      onChange={(e) => setFormData({ ...formData, estratto: e.target.value })}
                      placeholder="Breve descrizione dell'articolo"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="contenuto">Contenuto *</Label>
                    <Textarea
                      id="contenuto"
                      value={formData.contenuto}
                      onChange={(e) => setFormData({ ...formData, contenuto: e.target.value })}
                      placeholder="Contenuto completo dell'articolo"
                      rows={15}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Impostazioni</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="categoria">Categoria</Label>
                    <Select
                      value={formData.categoria}
                      onValueChange={(value) => setFormData({ ...formData, categoria: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="data">Data</Label>
                    <Input
                      id="data"
                      type="date"
                      value={formData.data}
                      onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="autore">Autore</Label>
                    <Input
                      id="autore"
                      value={formData.autore}
                      onChange={(e) => setFormData({ ...formData, autore: e.target.value })}
                    />
                  </div>

                  <ImageUpload
                    value={formData.immagine}
                    onChange={(url) => setFormData({ ...formData, immagine: url })}
                    label="Immagine Articolo"
                  />

                  <div>
                    <Label htmlFor="tags">Tags (separati da virgola)</Label>
                    <Input
                      id="tags"
                      value={tagsInput}
                      onChange={(e) => handleTagsChange(e.target.value)}
                      placeholder="tag1, tag2, tag3"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={formData.featured || false}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor="featured">Articolo in evidenza</Label>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Anteprima</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <img
                      src={formData.immagine || "/placeholder.svg"}
                      alt="Anteprima"
                      className="w-full h-32 object-cover rounded"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=128&width=300&text=Immagine non trovata"
                      }}
                    />
                    <h3 className="font-semibold line-clamp-2">{formData.titolo || "Titolo articolo"}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {formData.estratto || "Estratto dell'articolo"}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {formData.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
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
            <h1 className="font-ethnocentric text-3xl text-foreground">GESTIONE NEWS</h1>
            <p className="text-muted-foreground">Gestisci tutti gli articoli del sito</p>
          </div>
          <Button onClick={() => setIsCreating(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Nuova News
          </Button>
        </div>

        {message && (
          <Alert className="mb-6">
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant={article.featured ? "default" : "secondary"}>{article.categoria}</Badge>
                      {article.featured && <Badge variant="destructive">In Evidenza</Badge>}
                      <span className="text-sm text-muted-foreground">
                        {new Date(article.data).toLocaleDateString("it-IT")}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2 line-clamp-2">{article.titolo}</h3>

                    <p className="text-muted-foreground mb-3 line-clamp-2">{article.estratto}</p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>👤 {article.autore}</span>
                      <span>🏷️ {article.tags.join(", ")}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/news/${article.slug}`} target="_blank">
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(article)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(article.id)}
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

        {articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">Nessun articolo trovato</p>
            <Button onClick={() => setIsCreating(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Crea il primo articolo
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
