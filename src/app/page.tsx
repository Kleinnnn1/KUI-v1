import { Button } from "@/kui/Button";
import { Badge } from "@/kui/Badge";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center gap-4">
      <Button variant="solid">Solid</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="muted">Muted</Button>

      <Badge variant="default">Default</Badge>
      <Badge variant="solid">Solid</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="muted">Muted</Badge>
    </main>
  );
}
