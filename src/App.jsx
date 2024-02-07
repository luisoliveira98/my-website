import "./App.css";
import foto from "./foto-perfil.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";

function App() {
  return (
    <div class="font-mono container relative mx-auto scroll-my-12 p-4 md:p-16 text-gray-600 flex flex-col h-screen justify-between">
      <main class="mx-auto w-full max-w-2xl space-y-8">
        {/* Header with personal information */}
        <div class="flex justify-between">
          <div>
            <h1 class="text-gray-800 text-xl md:text-3xl font-bold">
              Luís Oliveira
            </h1>
            <h2 class="text-md md:text-xl">
              Software Engineer @ Critical Software
            </h2>
            <span class="text-md md:text-xl">
              <FontAwesomeIcon icon={faLocationDot} /> Coimbra, Portugal
            </span>
          </div>
          <div class="rounded-lg overflow-hidden">
            <img class="object-cover h-36 w-36" src={foto} alt="" />
          </div>
        </div>
        {/* Work experience */}
        <div class="pt-6">
          <div class="mb-4 border-b border-gray-300">
            <span class="text-gray-800 text-xl md:text-3xl font-bold">
              Profissional Experience
            </span>
          </div>
          <div>
            <div class="flex justify-between">
              <span class="text-md md:text-xl font-bold">
                Software Engineer @ Critical Software
              </span>
              <span class="text-sm md:text-xl text-gray-400">2021-Present</span>
            </div>
            <div class="pt-4">
              <span class="text-md md:text-lg text-gray-400 text-justify">
                <ul>
                  <li>
                    Development of infotainment applications to cars.
                    Typescript-based applications, developed using NodeJS, with
                    interaction with several signals received from the car and
                    communication with backends via REST APIs.
                  </li>
                  <li>
                    Development of unit tests using JestJS and behavior
                    verification using integration tests written with Gherkin to
                    validate the behavior of the apps.
                  </li>
                  <li>
                    Start a new project from the beginning where I was an active
                    part of finding requirements and designing the architecture
                    of the app.
                  </li>
                </ul>
              </span>
            </div>
            <div class="text-md md:text-lg text-center flex flex-wrap pt-4">
              <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
                <span class="m-2">NodeJS</span>
              </div>
              <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
                <span class="m-2">TypeScript</span>
              </div>
              <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
                <span class="m-2">JestJS</span>
              </div>
              <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
                <span class="m-2">Gherkin</span>
              </div>
              <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
                <span class="m-2">Jenkins</span>
              </div>
            </div>
          </div>
        </div>
        {/* Educational information */}
        <div class="pt-6">
          <div class="mb-4 border-b border-gray-300">
            <span class="text-gray-800 text-xl md:text-3xl font-bold">
              Education
            </span>
          </div>
          <div>
            <div class="flex justify-between">
              <span class="text-md md:text-xl font-bold">
                Master in Software Engineering
              </span>
              <span class="text-md md:text-xl text-gray-400">2019-2021</span>
            </div>
            <div>
              <span class="text-md md:text-lg text-gray-400">
                University of Aveiro
              </span>
            </div>
          </div>
          <div>
            <div class="flex justify-between">
              <span class="text-md md:text-xl font-bold">
                Bachelor in Software Engineering
              </span>
              <span class="text-md md:text-xl text-gray-400">2016-2020</span>
            </div>
            <div>
              <span class="text-md md:text-lg text-gray-400">
                University of Aveiro
              </span>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div class="pt-6">
          <div class="mb-4 border-b border-gray-300">
            <span class="text-gray-800 text-xl md:text-3xl font-bold">
              Skills
            </span>
          </div>
          <div class="text-md md:text-lg text-center flex flex-wrap">
            <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
              <span class="m-2">NodeJS</span>
            </div>
            <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
              <span class="m-2">TypeScript</span>
            </div>
            <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
              <span class="m-2">JestJS</span>
            </div>
            <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
              <span class="m-2">React</span>
            </div>
            <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
              <span class="m-2">Python</span>
            </div>
            <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
              <span class="m-2">Django</span>
            </div>
            <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
              <span class="m-2">SQL</span>
            </div>
            <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
              <span class="m-2">Docker</span>
            </div>
            <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
              <span class="m-2">Gherkin</span>
            </div>
            <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
              <span class="m-2">Jenkins</span>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div class="pt-6">
          <div class="mb-4 border-b border-gray-300">
            <span class="text-gray-800 text-xl md:text-3xl font-bold">
              Projects
            </span>
          </div>
          <div class="flex justify-between">
            <span class="text-md md:text-xl font-bold">
              Air Quality monitoring platform
            </span>
            <span class="text-gray-400">2020-2021</span>
          </div>
          <div class="text-md md:text-lg pt-4">
            <div class="text-gray-400 text-justify">
              Aggregation of data from several air pollutant sensors and provide
              a web application to present the data collected. Project done in
              collaboration of Environment Institute of University of Aveiro.
            </div>
            <div class="flex flex-wrap pt-4">
              <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
                <span class="m-2">Python</span>
              </div>
              <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
                <span class="m-2">Django</span>
              </div>
              <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
                <span class="m-2">PostgreSQL</span>
              </div>
              <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
                <span class="m-2">Docker</span>
              </div>
              <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
                <span class="m-2">Celery</span>
              </div>
              <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
                <span class="m-2">MQTT</span>
              </div>
              <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
                <span class="m-2">Grafana</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
