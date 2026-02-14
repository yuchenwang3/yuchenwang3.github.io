---
layout: page
title: Dynamic Prefill Optimization via Adaptive Online Packing
description: CS 498 Machine Learning System Course Project
importance: 10
category: work
github: Winlere/prepack-workspace
pdf: /CS_498__Proposal_Flexible_and_Interruptable_Online_Packing_Strategy_for_Training_Data (2).pdf
---

Dynamic Prefill Optimization via Adaptive Online Packing is a project for the CS 498 Machine Learning System course. It focuses on dynamic prepack optimization for LLM inference.

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

### Related Experience

You can find more details about this project in my [CV](/cv/) under the Projects section.
