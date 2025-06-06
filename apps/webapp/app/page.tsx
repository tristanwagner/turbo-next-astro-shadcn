import { Button } from "@repo/ui/components/button";
import { ModeToggle } from "@repo/ui/components/ModeToggle";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Shadcn button in Nextjs!</Button>
      <ModeToggle />
    </main>
  );
}
