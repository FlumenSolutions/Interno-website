import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQ } from '@/data/faqs'

interface FAQAccordionProps {
    faqs: FAQ[]
    title?: string
}

export function FAQAccordion({ faqs, title = 'Preguntas Frecuentes' }: FAQAccordionProps) {
    return (
        <div>
            {title && <h2 className="text-h2 mb-8 text-center">{title}</h2>}
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left text-lg">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
