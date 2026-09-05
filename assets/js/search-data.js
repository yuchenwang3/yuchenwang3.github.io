// Curated search index for the public research portfolio.
// Template posts, books, news, and teaching stubs are intentionally excluded.
const ninja = document.querySelector("ninja-keys");

ninja.data = [
  {
    id: "page-about",
    title: "About · Yuchen (Ean) Wang",
    description: "Research profile, current work, education, agentic post-training, reinforcement learning, ML systems",
    section: "Pages",
    handler: () => {
      window.location.href = "/";
    },
  },
  {
    id: "page-research",
    title: "Papers & Projects · Research overview",
    description: "Selected papers, technical reports, CUDA systems, inference, reinforcement learning, video generation, open source",
    section: "Pages",
    handler: () => {
      window.location.href = "/projects/";
    },
  },
  {
    id: "page-cv",
    title: "CV · Experience, education & selected work",
    description: "Curriculum vitae resume internships publications projects skills UIUC Peking University Alibaba",
    section: "Pages",
    handler: () => {
      window.location.href = "/cv/";
    },
  },
  {
    id: "page-cv-pdf",
    title: "CV · Download PDF",
    description: "One-page resume curriculum vitae PDF",
    section: "Pages",
    handler: () => {
      window.location.href = "/CV.pdf";
    },
  },{
      id: "research-occamy-1-0",
      title: "Occamy-1.0",
      description: "Open Pareto-frontier 35B Intelligence for Co-work · Model \u0026 systems · Agentic post-training, Long-horizon tool use, RL infrastructure",
      section: "Research",
      handler: () => {
        window.location.href = "/projects/occamy-1-0/";
      },
    },{
      id: "research-cineflow",
      title: "CineFlow",
      description: "Dependency-driven parallel execution for scalable, consistent video generation · Research paper · Video diffusion, Parallel systems, Dependency scheduling",
      section: "Research",
      handler: () => {
        window.location.href = "/projects/cineflow/";
      },
    },{
      id: "research-open-source-systems-engineering",
      title: "Open-Source Systems Engineering",
      description: "Numerical correctness, GPU memory, RL data transfer, and reliable agent execution · Open-source engineering · Distributed training, Long-context kernels, RL and inference systems, Agent runtimes",
      section: "Research",
      handler: () => {
        window.location.href = "/projects/open-source-systems/";
      },
    },{
      id: "research-dynamic-prefill-optimization",
      title: "Dynamic Prefill Optimization",
      description: "Adaptive online packing for lower-TTFT LLM serving · Technical report · LLM serving, Online packing, Tail-latency control",
      section: "Research",
      handler: () => {
        window.location.href = "/projects/prepack/";
      },
    },{
      id: "research-flashattention-style-cuda-optimization",
      title: "FlashAttention-style CUDA Optimization",
      description: "Memory-efficient kernels and fusion for GPT-2 inference · Systems project · CUDA kernels, Efficient attention, GPU profiling",
      section: "Research",
      handler: () => {
        window.location.href = "/projects/gpt2-inference-optimization/";
      },
    },{
      id: "research-reinforcement-learning-for-legal-reasoning-on-multi-choice-qa",
      title: "Reinforcement Learning for Legal Reasoning on Multi-Choice QA",
      description: "Hybrid Zero-RL, distilled-CoT SFT, and GRPO for structured legal reasoning · Undergraduate thesis · Reinforcement learning, Legal reasoning, Chain-of-thought distillation",
      section: "Research",
      handler: () => {
        window.location.href = "/projects/grpo-project/";
      },
    },
  {
    id: "link-github",
    title: "GitHub · yuchenwang3",
    description: "Open-source contributions repositories code pull requests ML systems",
    section: "Links",
    handler: () => {
      window.open("https://github.com/yuchenwang3", "_blank", "noopener");
    },
  },
  {
    id: "link-scholar",
    title: "Google Scholar · Yuchen Wang",
    description: "Research papers publications citations academic profile",
    section: "Links",
    handler: () => {
      window.open("https://scholar.google.com/citations?user=NharhG8AAAAJ", "_blank", "noopener");
    },
  },
  {
    id: "link-linkedin",
    title: "LinkedIn · Yuchen Wang",
    description: "Professional profile experience education contact",
    section: "Links",
    handler: () => {
      window.open("https://www.linkedin.com/in/yuchen3", "_blank", "noopener");
    },
  },
  {
    id: "link-email",
    title: "Email · yuchenwang0303@gmail.com",
    description: "Contact Yuchen Wang",
    section: "Links",
    handler: () => {
      window.location.href = "mailto:yuchenwang0303@gmail.com";
    },
  },
];
