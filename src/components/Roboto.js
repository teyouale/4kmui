import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
// import "../css/threecss.css";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { GUI } from "three/examples/jsm/libs/dat.gui.module.js";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import RobotExpressive from "../assets/RobotExpressive.glb";
let container, stats, clock, gui, mixer, actions, activeAction, previousAction;
let camera, scene, renderer, model, face;
const api = { state: "Walking" };
export class Roboto extends Component {
	componentDidMount() {
		const onWindowResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(window.innerWidth, window.innerHeight);
		};
		const fadeToAction = (name, duration) => {
			previousAction = activeAction;
			activeAction = actions[name];

			if (previousAction !== activeAction) {
				previousAction.fadeOut(duration);
			}

			activeAction
				.reset()
				.setEffectiveTimeScale(1)
				.setEffectiveWeight(1)
				.fadeIn(duration)
				.play();
		};
		const createGUI = (model, animations) => {
			const states = [
				"Idle",
				"Walking",
				"Running",
				"Dance",
				"Death",
				"Sitting",
				"Standing",
			];
			const emotes = ["Jump", "Yes", "No", "Wave", "Punch", "ThumbsUp"];

			mixer = new THREE.AnimationMixer(model);

			actions = {};

			for (let i = 0; i < animations.length; i++) {
				const clip = animations[i];
				const action = mixer.clipAction(clip);
				actions[clip.name] = action;

				if (emotes.indexOf(clip.name) >= 0 || states.indexOf(clip.name) >= 4) {
					action.clampWhenFinished = true;
					action.loop = THREE.LoopOnce;
				}
			}

			function createEmoteCallback(name) {
				api[name] = function () {
					fadeToAction(name, 0.2);

					mixer.addEventListener("finished", restoreState);
				};

				// emoteFolder.add(api, name);
			}

			function restoreState() {
				mixer.removeEventListener("finished", restoreState);

				fadeToAction(api.state, 0.2);
			}

			for (let i = 0; i < emotes.length; i++) {
				createEmoteCallback(emotes[i]);
			}

			// emoteFolder.open();
			var RandomState = Math.floor(Math.random() * (states.length - 1) + 1);

			activeAction = actions[states[RandomState]];

			fadeToAction(emotes[3], 0.2);
			const reload = () => {
				setTimeout(() => {
					var RandomEmotes = Math.floor(
						Math.random() * (emotes.length - 1) + 1,
					);
					fadeToAction(emotes[RandomEmotes], 0.2);
					reload();
				}, 5000);
			};
			reload();
			activeAction.play();
		};

		const init = () => {
			container = document.createElement("div");
			// document.body.appendChild(container);
			this.mount.appendChild(container);

			camera = new THREE.PerspectiveCamera(
				40,
				window.innerWidth / window.innerHeight,
				0.25,
				100,
			);
			// camera.position.set(-5, 3, 10);
			camera.position.set(-5, 3, 10);
			camera.lookAt(new THREE.Vector3(5, 2, 0));

			scene = new THREE.Scene();
			// scene.background = new THREE.Color(0xe0e0e0);
			// scene.fog = new THREE.Fog(0xe0e0e0, 20, 100);

			// var glassCube = createCube(1, materials.glass, 0, 0, 2),
			// 	cube = createCube(1, materials.sand, 0, 0, 0);

			// scene
			// var scene = new THREE.Scene();

			// scene.add(glassCube);
			// scene.add(cube);

			clock = new THREE.Clock();

			// lights

			const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
			hemiLight.position.set(0, 20, 0);
			scene.add(hemiLight);

			const dirLight = new THREE.DirectionalLight(0xffffff);
			dirLight.position.set(0, 20, 10);
			scene.add(dirLight);

			// model

			const loader = new GLTFLoader();
			loader.load(
				RobotExpressive,
				function (gltf) {
					model = gltf.scene;
					scene.add(model);

					createGUI(model, gltf.animations);
				},
				undefined,
				function (e) {
					console.error(e);
				},
			);

			renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			renderer.setClearColor(0x000000, 0);
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize((3 * window.innerWidth) / 4, window.innerHeight);
			// renderer.setSize(500, 500);
			renderer.outputEncoding = THREE.sRGBEncoding;
			container.appendChild(renderer.domElement);
			// this.mount.appendChild(renderer.domElement);
			// window.addEventListener("resize", onWindowResize);

			// stats
			stats = new Stats();
			container.appendChild(stats.dom);
			// this.mount.appendChild(stats.dom);
		};
		const animate = () => {
			const dt = clock.getDelta();

			if (mixer) mixer.update(dt);

			requestAnimationFrame(animate);

			renderer.render(scene, camera);

			stats.update();
		};

		init();
		animate();
		// var scene = new THREE.Scene();
		// var camera = new THREE.PerspectiveCamera(
		// 	75,
		// 	window.innerWidth / window.innerHeight,
		// 	0.1,
		// 	1000,
		// );
		// var renderer = new THREE.WebGLRenderer();
		// renderer.setSize(window.innerWidth, window.innerHeight);
		// // document.body.appendChild( renderer.domElement );
		// // use ref as a mount point of the Three.js scene instead of the document.body
		// this.mount.appendChild(renderer.domElement);
		// var geometry = new THREE.BoxGeometry(1, 1, 1);
		// var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		// var cube = new THREE.Mesh(geometry, material);
		// scene.add(cube);
		// camera.position.z = 5;
		// var animate = function () {
		// 	requestAnimationFrame(animate);
		// 	cube.rotation.x += 0.01;
		// 	cube.rotation.y += 0.01;
		// 	renderer.render(scene, camera);
		// };
		// animate();
		// === THREE.JS EXAMPLE CODE END ===
	}

	render() {
		return <div className='' ref={(ref) => (this.mount = ref)} />;
	}
}

export default Roboto;
