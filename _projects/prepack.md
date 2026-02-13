---
layout: page
title: Prepack Workspace
description: CS 498 Machine Learning System Course Project
importance: 10
category: work
github: Winlere/prepack-workspace
pdf: assets/pdf/projects/prepack-proposal.pdf
---

Prepack Workspace is a project for the CS 498 Machine Learning System course. It focuses on dynamic prepack optimization for LLM inference.

### Project Overview

The project aims to improve LLM inference performance through intelligent request batching and packing strategies. It includes:

- Dynamic batching controller
- Length-aware packing for heterogeneous prompts
- Experiment scripts for evaluating performance
- Real-world dataset support

### Usage

```bash
git clone --recursive git@github.com:Winlere/prepacking-workspace.git
conda env create -f prepack/environment.yml -n prepack
conda activate prepack
pushd dataset
bash setup.sh
popd
```

### Reproduce Experiments

```bash
cd prepack_dynamic
bash run_exp.sh ../assets/ ../dataset/realdata_downsample/*.csv
```

This project demonstrates advanced techniques for optimizing LLM inference systems, which is crucial for deploying large language models efficiently in production environments.
