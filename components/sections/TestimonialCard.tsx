import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'

interface TestimonialCardProps {
    quote: string
    author: string
    position: string
    company?: string
}

export function TestimonialCard({ quote, author, position, company }: TestimonialCardProps) {
    return (
        <Card className="h-full">
            <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-accent/20 mb-4" />
                <p className="text-body mb-6 italic">&ldquo;{quote}&rdquo;</p>
                <div>
                    <p className="font-semibold text-foreground">{author}</p>
                    <p className="text-sm text-muted-foreground">
                        {position}
                        {company && ` • ${company}`}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}
