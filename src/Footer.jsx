import cv from "./LuisCV.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer class="pt-6">
      <div class="sm:flex sm:items-center sm:justify-end">
        <span class="text-sm text-gray-800 sm:text-center dark:text-gray-400">
          <a
            href={cv}
            download="Luis-Oliveira-CV"
            target="_blank"
            rel="noreferrer"
            class="hover:underline"
          >
            Get my CV
          </a>
        </span>
        <div class="flex mt-4 sm:justify-center sm:mt-0 text-2xl">
          <a href="https://www.linkedin.com/in/luisoliveira98" class="pl-4">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/luisoliveira98" class="pl-4">
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>
          <a href="mailto:luispaisalves2012@gmail.com" class="pl-4">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
