import cv from "../resources/LuisCV.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer class="mx-auto w-full max-w-2xl space-y-8 pt-6">
      <div class="flex items-center justify-end">
        <span class="text-sm text-gray-800 text-center dark:text-gray-400">
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
        <div class="flex mt-0 justify-center text:lg md:text-2xl">
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
