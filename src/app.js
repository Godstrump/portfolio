const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      showContact: false,
      projects: [
        {
          name: "Typing Test",
          image: "./assets/images/typing.png",
          tech: "NextJS | MaterialUI | Jest",
          link: "https://typing-test-gules.vercel.app/",
        },
        {
          name: "Krown Klothing",
          image: "./assets/images/krown.png",
          tech: "React | Firebase | GraphQL | Redux | Stripe",
          link: "https://krown-clthing-live.herokuapp.com/",
        },
        {
          name: "Currency exchange",
          image: "./assets/images/exchange.png",
          tech: "React | Redux | C# | MUI",
          link: "https://pensive-ritchie-0a5521.netlify.app/",
        },
        {
          name: "Currency exchange",
          image: "./assets/images/exchange.png",
          tech: "React | Redux | C# | MUI",
          link: "https://pensive-ritchie-0a5521.netlify.app/",
        },
      ],
    };
  },
  methods: {
    openNav() {
      const hamburger = document.querySelector(".hamburger");
      const menu = document.querySelector(".nav__menu");

      hamburger.classList.toggle("close");
      menu.classList.toggle("show");
    },
    pageNav() {
      // console.log('hell')
      const hamburger = document.querySelector(".hamburger");
      const menu = document.querySelector(".nav__menu");

      menu.classList.remove("show");
      hamburger.classList.remove("close");
    },
    handleScroll() {
      const sections = document.querySelectorAll("section");
      const navLi = document.querySelectorAll("ul li a");

      var current = "intro";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("link-active");
        if (li.classList.contains(current)) {
          li.classList.add("link-active");
        }
      });
    },
  },
});

app.component("sidenav", {
  props: ["show"],
  template: `
    <ul @click="show" class="nav__list">
      <li class="nav__item">
        <a href="#home" class="nav__link intro link-active">home</a>
      </li>
      <li class="nav__item">
        <a href="#projects" class="nav__link projects">projects</a>
      </li>
      <li class="nav__item">
        <a href="#skills" class="nav__link skills">skills</a>
      </li>
      <li class="nav__item">
        <a href="#about" class="nav__link about">about</a>
      </li>
      <li class="nav__item">
        <a href="#contact" class="nav__link contact">contact</a>
      </li>
      <li class="nav__item social__links">
        <a class='contact' href="https://linkedin.com/in/Godstrump" target="_blank">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a class='contact' href="https://github.com/Godstrump" target="_blank">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </li>
    </ul>
    `,
});

app.component("projectcard", {
  props: ["projectname", "image", "tech", "projectlink", "githublink"],
  template: `
    <article class="project">
      <div class="project_header">
        <p class="project__title">{{ projectname }}</p>
      </div>
      <div class="project__image">
        <img
          :src="image"
          alt="vegan restaurant app design"
        />
      </div>
      <div class="project__links">
        <a :href="projectlink" target="_blank" class="app__link">
          <ion-icon name="open-outline"></ion-icon>
        </a>
        <a :href="githublink" target="_blank" class="github__link">
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <span class="project_tech colored"
          >{{ tech }}
        </span>
      </div>
    </article>
    `,
});

app.directive("scroll", (el, binding) => {
  let f = function (evt) {
    if (binding.value(evt, el)) {
      window.removeEventListener("scroll", f);
    }
  };
  window.addEventListener("scroll", f);
});

app.mount("#app");
