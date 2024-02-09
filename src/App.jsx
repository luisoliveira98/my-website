import "./App.css";
import PersonalInformation from "./components/PersonalInformation";
import ProfissionalExperience from "./components/ProfissionalExperience";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div class="font-mono container relative mx-auto scroll-my-12 p-4 md:p-16 text-gray-600 flex flex-col h-screen justify-between">
      <main class="mx-auto w-full max-w-2xl space-y-8">
        {/* Header with personal information */}
        <PersonalInformation></PersonalInformation>
        {/* Work experience */}
        <ProfissionalExperience></ProfissionalExperience>
        {/* Educational information */}
        <Education></Education>
        {/* Skills */}
        <Skills></Skills>
        {/* Projects */}
        <Projects></Projects>
      </main>
      <Footer />
    </div>
  );
}

export default App;
