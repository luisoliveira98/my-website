const skills_nodejs = [
  "NodeJS",
  "TypeScript",
  "JestJS",
  "RxJS",
  "Gherkin",
  "Jenkins",
];
const skills_android = ["Android", "Kotlin", "C++", "BDD", "AIDL"];

function ProfissionalExperience() {
  return (
    <div class="pt-6">
      <div class="mb-4 border-b border-gray-300">
        <span class="text-gray-800 text-xl md:text-3xl font-bold">
          Profissional Experience
        </span>
      </div>
      <div>
        <div class="flex justify-between">
          <span class="text-md md:text-xl font-bold">
            Android Platform Software Engineer
          </span>
          <span class="text-sm md:text-xl text-gray-400">2024-Present</span>
        </div>
        <div class="flex justify-between">
          <span class="text-md md:text-lg font-bold text-gray-400">
            @ Critical Software
          </span>
        </div>
        <div class="pt-4">
          <span class="text-md md:text-lg text-gray-400 text-justify">
            <ul>
              <li>
                Designed and developed key components of the car audio system,
                focusing on optimising the Hardware Abstraction Layer (HAL) in
                C++ for seamless hardware integration. I also built Android
                Services in Kotlin to provide audio control and volume
                management APIs, ensuring a smooth interface between hardware
                functionality and user-facing applications. These contributions
                were pivotal in enhancing automotive infotainment systems'
                functionality and user experience.
              </li>
            </ul>
          </span>
        </div>
        <div class="text-md md:text-lg text-center flex flex-wrap pt-4">
          {skills_android.map((skills) => {
            return (
              <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
                <span class="m-2">{skills}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div class="mt-4">
        <div class="flex justify-between">
          <span class="text-md md:text-xl font-bold">
            NodeJS Software Engineer
          </span>
          <span class="text-sm md:text-xl text-gray-400">2021-2024</span>
        </div>
        <div class="flex justify-between">
          <span class="text-md md:text-lg font-bold text-gray-400">
            @ Critical Software
          </span>
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
                Development of unit tests using JestJS and behavior verification
                using integration tests written with Gherkin to validate the
                behavior of the apps.
              </li>
              <li>
                Start a new project from the beginning where I was an active
                part of finding requirements and designing the architecture of
                the app.
              </li>
            </ul>
          </span>
        </div>
        <div class="text-md md:text-lg text-center flex flex-wrap pt-4">
          {skills_nodejs.map((skills) => {
            return (
              <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
                <span class="m-2">{skills}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProfissionalExperience;
