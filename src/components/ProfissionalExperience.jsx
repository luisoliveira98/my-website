const skills = ["NodeJS", "TypeScript", "JestJS", "Gherkin", "Jenkins"];

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
          {skills.map((skills) => {
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
