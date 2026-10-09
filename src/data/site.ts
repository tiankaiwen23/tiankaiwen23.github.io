export const SITE = {
  name: "Kaiwen Tian",
  nameZh: "田凯文",
  description:
    "Hi, my name is Kaiwen Tian (田凯文). I'm a fourth-year undergraduate at Tsinghua University.",
  // intro supports inline <strong> / <em> for emphasis
  intro: [
    "I am a fourth-year undergraduate in Automation at <strong>Tsinghua University</strong>. I work with <a href=\"https://www.cse.cuhk.edu.hk/people/faculty/qiang-xu/\"><strong>Prof. Qiang Xu</strong></a> at the <a href=\"https://cure-lab.github.io/\">CURE Lab</a>, The Chinese University of Hong Kong, and intern at <strong>PhAI Labs</strong>.",
    "My current research focuses on <strong>LLM agents</strong> for scientific research. Previously, I worked with <a href=\"https://ytrock.com/\"><strong>Prof. Tao Yu</strong></a> at Tsinghua on sparse-view 3D/4D human reconstruction with <strong>generative models</strong>.",
  ],
  links: [
    { label: "Email", url: "mailto:tkw23@mails.tsinghua.edu.cn", icon: "email" },
    { label: "GitHub", url: "https://github.com/tiankaiwen23", icon: "github" },
    { label: "REDnote", url: "https://www.xiaohongshu.com/user/profile/64dc47e1000000000100fa5c", icon: "note" },
    { label: "CV", url: "/cv.pdf", icon: "doc" },
  ],
  // misc: hobbies & off-research lines, same inline-html rules as intro
  misc: [
    "Outside research, I travel — the logs (and the photos that survive the edit) land in <a href=\"/blog\">Blog → Travel</a>.",
    "Otherwise: TV shows and films, music that's always playing somewhere, and pretty much any sport with a scoreboard. New things? Always yes.",
  ],
  updated: "Oct. 2026",
  footer: "© 2026 Kaiwen Tian",
  // Cloudflare Worker endpoint for the visitor map ("" = hide in prod;
  // dev preview always shows the map with sample dots)
  visitorApi: "https://visitor-map.tiankaiwen23.workers.dev",
};
