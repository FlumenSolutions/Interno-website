import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin } from 'lucide-react'

interface CaseCardProps {
    client: string
    industry: string
    location: string
    challenge: string
    results: {
        metric: string
        value: string
    }[]
    slug: string
}

export function CaseCard({ client, industry, location, challenge, results, slug }: CaseCardProps) {
    return (
        <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="px-2 py-1 bg-secondary/50 rounded-md">{industry}</span>
                    <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {location}
                    </span>
                </div>
                <CardTitle className="text-h4">{client}</CardTitle>
                <CardDescription className="text-base line-clamp-3">{challenge}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {results.slice(0, 2).map((result, index) => (
                        <div key={index} className="text-center p-4 bg-accent/5 rounded-lg">
                            <div className="text-2xl font-bold text-accent mb-1">{result.value}</div>
                            <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </div>
                    ))}
                </div>
                <Button asChild variant="outline" className="w-full group">
                    <Link href={`/casos-exito/${slug}`}>
                        Ver caso completo
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
    )
}
