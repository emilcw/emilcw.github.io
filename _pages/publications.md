---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<style>
.pub-item {
  display: flex;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--global-border-color, #ddd);
}
.pub-thumbnail {
  flex-shrink: 0;
  width: 150px;
  margin-right: 1.5rem;
}
.pub-thumbnail img {
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.pub-content {
  flex: 1;
}
.pub-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: var(--global-text-color);
}
.pub-authors {
  font-style: italic;
  margin-bottom: 0.3rem;
  color: var(--global-text-color-light, #666);
}
.pub-authors strong {
  font-style: normal;
}
.pub-venue {
  font-style: italic;
  margin-bottom: 0.5rem;
  color: var(--global-text-color-light, #666);
}
.pub-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}
.pub-btn {
  display: inline-block;
  padding: 0.25rem 0.6rem;
  font-size: 0.85rem;
  border-radius: 4px;
  text-decoration: none;
  background-color: var(--global-link-color, #52adc8);
  color: white !important;
  transition: background-color 0.2s;
}
.pub-btn:hover {
  background-color: var(--global-link-color-hover, #3d8fa8);
  text-decoration: none;
}
.pub-abstract {
  margin-top: 0.75rem;
  padding: 1rem;
  background-color: var(--global-code-background-color, #f5f5f5);
  border-radius: 4px;
  font-size: 0.9rem;
  display: none;
}
.pub-abstract.show {
  display: block;
}
.pub-bibtex {
  margin-top: 0.75rem;
  display: none;
}
.pub-bibtex.show {
  display: block;
}
.pub-bibtex pre {
  background-color: var(--global-code-background-color, #f5f5f5);
  padding: 1rem;
  border-radius: 4px;
  font-size: 0.8rem;
  overflow-x: auto;
}
.year-header {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--global-link-color, #52adc8);
}
</style>

<script>
function toggleAbstract(id) {
  var elem = document.getElementById('abs-' + id);
  elem.classList.toggle('show');
}
function toggleBibtex(id) {
  var elem = document.getElementById('bib-' + id);
  elem.classList.toggle('show');
}
</script>

Publications by categories in reversed chronological order.

{% if site.author.googlescholar %}
<div class="wordwrap" style="margin-bottom: 1.5rem;">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

## Papers
{: .year-header}

### 2025

<div class="pub-item">
  <div class="pub-thumbnail">
    <img src="/images/slp_preview.png" alt="SLP Preview" onerror="this.style.display='none'">
  </div>
  <div class="pub-content">
    <div class="pub-title">Safe Lattice Planning for Motion Planning with Dynamic Obstacles</div>
    <div class="pub-authors"><strong>Emil Wiman</strong> and Mattias Tiger</div>
    <div class="pub-venue">In Proceedings of the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2025</div>
    <div class="pub-buttons">
      <a href="javascript:void(0)" onclick="toggleAbstract('slp')" class="pub-btn">Abs</a>
      <a href="javascript:void(0)" onclick="toggleBibtex('slp')" class="pub-btn">Bib</a>
      <a href="https://liu.diva-portal.org/smash/get/diva2:2021116/FULLTEXT01.pdf" class="pub-btn">PDF</a>
      <a href="https://doi.org/10.1109/IROS60139.2025.11247023" class="pub-btn">DOI</a>
      <a href="https://emilcw.github.io/slp/" class="pub-btn">Project</a>
    </div>
    <div id="abs-slp" class="pub-abstract">
      Motion planning in dynamic and uncertain real-world environments remains a critical challenge in robotics, as it is essential for the effective operation of autonomous systems. One strategy for motion planning has been to introduce a state lattice where pre-computed motion primitives can be combined with graph-based search methods to find a physically feasible motion plan. However, introducing lattice planning into dynamic, uncertain settings remains challenging. It is nontrivial to incorporate uncertain dynamic information into the planning process in real time. Thus, in this paper we propose a lattice planning framework for dynamic environments with extensions to handle safety-critical edge-cases that can arise with the uncertain nature of the environment. The proposed method, Safe Lattice Planner (SLP), extends the Receding-Horizon Lattice Planner (RHLP) with enhanced replanning and survival capabilities to handle the dynamic habitat. We thoroughly evaluate SLP in a new benchmark suite against provided baselines. SLP is found to outperform the baselines in terms of safety and resilience in the dynamic environment while reaching the goal state in an efficient manner. We release the benchmark and SLP to accelerate the field of safe robotics.
    </div>
    <div id="bib-slp" class="pub-bibtex">
<pre>@inproceedings{wiman2025slp,
  title = {Safe Lattice Planning for Motion Planning with Dynamic Obstacles},
  author = {Wiman, Emil and Tiger, Mattias},
  booktitle = {2025 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  pages = {9287--9294},
  year = {2025},
  organization = {IEEE},
  doi = {10.1109/IROS60139.2025.11247023},
}</pre>
    </div>
  </div>
</div>

### 2024

<div class="pub-item">
  <div class="pub-thumbnail">
    <img src="/images/daep_preview.png" alt="DAEP Preview" onerror="this.style.display='none'">
  </div>
  <div class="pub-content">
    <div class="pub-title">Autonomous 3D Exploration in Large-Scale Environments with Dynamic Obstacles</div>
    <div class="pub-authors"><strong>Emil Wiman</strong>, Ludvig Widén, Mattias Tiger, and Fredrik Heintz</div>
    <div class="pub-venue">In Proceedings of the IEEE International Conference on Robotics and Automation (ICRA), 2024</div>
    <div class="pub-buttons">
      <a href="javascript:void(0)" onclick="toggleAbstract('daep')" class="pub-btn">Abs</a>
      <a href="javascript:void(0)" onclick="toggleBibtex('daep')" class="pub-btn">Bib</a>
      <a href="https://liu.diva-portal.org/smash/get/diva2:1891366/FULLTEXT01.pdf" class="pub-btn">PDF</a>
      <a href="https://doi.org/10.1109/ICRA57147.2024.10610996" class="pub-btn">DOI</a>
      <a href="https://emilcw.github.io/daep/" class="pub-btn">Project</a>
    </div>
    <div id="abs-daep" class="pub-abstract">
      Exploration in dynamic and uncertain real-world environments is an open problem in robotics and it constitutes a foundational capability of autonomous systems operating in most of the real-world. While 3D exploration planning has been extensively studied, the environments are assumed static or only reactive collision avoidance is carried out. We propose a novel approach to not only avoid dynamic obstacles but also include them in the plan itself, to deliberately exploit the dynamic environment in the agent's favor. The proposed planner, Dynamic Autonomous Exploration Planner (DAEP), extends AEP to explicitly plan with respect to dynamic obstacles. Furthermore, addressing prior errors within AEP in DAEP has resulted in enhanced exploration within static environments. To thoroughly evaluate exploration planners in such settings we propose a new enhanced benchmark suite with several dynamic environments, including large-scale outdoor environments. DAEP outperforms state-of-the-art planners in dynamic and large-scale environments and is shown to be more effective at both exploration and collision avoidance.
    </div>
    <div id="bib-daep" class="pub-bibtex">
<pre>@inproceedings{wiman2024daep,
  title = {Autonomous {3D} Exploration in Large-Scale Environments with Dynamic Obstacles},
  author = {Wiman, Emil and Wid{\'e}n, Ludvig and Tiger, Mattias and Heintz, Fredrik},
  booktitle = {2024 IEEE International Conference on Robotics and Automation (ICRA)},
  pages = {2389--2395},
  year = {2024},
  organization = {IEEE},
  doi = {10.1109/ICRA57147.2024.10610996},
}</pre>
    </div>
  </div>
</div>

## Theses
{: .year-header}

### 2023

<div class="pub-item">
  <div class="pub-thumbnail">
    <img src="/images/msc_preview.png" alt="MSc Thesis Preview" onerror="this.style.display='none'">
  </div>
  <div class="pub-content">
    <div class="pub-title">Autonomous 3D Exploration with Dynamic Obstacles: Towards Intelligent Navigation and Collision Avoidance</div>
    <div class="pub-authors">Ludvig Widén and <strong>Emil Wiman</strong></div>
    <div class="pub-venue">Master's Thesis, Linköping University, 2023</div>
    <div class="pub-buttons">
      <a href="javascript:void(0)" onclick="toggleAbstract('msc')" class="pub-btn">Abs</a>
      <a href="javascript:void(0)" onclick="toggleBibtex('msc')" class="pub-btn">Bib</a>
      <a href="https://liu.diva-portal.org/smash/get/diva2:1773756/FULLTEXT01.pdf" class="pub-btn">PDF</a>
    </div>
    <div id="abs-msc" class="pub-abstract">
      The advancements within robotics in recent years has increased the demand for sophisticated algorithms that can tackle the challenges associated with building robust and safe autonomous systems. The objective of 3D exploration is to enable a robot to explore an unknown environment with a high degree of accuracy while minimizing time and path length. Planners such as Receding Horizon Next Best View Planner (RH-NBVP) and Autonomous Exploration Planner (AEP) have been widely studied in static environments. However, in dynamic environments where obstacles like pedestrians or vehicles can appear, existing solutions either use dynamic motion planners for obstacle avoidance or simply use reactive behavior to avoid collisions like Dynamic Exploration Planner (DEP). This thesis examines how dynamic obstacles can be included in the planning process while performing 3D exploration to make more advantageous decisions regarding both efficiency and overall safety. The suggested solution, Dynamic Autonomous Exploration Planner (DAEP), has been evaluated with other 3D-exploration planners as benchmarks. The results demonstrate that the extensions to AEP enhance safety planning and improve coverage compared to regular AEP and DEP.
    </div>
    <div id="bib-msc" class="pub-bibtex">
<pre>@mastersthesis{widen2023autonomous,
  title = {Autonomous {3D} Exploration with Dynamic Obstacles: Towards Intelligent Navigation and Collision Avoidance},
  author = {Wid{\'e}n, Ludvig and Wiman, Emil},
  school = {Link{\"o}ping University},
  year = {2023},
  type = {Master's Thesis},
}</pre>
    </div>
  </div>
</div>

### 2021

<div class="pub-item">
  <div class="pub-thumbnail">
    <img src="/images/bsc_preview.png" alt="BSc Thesis Preview" onerror="this.style.display='none'">
  </div>
  <div class="pub-content">
    <div class="pub-title">Virtual Gimbal Camera: Digitalization of a Mechanical Gimbal System</div>
    <div class="pub-authors">Dennis Berntsson, Robin Boregrim, Axel Gard, Ahmad Hanash, Anna Larsson, Peter Wickenberg, Carl Wikström, and <strong>Emil Wiman</strong></div>
    <div class="pub-venue">Bachelor's Thesis, Linköping University, 2021</div>
    <div class="pub-buttons">
      <a href="javascript:void(0)" onclick="toggleAbstract('bsc')" class="pub-btn">Abs</a>
      <a href="javascript:void(0)" onclick="toggleBibtex('bsc')" class="pub-btn">Bib</a>
      <a href="https://liu.diva-portal.org/smash/get/diva2:1567639/FULLTEXT01.pdf" class="pub-btn">PDF</a>
      <a href="https://www.synclairvision.com/" class="pub-btn">Spin-off</a>
    </div>
    <div id="abs-bsc" class="pub-abstract">
      This thesis describes the development of a virtual gimbal camera system, created in collaboration with the Swedish Sea Rescue Society (Sjöräddningssällskapet). The project aimed to digitalize a mechanical gimbal system used for search and rescue operations, enabling more flexible and efficient camera control. The work resulted in a software solution that has since been developed into a commercial product through the spin-off company Synclair Vision.
    </div>
    <div id="bib-bsc" class="pub-bibtex">
<pre>@bachelorsthesis{berntsson2021virtual,
  title = {Virtual Gimbal Camera: Digitalization of a Mechanical Gimbal System},
  author = {Berntsson, Dennis and Boregrim, Robin and Gard, Axel and Hanash, Ahmad and Larsson, Anna and Wickenberg, Peter and Wikstr{\"o}m, Carl and Wiman, Emil},
  school = {Link{\"o}ping University},
  year = {2021},
  type = {Bachelor's Thesis},
}</pre>
    </div>
  </div>
</div>

