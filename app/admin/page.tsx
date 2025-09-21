"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, Lock } from "lucide-react"

export default function AdminPage() {

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-ethnocentric text-3xl text-foreground">ADMIN PANEL</h1>
            <p className="text-muted-foreground">Gestisci news e partite della Volleyball San Martino</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Gestione News</CardTitle>
              <CardDescription>Aggiungi, modifica ed elimina le notizie</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full" size="lg" asChild>
                  <Link href="/admin/news">📝 Gestisci News</Link>
                </Button>
                <div className="text-sm text-muted-foreground">
                  • Aggiungi nuove notizie
                  <br />• Modifica articoli esistenti
                  <br />• Elimina contenuti obsoleti
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Gestione Partite</CardTitle>
              <CardDescription>Aggiungi, modifica ed elimina le partite del calendario</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full" size="lg" asChild>
                  <Link href="/admin/matches">🏐 Gestisci Partite</Link>
                </Button>
                <div className="text-sm text-muted-foreground">
                  • Aggiungi nuove partite
                  <br />• Aggiorna risultati
                  <br />• Modifica orari e luoghi
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
