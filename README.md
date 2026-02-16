# NeuroMode CLI

**Automatic task scoping and friction-aware decomposition for GitHub Copilot CLI**

NeuroMode is a CLI wrapper that analyzes prompt complexity before execution and automatically decomposes large tasks into manageable, executable steps.

Built for the GitHub Copilot CLI Challenge 2026.

---

## Problem

GitHub Copilot CLI is execution-oriented.

When given high-level prompts such as:


Develop a scalable multi-tenant SaaS platform with authentication, billing and analytics.


It attempts full architectural expansion, often generating:

- Multi-service setups  
- Infrastructure configuration  
- File system operations  
- Large volumes of output  

This behavior increases cognitive density and scope amplification.

Copilot maximizes execution.  
NeuroMode regulates scope.

---

## Solution

NeuroMode introduces a pre-execution analysis layer that:

1. Detects structural complexity in prompts  
2. Estimates cognitive friction  
3. Activates progressive decomposition when necessary  
4. Reduces tasks to the smallest executable step  

The goal is not to replace Copilot, but to regulate scope before amplification.

---

## Architecture

User Input
↓
NeuroMode CLI
↓
Prompt Analysis Engine
↓
Friction Score Calculation
↓
Conditional Prompt Rewrite
↓
GitHub Copilot CLI
↓
Output Regulation
↓
Final Output


---

## Friction Score Model

NeuroMode uses a heuristic model to estimate structural complexity:

F = (Objectives × W₁)

(Abstraction Level × W₂)

(Decision Density × W₃)

(Execution Complexity × W₄)


If the friction score exceeds a defined threshold, Progressive Decomposition Mode is activated.

This model is inspired by:

- Cognitive Load Theory  
- Decision Fatigue research  
- Task Decomposition principles  

It is a structural heuristic, not a clinical measurement.

---

## Example

### Without NeuroMode

gh copilot -p "Build a scalable SaaS platform"


Typical result:
- Full architectural expansion  
- High-density output  
- Multiple simultaneous decisions  

---

### With NeuroMode

Step 1: Define ONE core feature.


---

## Core Features

- Prompt structural analysis  
- Multi-objective detection  
- Abstraction density estimation  
- Progressive task decomposition  
- CLI-based interaction flow  

---

## Tech Stack

- Node.js  
- TypeScript  
- child_process (Copilot execution wrapper)  
- Custom heuristic friction engine  

---

## Installation



git clone https://github.com/yourusername/neuromode-cli

cd neuromode-cli
npm install
node neuromode.js


---

## Status

Experimental prototype built for the GitHub Copilot CLI Challenge 2026.

---

## Future Improvements

- NLP-based abstraction detection  
- Configurable friction thresholds  
- User cognitive profiles  
- Session-based adaptive learning  
- Direct Copilot CLI plugin integration  






