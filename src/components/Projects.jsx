const skills = [
  "Python",
  "Django",
  "PostgreSQL",
  "Docker",
  "Celery",
  "MQTT",
  "Grafana",
];

function Projects() {
  return (
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
          Aggregation of data from several air pollutant sensors and provide a
          web application to present the data collected. Project done in
          collaboration of Environment Institute of University of Aveiro.
        </div>
        <div class="flex flex-wrap pt-4">
          {skills.map((skill) => {
            return (
              <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
                <span class="m-2">{skill}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
