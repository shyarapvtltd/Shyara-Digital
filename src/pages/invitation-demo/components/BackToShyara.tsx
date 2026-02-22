import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function BackToShyara() {
  return (
    <Link
      to="/invitation-website"
      className="fixed bottom-4 right-4 z-[200] flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-white hover:shadow-xl transition-all hover:-translate-y-0.5 group"
    >
      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
      <span className="hidden sm:inline">Back to Shyara Digital</span>
      <span className="sm:hidden">Back</span>
    </Link>
  )
}
