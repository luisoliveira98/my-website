function Skills() {
  const skills = [
    "NodeJS",
    "TypeScript",
    "JestJS",
    "React",
    "Python",
    "Rest API",
    "Django",
    "SQL",
    "Docker",
    "Gherkin",
    "Jenkins",
  ];

  return (
    <div class="pt-6">
      <div class="mb-4 border-b border-gray-300">
        <span class="text-gray-800 text-xl md:text-3xl font-bold">Skills</span>
      </div>
      <div class="text-md md:text-lg text-center flex flex-wrap">
        {skills.map((skill) => {
          return (
            <div class="mb-2 mr-2 rounded-lg border border-gray-300 bg-gray-100">
              <span class="m-2">{skill}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
