import { Input } from "@/kui/Input";
import { Search, Eye } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center gap-6 p-10">
      <Input placeholder="Default input" className="w-80" />

      <Input
        label="Email"
        hint="We'll never share your email."
        placeholder="you@example.com"
        className="w-80"
      />

      <Input
        label="Search"
        placeholder="Search components..."
        leftIcon={<Search size={14} />}
        className="w-80"
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        rightIcon={<Eye size={14} />}
        className="w-80"
      />

      <Input
        label="Username"
        placeholder="Enter username"
        error="Username is already taken."
        className="w-80"
      />

      <Input
        variant="success"
        label="Email"
        placeholder="you@example.com"
        className="w-80"
      />

      <Input placeholder="Disabled input" disabled className="w-80" />
    </main>
  );
}
