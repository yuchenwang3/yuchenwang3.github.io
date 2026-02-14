---
layout: page
title: FlashAttention v1 and CUDA Kernel Optimization for GPT-2 Inference
description: ECE 408 GPT-2 Inference Optimization Project
importance: 9
category: work
github: yuchenwang3/gpt2-inference-optimization
pdf: /gpt2-inference-optimization-report.pdf
---

# FlashAttention v1 and CUDA Kernel Optimization for GPT-2 Inference

This project focuses on optimizing GPT-2 inference performance through CUDA kernel optimization and memory-efficient techniques.

## Project Overview

- CUDA kernel optimization for GPT-2 inference
- Memory-efficient attention implementation
- Performance benchmarking and analysis
- Kernel fusion techniques for better throughput

## Key Features

- FlashAttention v1 implementation
- Tiled computation for better memory usage
- Online softmax calculation
- Blockwise loop optimization
- Kernel fusion for QKV projection and attention

## Performance Improvements

- Reduced HBM traffic from ~1.57MB to ~0.15MB
- Improved arithmetic intensity by 10.3×
- Achieved up to ~9% speedup vs. baseline
- Further speedups through kernel fusion techniques

## Project Structure

- `kernels/`: CUDA kernels for GPT-2 inference
- `kernel_fusion/`: Kernel fusion implementations
- `qkv_projection/`: QKV projection optimizations
- `performance/`: Performance benchmarking tools
- `utils/`: Utility functions and helpers

## Final Report

The project includes a comprehensive final report detailing the optimization techniques and performance results.

### Related Experience

You can find more details about this project in my [CV](/cv/) under the Projects section.
