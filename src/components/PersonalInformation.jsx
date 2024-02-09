import foto from "../resources/foto-perfil.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function PersonalInformation() {
  return (
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
  );
}

export default PersonalInformation;
