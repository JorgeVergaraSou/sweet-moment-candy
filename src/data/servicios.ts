export interface ServicioInterface {
  titulo: string;
  descripcion?: string;
  imagen: string;
  urlImagen: string;
  precio?: string;
}

const baseUrl = import.meta.env.BASE_URL;

export const serviciosPrestados: ServicioInterface[] = [
  {
    titulo: "Abanicos",
    imagen: `${baseUrl}img/servicios/abanicos.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/abanicos.webp",
  },
  {
    titulo: "Árbol de Huellas",
    imagen: `${baseUrl}img/servicios/arbol-huellas.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/arbol-huellas.webp",
  },
  {
    titulo: "Bingo Musical",
    imagen: `${baseUrl}img/servicios/bingo-musical.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/bingo-musical.webp",
  },
    {
    titulo: "Candy Bar",
    imagen: `${baseUrl}img/servicios/candy-bar.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/candy-bar.webp",
  },
  {
    titulo: "Landyards Capitán de mesa",
    imagen: `${baseUrl}img/servicios/capitan-mesa.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/capitan-mesa.webp",
  },
  {
    titulo: "Cerveza petit",
    imagen: `${baseUrl}img/servicios/cerveza-petit.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/cerveza-petit.webp",
  },
    {
    titulo: "Chapitas personalizadas",
    imagen: `${baseUrl}img/servicios/chapitas.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/chapitas.webp",
  },
  {
    titulo: "Conos para pétalos",
    imagen: `${baseUrl}img/servicios/conos-petalos.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/conos-petalos.webp",
  },
  {
    titulo: "Copas brindis",
    imagen: `${baseUrl}img/servicios/copa-brindis.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/copa-brindis.webp",
  },
    {
    titulo: "Distribución de mesas",
    imagen: `${baseUrl}img/servicios/distribucion.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/distribucion.webp",
  },
  {
    titulo: "En Memoria...",
    imagen: `${baseUrl}img/servicios/en-memoria.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/en-memoria.webp",
  },
  {
    titulo: "Espejo Bienvenida",
    imagen: `${baseUrl}img/servicios/espejo-bienvenida.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/espejo-bienvenida.webp",
  },
    {
    titulo: "Imanes",
    imagen: `${baseUrl}img/servicios/imanes.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/imanes.webp",
  },
  {
    titulo: "Kit Anti Caña",
    imagen: `${baseUrl}img/servicios/kit-anticana.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/kit-anticana.webp",
  },
  {
    titulo: "Kit Tatuajes temporales",
    imagen: `${baseUrl}img/servicios/kit-tatuajes.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/kit-tatuajes.webp",
  },
    {
    titulo: "Lentes Tik Tok",
    imagen: `${baseUrl}img/servicios/lentes-tiktok.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/lentes-tiktok.webp",
  },
  {
    titulo: "Llaveros personalizados",
    imagen: `${baseUrl}img/servicios/llaveros.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/llaveros.webp",
  },
  {
    titulo: "Menú Mesas",
    imagen: `${baseUrl}img/servicios/menu-mesas.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/menu-mesas.webp",
  },
    {
    titulo: "Pantuflas",
    imagen: `${baseUrl}img/servicios/pantuflas.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/pantuflas.webp",
  },
  {
    titulo: "Pañuelos",
    imagen: `${baseUrl}img/servicios/panuelos.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/panuelos.webp",
  },
  {
    titulo: "Posa Vasos",
    imagen: `${baseUrl}img/servicios/posa-vasos.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/posa-vasos.webp",
  },
    {
    titulo: "Raspes personalizados",
    imagen: `${baseUrl}img/servicios/raspes.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/raspes.webp",
  },
  {
    titulo: "Tarjetero doble",
    imagen: `${baseUrl}img/servicios/tarjetero-doble.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/tarjetero-doble.webp",
  },
  {
    titulo: "Tazas",
    imagen: `${baseUrl}img/servicios/tazas.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/tazas.webp",
  },
    {
    titulo: "Teléfono del Recuerdo",
    imagen: `${baseUrl}img/servicios/telefono-recuerdo.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/telefono-recuerdo.webp",
  },
  {
    titulo: "Tríptico de mesas",
    imagen: `${baseUrl}img/servicios/triptico-mesa.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/triptico-mesa.webp",
  },
  {
    titulo: "Vino Petit",
    imagen: `${baseUrl}img/servicios/vino-petit.webp`,
    urlImagen:
      "https://TU-USUARIO.github.io/TU-REPO/img/servicios/vino-petit.webp",
  },
];