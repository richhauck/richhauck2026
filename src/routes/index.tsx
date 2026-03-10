import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="box">
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, saepe
        nesciunt enim eaque veritatis in deserunt neque! Perspiciatis
        perferendis obcaecati sit culpa cumque dolorem quisquam cum, tempora
        quibusdam, minus aperiam!
      </p>
    </div>
  );
}
