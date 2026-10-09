export interface NewsItem {
  date: string; // display string, e.g. "2026.09"
  text: string;
}

export const NEWS: NewsItem[] = [
  {
    date: "2026.10",
    text: "<a href=\"https://arxiv.org/abs/2610.04606\"><em>Sparse-View 4D Gaussian Splatting via Spatiotemporal Priors and Generative Assistance</em></a> accepted to SIGGRAPH Asia 2026 Workshops.",
  },
  {
    date: "2026.09",
    text: "Won <strong>🥇 First Prize</strong> in the Sparse-View Track of the <a href=\"https://zju3dv.github.io/sigasia2026-vvc/\">2nd Volumetric Video Challenge</a>.",
  },
  {
    date: "2026.09",
    text: "Joined Prof. Qiang Xu at CUHK to work on scientific agents.",
  },
  {
    date: "2025.10",
    text: "Started research on 4D human reconstruction with Prof. Tao Yu at Tsinghua.",
  },
];
