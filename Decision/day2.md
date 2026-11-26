## Day 2 — Node Version Choice

**Chosen:** Node 26.13.1 (Current)
**Rejected:** Node 24.x (Active LTS)

**Reason:** [your honest reason — e.g., "nvm-windows only had 26.13.1 installed; installing LTS was an extra step; I'll migrate to LTS 24 before Phase 1 if I hit compatibility issues"]

**Risk accepted:** Node 26 is not what most production environments run. Library maintainers target LTS. Docker base images for Node 26 may lag. CI runners may not have Node 26 pre-installed.

**Migration trigger:** If any of the following occurs, migrate to Node 24 LTS immediately:
- A dependency fails to build on Node 26
- Docker image build fails or needs a workaround
- CI runner can't install Node 26