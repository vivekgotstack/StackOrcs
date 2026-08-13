import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <div className="not-found__orbit" aria-hidden="true">
        <span>404</span>
      </div>
      <div>
        <p className="kicker kicker--light">Signal not found</p>
        <h1>This route left the stack.</h1>
        <p>
          The page may have moved, or the address may be incomplete. The main
          system is still online.
        </p>
        <Link className="button-link button-link--light" href="/">
          Return home <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}
