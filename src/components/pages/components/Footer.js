import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";


export default function Footer() {
    return (
        <footer >
            <ul className=" flex fixed bottom-3 left-0 right-0 mx-auto justify-center items-center">
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/kevin-umayam/"
                    >
                        <FaLinkedin className="icons" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/KevinUmayam"

                    >
                        <FaGithub className="icons ml-2.5 mr-1.5" />
                    </a>
                </li>
                <li >
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://stackoverflow.com/users/19267013/kevin-umayam"
                    >
                        <FaStackOverflow className="icons" />
                    </a>
                </li>
            </ul>
        </footer>
    );
}