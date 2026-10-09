export interface Publication {
  title: string;
  authors: string[]; // "Kaiwen Tian" highlights; a "†" suffix marks the corresponding author
  venue: string;
  year: number;
  note?: string; // e.g. "Oral", "1st Place"
  selected?: boolean;
  image?: string; // teaser figure, e.g. "/pubs/xxx.webp" (put file in public/pubs/)
  links: { label: string; url: string }[];
}

export const PUBLICATIONS: Publication[] = [
  {
    title: "Sparse-View 4D Gaussian Splatting via Spatiotemporal Priors and Generative Assistance",
    authors: ["Shengqi Wang", "Zhengxian Yang", "Kaiwen Tian", "Yang Liu", "Bowen Liu", "Hua Du", "Taicheng Huang", "Jiamin Wu", "Tao Yu†"],
    venue: "Volumetric Video Challenge Workshop, SIGGRAPH Asia 2026",
    year: 2026,
    note: "1st Place · Sparse-View Track",
    selected: true,
    image: "/pubs/sparse-view-4dgs.webp",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2610.04606" },
      { label: "Challenge", url: "https://zju3dv.github.io/sigasia2026-vvc/" },
    ],
  },
];
