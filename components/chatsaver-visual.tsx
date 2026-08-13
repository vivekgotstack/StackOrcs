import Image from "next/image";
import { CloudCheck, MagnifyingGlass, WifiSlash } from "@phosphor-icons/react/dist/ssr";

export function ChatSaverVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={"chatsaver-visual " + (compact ? "chatsaver-visual--compact" : "") }>
      <div className="chatsaver-visual__texture" aria-hidden="true" />
      <div className="chatsaver-window">
        <div className="chatsaver-window__bar">
          <span>
            <i />
            <i />
            <i />
          </span>
          <strong>ChatSaver</strong>
          <small>
            <WifiSlash aria-hidden="true" /> Offline ready
          </small>
        </div>
        <div className="chatsaver-window__body">
          <aside>
            <div className="chatsaver-window__brand">
              <Image
                src="/work/chatsaver-mark.png"
                alt=""
                width={42}
                height={42}
                sizes="42px"
              />
              <span>My vault</span>
            </div>
            <nav aria-label="ChatSaver workspace preview">
              <span className="is-current">All notes <b>24</b></span>
              <span>Favorites <b>06</b></span>
              <span>Imports <b>03</b></span>
            </nav>
            <small>
              <CloudCheck aria-hidden="true" /> Changes backed up
            </small>
          </aside>
          <div className="chatsaver-window__content">
            <div className="chatsaver-window__search">
              <MagnifyingGlass aria-hidden="true" />
              Search your saved knowledge
            </div>
            <div className="chatsaver-window__note-head">
              <div>
                <small>Imported from ChatGPT</small>
                <h3>System architecture notes</h3>
              </div>
              <span>Favorite</span>
            </div>
            <div className="chatsaver-window__blocks">
              <article>
                <small>Question 01</small>
                <strong>How should offline edits be synchronized?</strong>
                <p>Queue local mutations, push idempotently, then apply cursor-based deltas.</p>
              </article>
              <article>
                <small>Question 02</small>
                <strong>What remains available without a connection?</strong>
                <p>Importing, editing, search, export, and the complete local note library.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
