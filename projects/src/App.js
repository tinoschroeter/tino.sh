import React, { useState } from "react";

import Projects from "./components/Projects.js";

import raspberryPiCluster from "./img/raspberry-pi-cluster.png"
import asteroids from "./img/asteroids.png"
import beer from "./img/beer.png"
import bos from "./img/bos.jpg"
import dotfiles from "./img/dotfiles.png"
import migrateV from "./img/migrateV.png"
import mittag from "./img/mittag.png"
import regen from "./img/regen.png"
import translate from "./img/translate.png"
import kino from "./img/kino.png"
import fastly_top from "./img/fastly_top.png"
import zabbix from "./img/zabbix.png"

const App = () => {
  const [projects, setProjects] = useState([
    {
      title: "Kubernetes Homelab",
      link: "https://github.com/tinoschroeter/k8s.homelab#readme",
      image: raspberryPiCluster,
      imageAlt: "Kubernetes Homelab Logo",
      text: "Kubernetes home-lab built with 4 Raspberry Pi's.",
      technology: "[Node.js]"
    },
    {
      title: "Bash on Steroids",
      link: "https://github.com/tinoschroeter/bash_on_steroids#readme",
      image: bos,
      imageAlt: "Bash on Steroids Logo",
      text: "Use Bash to write beautiful web apps in CGI Style.",
      technology: "[Bash]"
    },
    {
      title: "Dotfiles",
      link: "https://github.com/tinoschroeter/dotfiles#readme",
      image: dotfiles,
      imageAlt: "Dotfiles Logo",
      text: "My dotfiles and Ansible Playbooks to setup my Personal PC and Laptop.",
      technology: "[Ansible]"
    },
    {
      title: "Asteroids",
      link: "https://github.com/tinoschroeter/asteroids#readme",
      image: asteroids,
      imageAlt: "Asteroids Logo",
      text: "Simple Webserver/Ingress visualization built in p5.js.",
      technology: "[JavaScript]"
    },
    {
      title: "Translate",
      link: "https://github.com/tinoschroeter/translate#readme",
      image: translate,
      imageAlt: "Translate Logo",
      text: "Tranlate direct in your Terminal.",
      technology: "[Node.js]"
    },
    {
      title: "BeerCount",
      link: "https://github.com/tinoschroeter/beerCount#readme",
      image: beer,
      imageAlt: "beerCount Logo",
      text: "Count your beers",
      technology: "[React]"
    },
    {
      title: "Fastly Top Monitor",
      link: "https://github.com/tinoschroeter/fastly_top_monitor#readme",
      image: fastly_top,
      imageAlt: "Fastly Top MonitorLogo",
      text: "Show Fastly statistics in your Terminal.",
      technology: "[Bash]"
    },
    {
      title: "Regen",
      link: "https://github.com/tinoschroeter/regen#readme",
      image: regen,
      imageAlt: "Regen Logo",
      text: "Very basic Node.js app running on Cloud Run and tell me if it's rainy outside.",
      technology: "[Node.js]"
    },
    {
      title: "mittag.essen",
      link: "https://github.com/tinoschroeter/mittag.essen#readme",
      image: mittag,
      imageAlt: "mittag.essen Logo",
      text: "Random Meal recommendation running on cli and built with React Ink.",
      technology: "[React]"
    },
    {
      title: "Kino",
      link: "https://github.com/tinoschroeter/kino#readme",
      image: kino,
      imageAlt: "Kino Logo",
      text: "Find the best movies on Netflix, Prime and on Theater.",
      technology: "[Next.js]"
    },
    {
      title: "MigrateV",
      link: "https://github.com/tinoschroeter/migrateV#readme",
      image: migrateV,
      imageAlt: "MigrateV Logo",
      text: "Migrate Virtual Server from one Hypervisor to another one.",
      technology: "[Bash]"
    },
    {
      title: "Zabbix Monitor",
      link: "https://github.com/tinoschroeter/zabbix_monitor#readme",
      image: zabbix,
      imageAlt: "Zabbix Monitor Logo",
      text: "Show all your Zabbix alerts in one place.",
      technology: "[Bash]"
    },
  ]);

  return (
    <main className="page-content">
      <h1 className="page-title">Projects</h1>
      <ul className="projects">
        {projects.map((item) => (
          <Projects key={item.title} item={item} />
        ))}
      </ul>
      <section className="center">
        <div margin-bottom="0.5rem">
          See more of my projects and code{" "}
          <a href="https://github.com/tinoschroeter?tab=repositories">on Github.</a>
        </div>
      </section>
    </main>
  );
};

export default App;
