import Link from "next/link"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrizione */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-ethnocentric text-xl text-volleyball-coral mb-4">VOLLEYBALL SAN MARTINO</h3>
            <p className="text-secondary-foreground mb-4 leading-relaxed">
              La società sportiva che promuove i valori del volleyball attraverso passione, impegno e spirito di
              squadra. Unisciti alla nostra famiglia!
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/VolleyBallSanMartino/" target="_blank" className="text-secondary-foreground hover:text-volleyball-coral transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/volley_ball_san_martino/" target="_blank" className="text-secondary-foreground hover:text-volleyball-coral transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://www.youtube.com/@volleyballsanmartino5064" target="_blank" className="text-secondary-foreground hover:text-volleyball-coral transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Link Rapidi */}
          <div>
            <h4 className="font-semibold text-volleyball-coral mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/squadre" className="hover:text-volleyball-coral transition-colors">
                  Squadre
                </Link>
              </li>
              <li>
                <Link href="/calendario" className="hover:text-volleyball-coral transition-colors">
                  Calendario
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-volleyball-coral transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/allenamenti" className="hover:text-volleyball-coral transition-colors">
                  Allenamenti
                </Link>
              </li>
              <li>
                <Link href="/sponsor" className="hover:text-volleyball-coral transition-colors">
                  Sponsor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-semibold text-volleyball-coral mb-4">Contatti</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>0522 731939</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>vbsmcampionati@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Piazza V. Carnevali, 1<br />42018 San Martino In Rio RE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-volleyball-coral/20 mt-8 pt-8 text-center">
          <p>&copy; 2025 Volleyball San Martino. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
