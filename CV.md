# CV

# Yuchen Wang

📞 (217) 480-2166  
📧 yuchenwang0303@gmail.com  
🌐 GitHub: Yuchen  
🔗 LinkedIn: yuchenwang3

---

## Education

**University of Illinois Urbana-Champaign (UIUC)**  
_M.S. in Computer Science_  
Champaign, IL, USA  
**2025 – 2027 (expected)**

**Peking University**  
_B.S. in Intelligence Science and Technology_  
Beijing, China  
**2021 – 2025**

- GPA: **3.73** (Top 20%)

---

## Internship Experience

**Freedo Technology** — Research Intern  
Beijing, China  
**Summer 2025**

- Built an end-to-end **depth-conditioned ControlNet denoising pipeline** for 3D building reconstruction from noisy point clouds, integrating data preprocessing, conditioning construction, and inference-time post-processing.
- Used **normal maps** as inputs and **depth maps** as structural conditions to guide denoising; tuned conditioning strength and guidance schedules to preserve sharp edges and planar structures under heavy noise.
- Improved geometric fidelity from ~30% to ~80% on representative cases; produced cleaner normals and more stable **Bilateral Normal Integration** surfaces.

---

## Project Experience

### Dynamic Prefill Optimization via Adaptive Online Packing

**Sep 2025 – Dec 2025**  
_Workload-aware micro-batching and request packing for LLM prefill_  
**Tools:** Python, vLLM, Profiling & Evaluation

- Designed an **AIMD-based dynamic batching controller** adapting prefill trigger thresholds using real-time p95 TTFT feedback, with burst overrides for non-stationary traffic.
- Implemented **length-aware packing** for heterogeneous prompts (greedy baseline + DP-based optimal packing) to reduce padding waste and improve token utilization.
- Integrated as a lightweight queue-layer controller before a continuous batching engine (Prepacking-style), requiring no invasive engine changes.
- Evaluated on production traces (DynamoLLM); achieved up to **~20% lower end-to-end TTFT** vs. Prepacking under conversational workloads.

---

### FlashAttention v1 and CUDA Kernel Optimization for GPT-2 Inference

**Sep 2025 – Dec 2025**  
_Memory-efficient attention and GPU kernel-level performance tuning_  
**Tools:** CUDA, cuBLAS, Nsight

- Built an optimized GPT-2 inference pipeline with custom CUDA kernels, focusing on throughput and latency.
- Implemented **FlashAttention v1** (tiled + online softmax + blockwise loop), avoiding full attention matrix materialization:
  - Reduced HBM traffic from ~1.57MB to ~0.15MB
  - Improved arithmetic intensity by **10.3×** (15.3 → 157.5 FLOP/byte) under B=4, NH=12, T=64, d=64
  - Maintained numerical stability (max error < 1e-5)
- Reduced kernel launch overhead by fusing attention-related kernels, saving ~50% launch cost.
- Performed profiling-driven tuning with Nsight and configuration sweeps; achieved up to **~9% speedup** vs. baseline.
- Implemented kernel-level operator fusion (e.g., GEMM + Bias + GELU, fused QKV projection) to reduce intermediate tensors and global memory round-trips.

---

### Reinforcement Learning for Legal Reasoning on Multi-Choice QA

**Feb 2025 – May 2025**  
Advisor: Prof. Yansong Feng, Peking University  
**Tools:** PyTorch, Qwen

- Developed a hybrid training framework (**Zero-RL → SFT with distilled CoT → GRPO**) to improve LLM reasoning on Chinese bar-exam multi-choice case-analysis questions.
- Achieved **57.6% accuracy** on benchmark test sets, outperforming SFT-only and RL-only baselines.
- Enabled structured legal reasoning with precise statute citation and option-by-option analysis.

---

### Interactive World Model and Variable-Length Video Generation

**Oct 2025 – Present**  
Advisor: Prof. Fan Lai, University of Illinois Urbana–Champaign  
**Tools:** PyTorch, Diffusion Transformers, LLMs

- Engineering an end-to-end **xDiT experimentation pipeline** (config-driven runs, logging, checkpointing, evaluation hooks).
- Implementing **variable-length video generation** with length conditioning, masking, and sampling utilities.
- Prototyping retrieval-and-reuse and speculative chunking modules to reduce interactive latency; benchmarking latency / VRAM / quality trade-offs.

---

## Skills

- **Programming:** Python, C, C++, LaTeX
- **Machine Learning:** PyTorch, Hugging Face Transformers, scikit-learn, NumPy, Pandas, Matplotlib
- **LLM & Systems:** vLLM, Megatron-LM, SGLang, VeRL (GRPO / DAPO), CUDA, Inference Optimization

---

## Honors and Awards

**Zhi Class Scholarship** — 2023, 2024  
Peking University

- Awarded to top-performing students for academic excellence.

**Merit Student** — 2023  
Peking University

- University-level recognition for outstanding academic and extracurricular performance.

**First Prize, Provincial Chinese Mathematical Olympiad (CMO)** — 2020  
Chinese Mathematical Olympiad Committee

- First-class award for outstanding performance in advanced mathematical problem-solving.
