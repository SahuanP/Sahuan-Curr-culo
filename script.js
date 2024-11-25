const translations = {
  pt: {
    role: "Desenvolvedor Front-End",
    phone: "Telefone",
    adress: "Endereço",
    description1:
      "Sou um Desenvolvedor Front-End e tenho experiência em criação de aplicações e sites responsivos na WEB.",
    description2:
      "Na área de Front-End tenho conhecimento em HTML, CSS, JavaScript, Git e GitHub. Estou constantemente desenvolvendo projetos pessoais para expandir meu conhecimento nas áreas que já conheco e praticar boas práticas de programação e pontos importantes como responsividade e eficiência/performance no código. Atualmente estou estudando o framework Vue.JS em busca de conseguir uma vaga de estágio e posteriormente me tornar um programador profissional.",
    description3:
      "Atualmente curso Sistemas de Informação, venho migrado do curso de Ciência da Computação, onde cursei metade da formação e resolvi trocar por me identificar mais com as oportunidades e tecnologias ensinadas em Sistemas de Informação, além da ampla gama de possibilidade de carreira.",
  },

  en: {
    role: "Front-End Developer",
    phone: "Phone",
    adress: "Adress",
    description1:
      "I'm a Front-End Developer and have experience in creating applications and responsive websites on the WEB.",
    description2:
      "In the Front-End area, I have knowledge in HTML, CSS, JavaScript, Git and GitHub. I am constantly developing personal projects to expand my knowledge in the areas I already know and practice good programming practices and important points such as responsiveness and code efficiency/performance. I'm currently studying the Vue.JS framework in search of getting an internship and later becoming a professional programmer.",
    description3:
      "Currently studying Information Systems, I have migrated from the Computer Science course, where I completed half of the training and decided to change because I identify more with the opportunities and technologies taught in Information Systems, in addition to the wide range of career possibilities.",
  },

  es: {
    role: "Desarrollador front-end",
    phone: "Teléfono",
    adress: "DIRECCIÓN",
    description1:
      "Soy Desarrollador Front-End y tengo experiencia en la creación de aplicaciones y sitios web responsivos en la WEB.",
    description2:
      "En el área de Front-End tengo conocimientos en HTML, CSS, JavaScript, Git y GitHub. Constantemente estoy desarrollando proyectos personales para ampliar mis conocimientos en las áreas que ya conozco y practico buenas prácticas de programación y puntos importantes como la capacidad de respuesta y la eficiencia/rendimiento del código. Actualmente estoy estudiando el framework Vue.JS en busca de realizar una pasantía y posteriormente convertirme en programador profesional.",
    description3:
      "Actualmente estudiando Sistemas de Información, he migrado de la carrera de Informática, donde cumplí la mitad de la formación y decidí cambiar porque me identifico más con las oportunidades y tecnologías que se imparten en Sistemas de Información, además de la amplia gama de posibilidades profesionales.",
  },
};

let currentLanguage = "pt";

document
  .getElementById("pt")
  .addEventListener("click", () => switchLanguage("pt"));
document
  .getElementById("en")
  .addEventListener("click", () => switchLanguage("en"));
document
  .getElementById("es")
  .addEventListener("click", () => switchLanguage("es"));

function switchLanguage(lang) {
  currentLanguage = lang;
  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    element.textContent = translations[currentLanguage][key];
  });
}
