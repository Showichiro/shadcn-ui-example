import { Button } from "@/components/Button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test")({
  component: Test,
});

function Test() {
  return (
    <div>
      Hello /test!
      <div>
        <Button onPress={() => alert("Test")}>Button</Button>
      </div>
    </div>
  );
}
