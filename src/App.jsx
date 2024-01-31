import "./App.css";
import foto from "./foto-perfil.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <main class="font-mono pl-64 pr-64 pt-16 pb-16 text-gray-600">
      {/* Header with personal information */}
      <div class="flex justify-between">
        <div>
          <h1 class="text-gray-800 text-3xl font-bold">Luís Oliveira</h1>
          <h2>Software Engineer @ Critical Software</h2>
          <span>
            <FontAwesomeIcon icon={faLocationDot} /> Coimbra, Portugal
          </span>
          <div>
            <a href="https://www.linkedin.com/in/luisoliveira98">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/luisoliveira98" class="m-2">
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
          </div>
        </div>
        <div class="rounded-lg overflow-hidden">
          <img class="object-cover h-36 w-36" src={foto} alt="" />
        </div>
      </div>
      {/* Work experience */}
      <div class="pt-6">
        <div class="mb-4 border-b border-gray-300">
          <span class="text-gray-800 text-3xl font-bold">
            Profissional Experience
          </span>
        </div>
        <div>
          <div class="flex justify-between">
            <span class="text-xl font-bold">
              Software Engineer @ Critical Software
            </span>
            <span class="text-gray-400">2021-Current</span>
          </div>
          <div>
            <span class="text-gray-400"></span>
          </div>
        </div>
      </div>
      {/* Educational information */}
      <div class="pt-6">
        <div class="mb-4 border-b border-gray-300">
          <span class="text-gray-800 text-3xl font-bold">Education</span>
        </div>
        <div>
          <div class="flex justify-between">
            <span class="text-xl font-bold">
              BTech in Informatics Engineering
            </span>
            <span class="text-gray-400">2016-2020</span>
          </div>
          <div>
            <span class="text-gray-400">University of Aveiro</span>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <span class="text-xl font-bold">
              MSc in Informatics Engineering
            </span>
            <span class="text-gray-400">2019-2021</span>
          </div>
          <div>
            <span class="text-gray-400">University of Aveiro</span>
          </div>
        </div>
      </div>
      <div class="pt-6">
        <div class="mb-4 border-b border-gray-300">
          <span class="text-gray-800 text-3xl font-bold">Projects</span>
        </div>
      </div>
      <div>
        <div class="mb-4 border-b border-gray-300">
          <span class="text-gray-800 text-3xl font-bold">Competences</span>
        </div>
      </div>
    </main>
  );
}

export default App;
