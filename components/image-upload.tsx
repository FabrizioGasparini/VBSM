"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, X } from "lucide-react"

interface ImageUploadProps {
  value: string
  onChange: (url: string) => void
  label?: string
}

export function ImageUpload({ value, onChange, label = "Immagine" }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Check file type
    if (!file.type.startsWith("image/")) {
      alert("Seleziona solo file immagine")
      return
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Il file è troppo grande. Massimo 5MB.")
      return
    }

    setIsUploading(true)

    try {
      // Convert to base64 for preview (in a real app, you'd upload to a server)
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        onChange(result)
        setIsUploading(false)
      }
      reader.readAsDataURL(file)
    } catch (error) {
      console.error("Error uploading image:", error)
      alert("Errore durante il caricamento dell'immagine")
      setIsUploading(false)
    }
  }

  const handleUrlChange = (url: string) => {
    onChange(url)
  }

  const clearImage = () => {
    onChange("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="space-y-4">
      <Label>{label}</Label>

      {/* URL Input */}
      <div className="space-y-2">
        <Label className="text-sm text-muted-foreground">URL Immagine</Label>
        <Input
          value={value.startsWith("data:") ? "" : value}
          onChange={(e) => handleUrlChange(e.target.value)}
          placeholder="https://esempio.com/immagine.jpg"
        />
      </div>

      {/* File Upload */}
      <div className="space-y-2">
        <Label className="text-sm text-muted-foreground">Oppure carica un file</Label>
        <div className="flex gap-2">
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
          <Button
            type="button"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="flex-1"
          >
            <Upload className="mr-2 h-4 w-4" />
            {isUploading ? "Caricamento..." : "Carica Immagine"}
          </Button>
          {value && (
            <Button type="button" variant="outline" size="icon" onClick={clearImage}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Preview */}
      {value && (
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Anteprima</Label>
          <div className="relative w-full h-48 border rounded-lg overflow-hidden bg-muted">
            <img
              src={value || "/placeholder.svg"}
              alt="Anteprima"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg?height=200&width=400&text=Immagine non trovata"
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
