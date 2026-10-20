import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">

        </div>
        <div>
          <h1>BTWstation</h1>
          <p>
            <code> modern advanced knowledge </code> 
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <ul>
          <li>
            <a href="https://vite.dev/" target="_blank">
             <img className="logo"  alt="" />
                rename
            </a>
          </li>
          <li>
            <a href="https://react.dev/" target="_blank">
              <img className="button-icon"  alt="" />
                rename
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Social</h2>
          <p>My links</p>
          <ul>
            <li>
              <a href="https://github.com/Piubtw" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/user/315mrcsi2woz5crdhmtlhl33i4gu" target="_blank">
              <svg
                 className="button-icon"
                 width="24"
                 height="24"
                 viewBox="0 0 16 16"
                 aria-hidden="true"
              >
               <use href="/icons.svg#spotify-icon" />
              </svg>
                Spotify
              </a>
            </li>
            <li>
              <a href="https://last.fm/user/piubtw" target="_blank">
                <svg width="24" height="24" role="img" aria-label="Last.fm"
                >
                  <use href="/icons.svg#lastfm-icon" />
                </svg>
                Last.fm
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
