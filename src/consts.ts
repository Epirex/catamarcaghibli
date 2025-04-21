export const ROUTES = [
  { label: "Art", href: "/art" },
  { label: "About", href: "/about" },
] as const;

// Icons from https://icon-sets.iconify.design
export const SOCIAL = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/estebanguzzo/",
    icon: "mdi:instagram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/estebanguzzo/",
    icon: "mdi:linkedin",
  },
  {
    label: "Mi pagina",
    href: "https://estebanguzzo.com.ar/",
    icon: "mdi:web",
  },
] as const;

export const PERSONAL_INFO = {
  name: "Esteban Guzzo",
  title: "Catamarca Ghibli 🏙️✨",
  subtitle: "La ciudad al estilo de una película de Ghibli.",
  role: "Programador",
  contact: "mailto:estebanguzzo@gmail.com",
  avatar:
    "https://github.com/user-attachments/assets/a543b428-3c52-421d-a5d5-32bcd97b1e6e",
  about: `Step into Galactic Canvas, a realm where the cosmos and creativity collide.
    Using the power of Astro.js, we bring you an interstellar collection of digital art
    that transcends the ordinary. Embark on a journey through our curated gallery
    and experience the future of art in the digital age.`,
} as const;

export const SEO_INFO = [
  {
    name: "description",
    content: "Art portfolio made by Ema Suriano in his free time",
  },
  { name: "keywords", content: "Art portfolio, Digital art, gallery" },
  { name: "author", content: PERSONAL_INFO.name },
];
