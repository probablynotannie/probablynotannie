import { FaCode } from "react-icons/fa";

function Skills() {
  const anios_experiencia = new Date().getFullYear() - 2022;

  const herramientas = [
    {
      id: 0,
      texto: "React JS",
      svg: <img src="/skills/react.png" className="w-10" />,
    },
    {
      id: 1,
      texto: "Tailwind CSS",
      svg: (
        <img src="/skills/tailwind.png" className="w-10 h-8 object-contain" />
      ),
    },
    {
      id: 2,
      texto: "Tanstack Query",
      svg: <img src="/skills/tanstack.png" className="w-10" />,
    },
    {
      id: 3,
      texto: "React Router",
      svg: <img src="/skills/reactRouter.svg" className="w-10" />,
    },
    {
      id: 6,
      texto: "JavaScript",
      svg: (
        <span className="text-4xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <g fill="none">
              <rect width="256" height="256" fill="#F0DB4F" rx="60" />
              <path
                fill="#323330"
                d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"
              />
            </g>
          </svg>
        </span>
      ),
    },

    {
      id: 8,
      texto: "Bootstrap",
      svg: <img src="/skills/bootstrap.png" className="w-10" />,
    },

    {
      id: 9,
      texto: "Laravel",
      svg: (
        <span className="text-4xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <g fill="none">
              <rect width="256" height="256" fill="#242938" rx="60" />
              <path
                fill="#FF2D20"
                fillRule="evenodd"
                d="M215.846 78.314q.097.366.098.747v39.199c0 .503-.131.997-.379 1.432a2.84 2.84 0 0 1-1.037 1.047l-32.446 18.942v37.545a2.87 2.87 0 0 1-1.409 2.48l-67.728 39.535c-.155.089-.324.146-.493.207c-.064.022-.123.061-.19.079a2.8 2.8 0 0 1-1.445 0c-.077-.022-.148-.065-.222-.093c-.155-.057-.317-.107-.465-.193l-67.714-39.535a2.85 2.85 0 0 1-1.036-1.047a2.9 2.9 0 0 1-.38-1.433V59.629q.002-.387.099-.75c.02-.083.07-.158.098-.24c.053-.15.102-.303.18-.443c.053-.093.13-.168.194-.253c.08-.115.155-.233.25-.333c.08-.082.187-.143.278-.214c.102-.086.194-.179.31-.247h.004L76.27 37.382a2.8 2.8 0 0 1 2.819 0l33.859 19.767h.007c.112.072.208.161.31.243c.091.072.193.136.274.215c.099.103.17.221.254.336c.06.085.141.16.19.253c.081.143.127.293.184.443c.028.082.077.157.098.243q.097.367.099.747v73.45l28.214-16.473v-37.55c0-.25.035-.503.099-.742c.025-.086.07-.161.099-.243c.056-.15.105-.304.183-.443c.053-.093.13-.168.19-.254c.085-.114.155-.232.254-.332c.081-.082.183-.143.275-.215c.105-.085.197-.178.31-.246h.004l33.862-19.768a2.79 2.79 0 0 1 2.818 0l33.859 19.768c.12.072.211.16.317.243c.088.071.19.136.271.214c.099.104.169.222.254.336c.063.086.141.16.19.254c.081.14.127.293.183.443c.032.082.078.157.099.243m-5.546 38.292V84.009l-11.849 6.916l-16.369 9.557v32.597l28.221-16.473zm-33.859 58.966v-32.618l-16.101 9.325l-45.979 26.609v32.925zM46.644 64.577v110.995l62.073 36.238v-32.919l-32.428-18.61l-.01-.007l-.015-.007c-.109-.064-.2-.157-.303-.236c-.088-.071-.19-.128-.267-.207l-.007-.01c-.092-.09-.156-.2-.233-.301c-.07-.096-.155-.178-.211-.278l-.004-.011c-.064-.107-.103-.236-.148-.357c-.046-.107-.106-.207-.134-.322v-.004c-.035-.135-.042-.278-.057-.418c-.014-.107-.042-.214-.042-.321V81.051L58.493 71.49l-11.849-6.91zm31.04-21.415L49.474 59.63l28.203 16.466l28.207-16.47l-28.207-16.463zm14.671 102.764l16.366-9.553V64.577l-11.85 6.917l-16.368 9.556v71.797zm86.909-83.332l-28.208 16.467l28.208 16.466l28.203-16.47zm-2.823 37.888l-16.369-9.557l-11.848-6.916v32.597l16.365 9.553l11.852 6.92zm-64.905 73.458l41.373-23.952l20.682-11.968l-28.186-16.456l-32.453 18.946l-29.578 17.267z"
                clipRule="evenodd"
              />
            </g>
          </svg>
        </span>
      ),
    },
    {
      id: 10,
      texto: "Git",
      svg: (
        <span className="text-4xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <g fill="none">
              <rect width="256" height="256" fill="#F03C2E" rx="60" />
              <g clipPath="url(#skillIconsGit0)">
                <path
                  fill="#fff"
                  d="m224.225 119.094l-87.319-87.319a12.87 12.87 0 0 0-14.035-2.793a12.9 12.9 0 0 0-4.177 2.793L100.569 49.9l23 23c5.35-1.875 11.475-.594 15.737 3.669a15.31 15.31 0 0 1 3.631 15.831l22.169 22.169c5.363-1.85 11.55-.657 15.831 3.637a15.32 15.32 0 0 1 3.321 16.706a15.333 15.333 0 0 1-20.029 8.293c-1.86-.771-3.55-1.9-4.973-3.324c-4.5-4.5-5.612-11.125-3.337-16.669l-20.675-20.675v54.407a15.6 15.6 0 0 1 4.062 2.9a15.326 15.326 0 0 1-21.675 21.675a15.32 15.32 0 0 1-3.326-16.704a15.3 15.3 0 0 1 3.326-4.971c1.481-1.475 3.125-2.594 5.019-3.344v-54.913a15.2 15.2 0 0 1-5.019-3.343a15.315 15.315 0 0 1-3.3-16.757L91.644 58.814l-59.875 59.812a12.88 12.88 0 0 0-2.795 14.04a12.9 12.9 0 0 0 2.795 4.179l87.325 87.312a12.9 12.9 0 0 0 4.177 2.793a12.9 12.9 0 0 0 9.858 0a12.9 12.9 0 0 0 4.177-2.793l86.919-86.781a12.88 12.88 0 0 0 3.776-9.109a12.88 12.88 0 0 0-3.776-9.11"
                />
              </g>
              <defs>
                <clipPath id="skillIconsGit0">
                  <path fill="#fff" d="M28 28h200v200H28z" />
                </clipPath>
              </defs>
            </g>
          </svg>
        </span>
      ),
    },
    {
      id: 11,
      texto: "PHP",
      svg: <img src="/skills/php.png" className="w-10" />,
    },
    {
      id: 12,
      texto: "Wordpress",
      svg: <img src="/skills/wordpress.webp" className="w-10" />,
    },
    {
      id: 13,
      texto: "Zustand",
      svg: <img src="/skills/zustand.png" className="w-10" />,
    },
    {
      id: 14,
      texto: "React Hook Forms",
      svg: <img src="/skills/reactHook.svg" className="w-10" />,
    },
  ];

  return (
    <section className="min-h-screen w-full md:px-8  text-white bg-primary flex items-center justify-around mt-10 ">
      <div className="flex container flex-col md:flex-row items-center md:items-start gap-16 w-full">
        <div className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0">
          <div className="text-white p-6 pl-10 pr-20 sm:pl-10 lg:pr-20">
            <div className="absolute -left-4 sm:left-16 top-20 sm:top-24 md:-left-12 xl:-left-16 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
              <div className="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-white mt-2 mx-auto"></div>
              <p>Skills</p>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold leading-tight">
              Algunas de las herramientas que uso
            </h2>
          </div>
          <p className="p-3 text-gray-400 text-sm leading-relaxed text-justify">
            Con {anios_experiencia} años de experiencia en desarrollo front-end,
            cada día descubriendo nuevas tecnologias que usar y mejorar.
            <br></br> Estoy en busca de nuevos retos donde pueda aportar lo que
            sé y aprender aún más en el camino.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {herramientas.map((herramienta) => (
              <div
                key={herramienta.id}
                className="text-center flex flex-col justify-end"
              >
                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                  {herramienta.svg}
                  <h3 className="text-xs mt-2">{herramienta.texto}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
