import "./App.css";
import hypnopompic from "./assets/AIAR-HYPNOPOMPIC.png";
const sidebarWidth = 24;

function App() {
  return (
    <>
      <div className="bg-black">
        <header className="bg-yellow-400">
          <h1 className={`ml-${sidebarWidth}`}>All In A Row</h1>

          <nav
            className={`fixed left-0 top-0 h-screen w-${sidebarWidth} bg-gray-950 text-white shadow-lg`}
          >
            <ul className=" flex flex-col ">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#music">Music</a>
              </li>
              <li>
                <a href="#shows">Shows</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        <main className={`ml-${sidebarWidth}`}>
          {/* Some sort of hero/banner */}
          <section className="bg-green-400">
            <figure className="py container mx-auto mb-8 bg-green-400 px-4">
              <img
                src={hypnopompic}
                alt="Album art for the single Hypnopompic."
                className="mx-auto h-auto w-full max-w-3xl"
              ></img>
              <figcaption>
                The debut single Hypnopompic is available everywhere now. Stream
                or purchase it here. ADD LINKZ.
              </figcaption>
            </figure>
          </section>

          {/* Releases */}
          {/* <div className="bg-blue-400">
        <figure>
          <figcaption>The debut release</figcaption>
        </figure>
      </div> */}

          {/* Shows */}
          {/* <div>
        <p>Shows</p>
      </div> */}

          {/* Contact */}
          <div className="bg-green-400">
            <p>Contact</p>
          </div>
        </main>

        {/* footer */}
        <footer className={`ml-${sidebarWidth} bg-red-300`}>
          <ul>
            <li>
              <i>Spotify</i>
            </li>
            <li>
              <i>Youtube</i>
            </li>
            <li>
              <i>Apply Music</i>
            </li>
            <li>
              <i>Other streaming nonsense</i>
            </li>
            <li>
              <i>How many of these even are there?</i>
            </li>
            <li>
              <i>Deezer?</i>
            </li>
          </ul>
          <p>
            &copy; {new Date().getFullYear()} All In A Row. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
