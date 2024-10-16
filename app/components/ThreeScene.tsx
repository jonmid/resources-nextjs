'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Configuración de la escena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Añadir el renderer al DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Crear un cubo con MeshStandardMaterial
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Añadir luz ambiental y luz direccional
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Posicionar la cámara
    camera.position.z = 5;

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);
      // Rotar el cubo
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Actualizar la cámara para crear un movimiento
      camera.position.x = Math.sin(Date.now() * 0.001) * 5;
      camera.position.y = Math.sin(Date.now() * 0.001) * 2;
      camera.lookAt(cube.position);

      renderer.render(scene, camera);
    };

    animate();

    // Limpiar la escena al desmontar el componente
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeScene;
