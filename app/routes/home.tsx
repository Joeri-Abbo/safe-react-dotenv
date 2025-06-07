import type { Route } from "./+types/home";
const secretKey = process.env.REACT_APP_SECRET_KEY;

if (!secretKey) {
  console.error("REACT_APP_SECRET_KEY is not defined in the .env file.");
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="App">
      <h1>Safe Environment Variable Demo</h1>
      <p>The secret is: {secretKey ? "Loaded Successfully" : "Not Found"}</p>
      <p>{secretKey}</p>
    </div>
  );
}
