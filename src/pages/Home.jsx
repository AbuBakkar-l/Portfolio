import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  GlobalStyles,
  IconButton,
  Typography,
  Button,
  TextField,
  Alert,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FiCode, FiSmartphone, FiRepeat, FiLayout } from "react-icons/fi";
import {
  SiReact,
  SiMui,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiPython,
  SiGit,
  SiGithub,
  SiJson,
} from "react-icons/si";

import profileImg from "../Assets/img/profile.webp";
import project1 from "../Assets/img/project1.png";
import project2 from "../Assets/img/project2.png";

// Paste your Formspree endpoint here. While empty, the form opens the visitor's email app.
const FORM_ENDPOINT = "https://formspree.io/f/mgaklglv";

const BG = "#07080d";
const TEXT = "#E8ECF5";
const MUTED = "#8A94A8";
const BLUE = "#5B8CFF";
const CYAN = "#22D3EE";
const VIOLET = "#A78BFA";
const GRADIENT = `linear-gradient(90deg, ${BLUE}, ${CYAN}, ${VIOLET}, ${BLUE})`;
const GLASS = "rgba(255,255,255,0.04)";
const LINE = "1px solid rgba(255,255,255,0.09)";

const NAV = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const ROLES = [
  "Frontend Developer",
  "Software Engineer Intern at RMI",
  "React Developer",
];

const SERVICES = [
  { icon: <FiCode />, title: "Frontend Development", text: "Fast, clean web apps built with React and Material UI." },
  { icon: <FiSmartphone />, title: "Responsive Design", text: "Interfaces that work on phones, tablets and desktops." },
  { icon: <FiRepeat />, title: "API Integration", text: "Frontends connected to APIs with proper loading and error states." },
  { icon: <FiLayout />, title: "Portfolio & Landing Pages", text: "Modern, mobile-friendly pages that present you well." },
];

const SKILLS = [
  { name: "React JS", icon: <SiReact /> },
  { name: "Material UI", icon: <SiMui /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Python", icon: <SiPython /> },
  { name: "JSON", icon: <SiJson /> },
  { name: "AJAX", icon: <FiCode /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
];

const PROJECTS = [
  {
    title: "Movie Recommendation App",
    text: "Discover and explore movies with personalized recommendations.",
    tech: ["React.js", "API", "JavaScript"],
    image: project1,
    link: "https://github.com/AbuBakkar-l/movie-app",
  },
  {
    title: "Personal Portfolio Website",
    text: "A modern, responsive portfolio showcasing my skills, projects and experience.",
    tech: ["React.js", "Material UI", "JavaScript"],
    image: project2,
    link: "https://github.com/AbuBakkar-l/Portfolio",
  },
];

const SOCIAL = [
  { name: "GitHub", url: "https://github.com/AbuBakkar-l", icon: <GitHubIcon /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/abu-bakkar121/", icon: <LinkedInIcon /> },
  { name: "Email", url: "mailto:amabubakar121@gmail.com", icon: <EmailOutlinedIcon /> },
];

const keyframes = `
  body { margin: 0; background: ${BG}; }
  @keyframes rise { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
  @keyframes letterUp { from { opacity: 0; transform: translateY(70%) rotate(6deg); } to { opacity: 1; transform: none; } }
  @keyframes slideIn { from { transform: translateX(100%); } to { transform: none; } }
  @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes shimmer { to { background-position: 200% center; } }
  @keyframes blink { 50% { opacity: 0; } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(34,211,238,.6); } 100% { box-shadow: 0 0 0 10px rgba(34,211,238,0); } }
  @keyframes orbA { 0%,100% { transform: translate(0,0); } 50% { transform: translate(60px,40px); } }
  @keyframes orbB { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-50px,-60px); } }
  .rise { opacity: 0; animation: rise .75s cubic-bezier(.2,.7,.2,1) forwards; }
  @media (prefers-reduced-motion: reduce) {
    * { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
  }
`;

// Drifting particle network that reacts to the mouse
const Particles = () => {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    const ctx = c.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -999, y: -999 };
    let w = 0;
    let h = 0;
    let raf = 0;
    const resize = () => {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
    };
    resize();
    const count = Math.min(80, Math.floor((w * h) / 18000));
    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));
    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.hypot(dx, dy);
        if (d > 0 && d < 120) {
          p.x += (dx / d) * 1.4;
          p.y += (dy / d) * 1.4;
        }
        ctx.fillStyle = "rgba(140,175,255,0.85)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(91,140,255,${0.2 * (1 - dist / 130)})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);
  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    />
  );
};

// Types and deletes the roles one after another
const useTypewriter = (words) => {
  const [text, setText] = useState("");
  useEffect(() => {
    let i = 0;
    let j = 0;
    let deleting = false;
    let timer;
    const tick = () => {
      const word = words[i];
      setText(word.slice(0, j));
      if (!deleting && j < word.length) {
        j += 1;
        timer = setTimeout(tick, 85);
      } else if (!deleting) {
        deleting = true;
        timer = setTimeout(tick, 1500);
      } else if (j > 0) {
        j -= 1;
        timer = setTimeout(tick, 40);
      } else {
        deleting = false;
        i = (i + 1) % words.length;
        timer = setTimeout(tick, 350);
      }
    };
    tick();
    return () => clearTimeout(timer);
  }, [words]);
  return text;
};

const Rise = ({ i = 0, children, sx }) => (
  <Box className="rise" sx={sx} style={{ animationDelay: `${120 + i * 90}ms` }}>
    {children}
  </Box>
);

const inputSx = {
  "& .MuiOutlinedInput-root": {
    color: TEXT,
    backgroundColor: GLASS,
    borderRadius: "12px",
    fontSize: "14px",
    "& fieldset": { borderColor: "rgba(255,255,255,0.12)" },
    "&:hover fieldset": { borderColor: BLUE },
    "&.Mui-focused fieldset": { borderColor: CYAN },
  },
  "& input::placeholder, & textarea::placeholder": { color: MUTED, opacity: 1 },
};

const ContactForm = () => {
  const [status, setStatus] = useState("idle");
  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio Contact from ${data.get("name")}`);
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\nMessage:\n${data.get("message")}`,
      );
      window.location.href = `mailto:amabubakar121@gmail.com?subject=${subject}&body=${body}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  return (
    <Box component="form" onSubmit={submit} sx={{ display: "grid", gap: 2 }}>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
        <TextField name="name" placeholder="Your Name" required sx={inputSx} />
        <TextField name="email" type="email" placeholder="Your Email" required sx={inputSx} />
      </Box>
      <TextField name="message" placeholder="Write your message..." multiline rows={5} required sx={inputSx} />
      <Button
        type="submit"
        disabled={status === "sending"}
        endIcon={<SendRoundedIcon />}
        sx={{
          background: GRADIENT,
          backgroundSize: "200% auto",
          color: "#06070b",
          fontWeight: 700,
          textTransform: "none",
          borderRadius: "12px",
          py: 1.3,
          transition: "background-position .5s, transform .2s",
          "&:hover": { backgroundPosition: "right center", transform: "translateY(-2px)" },
        }}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>
      {status === "success" && (
        <Alert severity="success" variant="outlined" sx={{ color: TEXT }}>
          Thanks! Your message was sent. I'll reply soon.
        </Alert>
      )}
      {status === "error" && (
        <Alert severity="error" variant="outlined" sx={{ color: TEXT }}>
          Couldn't send. Please email amabubakar121@gmail.com instead.
        </Alert>
      )}
    </Box>
  );
};

const card = {
  background: GLASS,
  border: LINE,
  borderRadius: "18px",
  p: 2.5,
  transition: "transform .3s, border-color .3s, box-shadow .3s",
  "&:hover": {
    transform: "translateY(-6px)",
    borderColor: "rgba(91,140,255,0.5)",
    boxShadow: "0 14px 40px rgba(91,140,255,0.15)",
  },
};

const PANELS = {
  about: () => (
    <>
      <Rise i={0} sx={{ display: "flex", gap: 3, flexWrap: "wrap", alignItems: "center", mb: 3 }}>
        <Box
          role="img"
          aria-label="Abu Bakkar"
          sx={{
            width: 150,
            height: 150,
            borderRadius: "24px",
            border: LINE,
            backgroundColor: "#0d1220",
            backgroundImage: `url(${profileImg})`,
            backgroundSize: "220%",
            backgroundPosition: "52% 0%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Typography sx={{ color: MUTED, lineHeight: 1.9, flex: 1, minWidth: 240 }}>
          I'm a passionate Frontend Developer and Software Engineer Intern at RMI.
          I turn ideas into beautiful, responsive and functional web applications
          that deliver meaningful user experiences.
        </Typography>
      </Rise>
      <Box sx={{ display: "grid", gap: 1.5 }}>
        {[
          "Software Engineer Intern at RMI",
          "BSCS Graduate",
          "2+ Years of Web Development Experience",
          "AI & Machine Learning Enthusiast",
        ].map((item, i) => (
          <Rise key={item} i={i + 1} sx={{ ...card, py: 1.6, display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: CYAN, animation: "pulse 1.8s infinite" }} />
            <Typography sx={{ fontWeight: 600 }}>{item}</Typography>
          </Rise>
        ))}
      </Box>
    </>
  ),
  services: () => (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
      {SERVICES.map((s, i) => (
        <Rise key={s.title} i={i} sx={card}>
          <Box sx={{ fontSize: 26, color: CYAN, mb: 1.5, display: "flex" }}>{s.icon}</Box>
          <Typography sx={{ fontWeight: 700, mb: 0.5 }}>{s.title}</Typography>
          <Typography sx={{ color: MUTED, fontSize: "14px", lineHeight: 1.7 }}>{s.text}</Typography>
        </Rise>
      ))}
    </Box>
  ),
  skills: () => (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)" }, gap: 1.5 }}>
      {SKILLS.map((s, i) => (
        <Rise
          key={s.name}
          i={i * 0.5}
          sx={{ ...card, display: "flex", alignItems: "center", gap: 1.5, p: 2, "&:hover": { ...card["&:hover"], "& svg": { color: CYAN, transform: "scale(1.2) rotate(-6deg)" } } }}
        >
          <Box sx={{ fontSize: 24, display: "flex", color: BLUE, "& svg": { transition: "all .3s" } }}>{s.icon}</Box>
          <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>{s.name}</Typography>
        </Rise>
      ))}
    </Box>
  ),
  projects: () => (
    <Box sx={{ display: "grid", gap: 2.5 }}>
      {PROJECTS.map((p, i) => (
        <Rise key={p.title} i={i} sx={{ ...card, p: 0, overflow: "hidden" }}>
          <Box component="img" src={p.image} alt={p.title} sx={{ width: "100%", height: 200, objectFit: "cover", display: "block", transition: "transform .6s", ".rise:hover &": { transform: "scale(1.05)" } }} />
          <Box sx={{ p: 2.5 }}>
            <Typography sx={{ fontWeight: 800, fontSize: "18px", mb: 0.5 }}>{p.title}</Typography>
            <Typography sx={{ color: MUTED, fontSize: "14px", lineHeight: 1.7, mb: 1.5 }}>{p.text}</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 2 }}>
              {p.tech.map((t) => (
                <Box key={t} sx={{ px: 1.4, py: 0.4, borderRadius: "100px", fontSize: "12px", color: BLUE, border: "1px solid rgba(91,140,255,0.35)" }}>{t}</Box>
              ))}
            </Box>
            <Button href={p.link} target="_blank" rel="noopener noreferrer" endIcon={<NorthEastIcon />} sx={{ p: 0, minWidth: 0, textTransform: "none", fontWeight: 700, color: CYAN }}>
              View Project
            </Button>
          </Box>
        </Rise>
      ))}
    </Box>
  ),
  contact: () => (
    <>
      <Rise i={0}>
        <Typography sx={{ color: MUTED, lineHeight: 1.8, mb: 2.5 }}>
          Have a project in mind? Reach out for collaboration, opportunities or just a friendly hello.
        </Typography>
      </Rise>
      <Rise i={1} sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 3 }}>
        {SOCIAL.map((s) => (
          <Button
            key={s.name}
            href={s.url}
            target={s.name === "Email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            startIcon={s.icon}
            sx={{ ...card, p: 0, px: 2, py: 1, textTransform: "none", color: TEXT, borderRadius: "100px" }}
          >
            {s.name}
          </Button>
        ))}
      </Rise>
      <Rise i={2}>
        <ContactForm />
      </Rise>
    </>
  ),
};

const Home = () => {
  const rootRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [panel, setPanel] = useState(null);
  const role = useTypewriter(ROLES);

  // Spotlight that follows the cursor
  const onMouseMove = (e) => {
    const el = rootRef.current;
    if (!el) return;
    el.style.setProperty("--mx", `${e.clientX}px`);
    el.style.setProperty("--my", `${e.clientY}px`);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setPanel(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Links like href="#projects" open the matching panel
  useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.replace("#", "");
      if (PANELS[id]) setPanel(id);
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const open = (id) => {
    setPanel(id);
    setMenuOpen(false);
  };

  const closeAll = () => {
    setPanel(null);
    setMenuOpen(false);
  };

  const Content = panel ? PANELS[panel] : null;
  const title = NAV.find((n) => n.id === panel)?.label;

  return (
    <Box
      ref={rootRef}
      onMouseMove={onMouseMove}
      sx={{
        "--mx": "50%",
        "--my": "40%",
        position: "relative",
        minHeight: "100dvh",
        overflow: "hidden",
        color: TEXT,
        fontFamily: "Inter, sans-serif",
        background: `radial-gradient(600px circle at var(--mx) var(--my), rgba(91,140,255,0.13), transparent 60%), ${BG}`,
      }}
    >
      <GlobalStyles styles={keyframes} />

      {/* Floating glow orbs + particles */}
      <Box sx={{ position: "absolute", top: "-10%", right: "-5%", width: 420, height: 420, borderRadius: "50%", background: "rgba(167,139,250,0.18)", filter: "blur(90px)", animation: "orbA 14s ease-in-out infinite" }} />
      <Box sx={{ position: "absolute", bottom: "-15%", left: "10%", width: 460, height: 460, borderRadius: "50%", background: "rgba(34,211,238,0.12)", filter: "blur(100px)", animation: "orbB 16s ease-in-out infinite" }} />
      <Particles />

      {/* Menu button */}
      <Box sx={{ position: "fixed", top: 18, left: 18, zIndex: 60, display: "flex", alignItems: "center", gap: 1.5 }}>
        <IconButton
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          sx={{
            width: 46,
            height: 46,
            color: TEXT,
            background: "rgba(255,255,255,0.07)",
            border: LINE,
            backdropFilter: "blur(10px)",
            transition: "transform .4s, background .3s",
            transform: menuOpen ? "rotate(90deg)" : "none",
            "&:hover": { background: "rgba(91,140,255,0.25)" },
          }}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Typography sx={{ display: { xs: "none", sm: "block" }, fontSize: "13px", fontWeight: 800, letterSpacing: "2px", color: MUTED }}>
          ABUBAKKAR.DEV
        </Typography>
      </Box>

      {/* Side bar */}
      {menuOpen && <Box onClick={() => setMenuOpen(false)} sx={{ position: "fixed", inset: 0, zIndex: 40, background: "rgba(0,0,0,0.45)" }} />}
      <Box
        component="aside"
        sx={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          width: 270,
          zIndex: 50,
          pt: 11,
          px: 2.5,
          background: "rgba(10,12,20,0.88)",
          backdropFilter: "blur(20px)",
          borderRight: LINE,
          transform: menuOpen ? "none" : "translateX(-105%)",
          transition: "transform .5s cubic-bezier(.7,0,.2,1)",
        }}
      >
        {[{ id: null, label: "Home" }, ...NAV].map((n, i) => (
          <Box
            key={n.label}
            component="button"
            onClick={() => (n.id ? open(n.id) : closeAll())}
            sx={{
              all: "unset",
              boxSizing: "border-box",
              width: "100%",
              display: "flex",
              alignItems: "baseline",
              gap: 1.5,
              py: 1.6,
              cursor: "pointer",
              borderBottom: LINE,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "none" : "translateX(-20px)",
              transition: `all .5s ease ${menuOpen ? 150 + i * 70 : 0}ms, color .2s, padding .3s`,
              color: panel === n.id ? CYAN : TEXT,
              "&:hover": { color: CYAN, pl: 1.5 },
            }}
          >
            <Box component="span" sx={{ fontSize: "11px", color: MUTED }}>0{i}</Box>
            <Box component="span" sx={{ fontSize: "22px", fontWeight: 700 }}>{n.label}</Box>
          </Box>
        ))}
      </Box>

      {/* HERO */}
      <Box
        component="section"
        id="home"
        sx={{
          position: "relative",
          zIndex: 2,
          minHeight: "100dvh",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
          alignItems: "center",
          gap: 4,
          px: { xs: 3, md: 10 },
          pt: { xs: 12, md: 4 },
          pb: 6,
        }}
      >
        <Box>
          <Rise i={0}>
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, px: 2, py: 0.8, borderRadius: "100px", border: LINE, background: GLASS, fontSize: "12px", color: MUTED, mb: 2.5 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: CYAN, animation: "pulse 1.8s infinite" }} />
              Welcome to my portfolio
            </Box>
          </Rise>

          <Typography sx={{ color: MUTED, fontSize: "18px", mb: 0.5 }}>Hi, I'm</Typography>
          <Typography
            component="h1"
            aria-label="Abu Bakkar"
            sx={{
              fontSize: "clamp(52px, 9vw, 112px)",
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-3px",
              mb: 1.5,
              background: GRADIENT,
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 6s linear infinite",
            }}
          >
            {"Abu Bakkar".split("").map((ch, i) => (
              <Box
                key={i}
                component="span"
                aria-hidden="true"
                sx={{ display: "inline-block", opacity: 0, animation: "letterUp .7s cubic-bezier(.2,.7,.2,1) forwards" }}
                style={{ animationDelay: `${300 + i * 70}ms` }}
              >
                {ch === " " ? "\u00A0" : ch}
              </Box>
            ))}
          </Typography>

          <Rise i={6}>
            <Typography sx={{ fontSize: { xs: "20px", md: "26px" }, fontWeight: 600, minHeight: 40, mb: 2 }}>
              {role}
              <Box component="span" sx={{ color: CYAN, animation: "blink 1s step-end infinite" }}>|</Box>
            </Typography>
          </Rise>

          <Rise i={7}>
            <Typography sx={{ color: MUTED, lineHeight: 1.9, maxWidth: 500, mb: 3.5 }}>
              I build modern, responsive and user-friendly web applications using
              React, MUI and more.
            </Typography>
          </Rise>

          <Rise i={8} sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
            <Button
              onClick={() => open("projects")}
              endIcon={<NorthEastIcon />}
              sx={{ background: GRADIENT, backgroundSize: "200% auto", color: "#06070b", fontWeight: 700, textTransform: "none", borderRadius: "100px", px: 3, py: 1.3, transition: "all .5s", "&:hover": { backgroundPosition: "right center", transform: "translateY(-3px)", boxShadow: "0 10px 30px rgba(91,140,255,0.35)" } }}
            >
              Explore My Projects
            </Button>
            <Button
              component="a"
              href="/Abu_Bakkar_CV.pdf"
              download="Abu_Bakkar_CV.pdf"
              sx={{ color: TEXT, border: "1px solid rgba(255,255,255,0.25)", textTransform: "none", fontWeight: 600, borderRadius: "100px", px: 3, py: 1.3, "&:hover": { borderColor: CYAN, color: CYAN, transform: "translateY(-3px)" } }}
            >
              Download CV ↓
            </Button>
          </Rise>

          <Rise i={9} sx={{ display: "flex", gap: 1.5 }}>
            {SOCIAL.map((s) => (
              <IconButton
                key={s.name}
                component="a"
                href={s.url}
                target={s.name === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.name}
                sx={{ color: TEXT, background: GLASS, border: LINE, transition: "all .3s", "&:hover": { color: CYAN, borderColor: CYAN, transform: "translateY(-4px)" } }}
              >
                {s.icon}
              </IconButton>
            ))}
          </Rise>
        </Box>

        {/* Portrait with glowing ring */}
        <Rise i={4} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 480,
              animation: "float 6s ease-in-out infinite",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: "8% 4% 4% 4%",
                borderRadius: "50%",
                background: GRADIENT,
                filter: "blur(60px)",
                opacity: 0.45,
                animation: "spin 12s linear infinite",
              },
            }}
          >
            <Box
              component="img"
              src={profileImg}
              alt="Abu Bakkar - Frontend Developer"
              sx={{ position: "relative", width: "100%", height: "auto", display: "block" }}
            />
          </Box>
        </Rise>
      </Box>

      {/* Panel that slides over the hero */}
      {panel && <Box onClick={() => setPanel(null)} sx={{ position: "fixed", inset: 0, zIndex: 44, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }} />}
      {panel && (
        <Box
          key={panel}
          component="section"
          id={panel}
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            width: { xs: "100%", md: "min(720px, 62vw)" },
            zIndex: 45,
            overflowY: "auto",
            background: "rgba(9,11,18,0.94)",
            backdropFilter: "blur(24px)",
            borderLeft: LINE,
            px: { xs: 3, md: 6 },
            py: { xs: 9, md: 7 },
            animation: "slideIn .6s cubic-bezier(.7,0,.2,1) forwards",
          }}
        >
          <IconButton
            onClick={() => setPanel(null)}
            aria-label="Close"
            sx={{ position: "absolute", top: 18, right: 18, color: TEXT, border: LINE, "&:hover": { color: CYAN, transform: "rotate(90deg)" }, transition: "transform .3s" }}
          >
            <CloseIcon />
          </IconButton>
          <Rise i={0}>
            <Typography sx={{ fontSize: "12px", letterSpacing: "3px", color: CYAN, mb: 1 }}>
              0{NAV.findIndex((n) => n.id === panel) + 1} / {title.toUpperCase()}
            </Typography>
            <Typography component="h2" sx={{ fontSize: { xs: "36px", md: "52px" }, fontWeight: 800, letterSpacing: "-2px", mb: 4 }}>
              {title}
              <Box component="span" sx={{ color: BLUE }}>.</Box>
            </Typography>
          </Rise>
          <Content />
        </Box>
      )}
    </Box>
  );
};

export default Home;
