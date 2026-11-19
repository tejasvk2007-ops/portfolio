"use client";

import { useEffect, useRef } from "react";

// Lightweight interactive 3D hero using plain `three` (no react-three-fiber).
// Glossy lavender / white floating spheres and shapes that tilt gently
// with the pointer and idle-animate. SSR-safe: everything runs inside
// useEffect, and the component is dynamically imported with ssr: false.
// If WebGL is unavailable, or the user prefers reduced motion, the
// canvas simply stays empty and the normal hero text shows — no error.
export default function Hero3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    let renderer;
    let rafId;
    let disposed = false;
    let running = true;
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallScreen =
      typeof window !== "undefined" && window.innerWidth < 640;

    const pointer = { x: 0, y: 0 };
    const targetPointer = { x: 0, y: 0 };

    const onPointerMove = (e) => {
      const rect = mount.getBoundingClientRect();
      targetPointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      targetPointer.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    const onPointerLeave = () => {
      targetPointer.x = 0;
      targetPointer.y = 0;
    };
    const onVisibility = () => {
      running = !document.hidden;
      if (running && !reducedMotion) startLoop();
    };

    let animate = () => {};
    let startLoop = () => {};
    let onResize = () => {};

    import("three")
      .then((THREE) => {
        if (disposed || !mount) return;

        // WebGL support check — bail out quietly if unavailable.
        let gl;
        try {
          gl = mount.ownerDocument
            .createElement("canvas")
            .getContext("webgl2") ||
            mount.ownerDocument.createElement("canvas").getContext("webgl");
        } catch {
          gl = null;
        }
        if (!gl) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          45,
          mount.clientWidth / Math.max(mount.clientHeight, 1),
          0.1,
          100
        );
        camera.position.set(0, 0, 9);

        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          powerPreference: "low-power",
        });
        // Cap pixel ratio for performance; lower still on phones.
        renderer.setPixelRatio(
          Math.min(window.devicePixelRatio || 1, isSmallScreen ? 1.25 : 1.75)
        );
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.domElement.setAttribute("aria-hidden", "true");
        mount.appendChild(renderer.domElement);

        scene.add(new THREE.AmbientLight(0xffffff, 0.7));
        const key = new THREE.DirectionalLight(0xffffff, 1.4);
        key.position.set(4, 6, 6);
        scene.add(key);
        const lavender = new THREE.PointLight(0xa78bfa, 30, 30);
        lavender.position.set(-4, -2, 4);
        scene.add(lavender);

        const group = new THREE.Group();
        scene.add(group);

        const glossy = (color, roughness = 0.15) =>
          new THREE.MeshStandardMaterial({
            color,
            metalness: 0.35,
            roughness,
          });

        const shapes = [];
        const addShape = (mesh, x, y, z, spin = 0.003) => {
          mesh.position.set(x, y, z);
          mesh.userData = { baseY: y, spin, phase: Math.random() * Math.PI * 2 };
          group.add(mesh);
          shapes.push(mesh);
          return mesh;
        };

        // Main glossy lavender sphere.
        addShape(
          new THREE.Mesh(new THREE.SphereGeometry(1.35, 48, 48), glossy(0xa78bfa, 0.12)),
          0, 0.2, 0, 0.004
        );
        // White satellite sphere.
        addShape(
          new THREE.Mesh(new THREE.SphereGeometry(0.55, 32, 32), glossy(0xffffff, 0.08)),
          2.1, 1.1, -0.5, 0.006
        );
        // Small deep-purple sphere.
        addShape(
          new THREE.Mesh(new THREE.SphereGeometry(0.4, 32, 32), glossy(0x7c3aed, 0.18)),
          -2.2, -1.1, 0.3, 0.005
        );
        // Lavender torus ring around the main sphere.
        addShape(
          new THREE.Mesh(new THREE.TorusGeometry(2.15, 0.07, 16, 80), glossy(0xc4b5fd, 0.25)),
          0, 0.2, -0.8, 0.002
        );
        if (!isSmallScreen) {
          // Extra shapes only on larger screens, to keep phones light.
          addShape(
            new THREE.Mesh(new THREE.IcosahedronGeometry(0.55, 0), glossy(0xc4b5fd, 0.2)),
            2.3, -1.3, 0.5, 0.005
          );
          addShape(
            new THREE.Mesh(new THREE.OctahedronGeometry(0.45, 0), glossy(0xffffff, 0.15)),
            -2.4, 1.3, -0.3, 0.006
          );
        }
        group.children[3].rotation.x = Math.PI / 2.6;

        const clock = new THREE.Clock();
        const renderOnce = () => renderer.render(scene, camera);

        animate = () => {
          if (disposed) return;
          rafId = requestAnimationFrame(animate);
          if (!running) return;
          const t = clock.getElapsedTime();
          pointer.x += (targetPointer.x - pointer.x) * 0.05;
          pointer.y += (targetPointer.y - pointer.y) * 0.05;
          group.rotation.y = pointer.x * 0.35 + t * 0.08;
          group.rotation.x = -pointer.y * 0.25;
          shapes.forEach((mesh) => {
            mesh.rotation.y += mesh.userData.spin;
            mesh.rotation.x += mesh.userData.spin * 0.6;
            mesh.position.y =
              mesh.userData.baseY + Math.sin(t * 0.8 + mesh.userData.phase) * 0.12;
          });
          renderOnce();
        };

        // Idempotent starter: the visibility / intersection observers
        // can fire repeatedly, but only one animation loop may run.
        let loopActive = false;
        startLoop = () => {
          if (loopActive || disposed) return;
          loopActive = true;
          animate();
        };

        onResize = () => {
          if (!mount || disposed) return;
          const w = mount.clientWidth;
          const h = Math.max(mount.clientHeight, 1);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
          renderOnce();
        };

        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("resize", onResize);
        mount.addEventListener("pointerleave", onPointerLeave);
        document.addEventListener("visibilitychange", onVisibility);

        // Pause when scrolled out of view.
        const observer = new IntersectionObserver(
          ([entry]) => {
            running = entry.isIntersecting && !document.hidden;
            if (running && !reducedMotion) startLoop();
          },
          { threshold: 0 }
        );
        observer.observe(mount);

        if (reducedMotion) {
          // Static frame only — no animation loop.
          renderOnce();
        } else {
          startLoop();
        }

        // Keep a cleanup handle for the observer.
        mount._heroObserver = observer;
      })
      .catch(() => {
        // three failed to load / WebGL unavailable: leave the hero
        // text as-is, with no error shown to the visitor.
      });

    return () => {
      disposed = true;
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      if (mount) {
        mount.removeEventListener("pointerleave", onPointerLeave);
        if (mount._heroObserver) mount._heroObserver.disconnect();
        if (renderer) {
          renderer.dispose();
          if (renderer.domElement.parentNode === mount) {
            mount.removeChild(renderer.domElement);
          }
        }
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="hero-3d"
      aria-hidden="true"
      role="presentation"
    />
  );
}
