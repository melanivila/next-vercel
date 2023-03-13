import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function Pricing() {
  return (
    <MainLayout>
      <h1>Pricing page</h1>
      <h2 className={"title"}>
        Ir a <Link href="/">Home</Link>
        {/* Ir a <a href="/">Home</a> */}
      </h2>
      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/pricing.js</code>
      </p>
    </MainLayout>
  );
}
