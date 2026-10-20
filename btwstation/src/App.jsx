import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react';
 
export default function App() {
  return (
    <div>
      {/* ... */}
      <Analytics />
    </div>
  );
}
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="btw-icon">
           <svg
        className="bi-btw"
        viewBox="0 0 40 16"
        aria-hidden="true"
        >
         <use href="/icons.svg#btw-icon" />
        </svg>
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
          petted penguins: {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="knowledge">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Knowledge</h2>
          <code><p> Knowledge that should be available to everyone. </p> </code>
          <ul>
          <li>
            <a href="" target="_blank">
             <img className="logo"  alt="" />
                rename
            </a>
          </li>
          <li>
            <a href="" target="_blank">
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
          <code> <p>My other links. </p> </code>
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
              <a href="https://x.com/piubtw/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com

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

      <div className="gifs"></div>
      
      <div>
        <section id="spacer"></section>
        <img className="img" src="https://cyber.dabamos.de/88x31/anarchy1.gif" alt="Anarchy" />
        <img className="img" src="https://cyber.dabamos.de/88x31/alienow.gif" alt="Alien" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/anarchy-now.gif" alt="Anarchy Now" />
        <img className="img" src="https://cyber.dabamos.de/88x31/antinazi.gif" alt="Antinazi" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/besteyes3.gif" alt="Best Eyes" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/insanity.gif" alt="Insanity" />
        <img className="img" src="https://cyber.dabamos.de/88x31/blink-0.gif" alt="Blink" />
        <img className="img" src="https://cyber.dabamos.de/88x31/archlinux.gif" alt="Arch Linux" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/ie-pengsoft.gif" alt="IE Pengsoft" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/notepad4.gif" alt="Notepad" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/debian2.gif" alt="Debian" />
        <img className="img" src="https://cyber.dabamos.de/88x31/bloodcovered.gif" alt="Blood Covered" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/dbfire88.gif" alt="DB Fire" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/demon.gif" alt="Demon" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/evangelion.gif" alt="Evangelion" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/false.gif " alt="False" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/freestuffcentral.gif" alt="Free Stuff Central" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/geocities_area_51.gif" alt="Geocities Area 51" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/github-check.gif" alt="GitHub Check" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/gif_necro.gif" alt="GIF Necro" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/logo_5.gif" alt="Logo 5" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/hpvc-now.gif" alt="HPVC Now" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/psbutton.gif" alt="PS Button" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/gnu-linux.gif" alt="GNU Linux" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/miku.gif" alt="Miku" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/gticon.gif" alt="GT Icon" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/newgrounds.gif" alt="Newgrounds" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/halloweenradio.gif" alt="Halloween Radio" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/legalize_now.gif" alt="Legalize Now" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/hackerpowered.gif" alt="Hacker Powered" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/hatsunemiku1.gif" alt="Hatsune Miku" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/halloween1.gif" alt="Halloween" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/pothead.gif" alt="Pothead" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/ieisevil.gif" alt="IE is Evil" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/ilovehorror.gif" alt="I Love Horror" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/internetarchive.gif" alt="Internet Archive" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/nvbtn3.gif" alt="NV Button" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/linux-directory.gif" alt="Linux Directory" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/reshirii.gif" alt="Reshirii" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/anythingbut.gif" alt="Anything But Chrome" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/github.gif" alt="GitHub" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/38caution.gif" alt="38 Caution" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/piracy.gif" alt="Piracy" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/ostan.gif" alt="Ostan" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/devils.gif" alt="Devils" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/homernow.gif" alt="Homer Now" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/dbani.gif" alt="DB Ani" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/dnfbtn.gif" alt="DNF Button" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/kawaiibutton.gif" alt="Kawaii Button" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/kmfms-n.gif" alt="KMFMS N" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/sm_fever_button.gif" alt="Sailor Moon" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/vampireunlimited.gif" alt="Vampire Unlimited" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/mangamaisanime.gif" alt="Manga Anime" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/raa.gif" alt="RAA" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/devils_button.gif" alt="Devils cats" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/ralseismokingadart.gif" alt="Ralsei Smoking a Dart" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/spotify.gif" alt="Spotify" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/tohell.gif" alt="To Hell" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/steam.gif" alt="Steam" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/sandy.gif" alt="Sandy" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/vipper.gif" alt="Vipper" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/trashparadise.gif" alt="Trash Paradise" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/volta.gif" alt="Volta" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/yumenikki.gif" alt="Yume Nikki" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/zanarkand.gif" alt="Zanarkand" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/nvidia.gif" alt="NVIDIA" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/z3r0s.gif" alt="Z3R0S" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/nofuckingthanks.gif" alt="No Fucking Thanks" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/beyes.gif" alt="B Eyes" />
        <img classname="img" src="https://cyber.dabamos.de/88x31/no.gif" alt="No" />
       </div>
      <div className="end">qua 
        <h5> © 2026 BTW. All rights reserved. </h5>
        
      </div>

    </>
      
  )
}


export default App
