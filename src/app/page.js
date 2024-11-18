import { Accordion, AccordionItem } from './components/Accordion';

export default function Page() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Mon Accordion Accessible</h1>
      <Accordion>
        <AccordionItem>
          <h2>Section 1</h2>
          <p>Contenu de la section 1. Cette section peut contenir du texte, des images, ou d'autres composants.</p>
        </AccordionItem>
        <AccordionItem>
          <h2>Section 2</h2>
          <p>Contenu de la section 2. Cette section est cachée lorsque l'autre est ouverte.</p>
        </AccordionItem>
        <AccordionItem>
          <h2>Section 3</h2>
          <p>Contenu de la section 3. Chaque section a son propre contenu visible lorsqu'elle est ouverte.</p>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
