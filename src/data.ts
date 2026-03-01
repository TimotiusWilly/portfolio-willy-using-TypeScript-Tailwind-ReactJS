const HeroImage = "/assets/WillyPict.png";

const Image = {
  HeroImage,
};

export default Image;

const Tools1 = "/assets/tools/vscode.png";
const Tools2 = "/assets/tools/reactjs.png";
const Tools4 = "/assets/tools/tailwind.png";
const Tools6 = "/assets/tools/js.png";
const Tools7 = "/assets/tools/nodejs.png";
const Tools8 = "/assets/tools/github.png";
const Tools10 = "/assets/tools/canva.png";
const Tools11 = "/assets/tools/TS.jpg";
const Tools12 = "/assets/tools/gODOT.jpg";
const Tools13 = "/assets/tools/Python.jpg";
const Tools14 = "/assets/tools/C++.jpg";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
   id: 11,
    gambar: Tools11,
    nama: "TypeScript",
    ket: "Language",
    dad: "1100", 
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Godot",
    ket: "Game Engine",
    dad: "1200", 
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Python",
    ket: "Language",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "C++",
    ket: "Language",
    dad: "1400",
  }
  
];

const Proyek1 = "/assets/proyek/proyekWeb1.png";
const Proyek2 = "/assets/proyek/InGame.jpeg";
const Proyek3 = "/assets/proyek/PortfolioWeb.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Calculator Konversi",
    desk: "Website ini sengaja saya buat untuk tugas pada Praktikum Algoritma dan Pemrograman. Website ini berfungsi untuk mengkonversi satuan jarak. Tools yang saya pakai untuk membuat proyek ini adalah HTML, CSS, dan Python.",
    tools: ["HTML", "CSS", "Python"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Game 2D Bernama Ghost Of Paket",
    desk: "Game ini saya buat untuk tugas kelompok pada jenjang Sekolah Menengah Atas. Game ini bercerita tentang seorang pemuda yang terjebak di dunia fantasy dan berusaha keluar ke dunia aslinya dengan melewati berbagai rintangan. Tools yang saya pakai untuk membuat proyek ini adalah Godot Engine dan C++.",
    tools: ["Godot Engine", "C++"],
    dad: "400",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Website Portfolio",
    desk: "Website ini saya buat untuk melatih skill coding saya dan untuk menjadi profil saya. Website ini berfungsi untuk menampilkan informasi tentang diri saya, tools yang saya pakai, dan proyek yang sudah saya buat. Tools yang saya pakai untuk membuat proyek ini adalah TypeScript, React JS, dan Tailwind CSS.",
    tools: ["TypeScript", "React JS", "Tailwind CSS"],
    dad: "600",
  }
];
