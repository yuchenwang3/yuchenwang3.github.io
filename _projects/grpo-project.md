---
layout: page
title: Reinforcement Learning for Legal Reasoning on Multi-Choice QA
description: Developed a hybrid training framework for LLM legal reasoning
importance: 8
category: work
pdf: /thesis.pdf
---

# Reinforcement Learning for Legal Reasoning on Multi-Choice QA

This project focuses on developing a hybrid training framework for LLM legal reasoning using GRPO (Generalized Policy Optimization).

## Project Overview

- Developed a Zero-RL → SFT with distilled CoT → GRPO framework
- Achieved 57.6% accuracy on benchmark test sets
- Enabled structured legal reasoning with precise statute citation

## Key Features

- Zero-shot reinforcement learning initialization
- Supervised fine-tuning with distilled chain-of-thought reasoning
- Generalized Policy Optimization (GRPO) for policy improvement
- Legal reasoning evaluation on multi-choice QA benchmarks
- Statute citation and structured reasoning capabilities

## Methodology

1. **Zero-RL Initialization**: Started with a pre-trained LLM and initialized policy optimization without human supervision
2. **Distilled CoT Fine-tuning**: Enhanced the model with distilled chain-of-thought reasoning from expert demonstrations
3. **GRPO Training**: Applied Generalized Policy Optimization to improve the model's legal reasoning capabilities
4. **Evaluation**: Tested on benchmark legal reasoning datasets to measure performance

## Results

- **Accuracy**: Achieved 57.6% accuracy on benchmark test sets
- **Reasoning Quality**: Improved structured reasoning with precise statute citation
- **Generalization**: Demonstrated better generalization to unseen legal scenarios

## Thesis

A comprehensive thesis detailing the methodology, experiments, and results is available for download.
