  // Importing the original mapper + our components according to the Docusaurus doc
import React, { useRef, Suspense } from 'react'
import MDXComponents from '@theme-original/MDXComponents';
import ImageOnClick from '@site/src/components/ImageOnClick';

// Importing the Canvas and useGLTF hook from react-three-fiber and drei respectively
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'

// Importing the reactplayer for viewing videos
// Hmm - I really thought this would work, but I still have to import it 
import ReactPlayer from 'react-player'

// Creating Model and ModelViewer components
// Model component to load and display the 3D model
const Model = ({ modelPath }) => {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} />;
};
  
const ModelViewer = ({ modelPath }) => (
  <Canvas camera={{
      position: [-0.01, 0.1, 0.1], // Set initial position (x, y, z)
      fov: 45, // Set field of view
      near: 0.05, // Set near clipping plane
      far: .2, // Set far clipping plane
    }}>
    <ambientLight intensity={100} />
    <directionalLight position={[-2, 5, 2]} intensity={10} />
    <Suspense>
      <Model modelPath={modelPath} />
    </Suspense>
    <OrbitControls />
  </Canvas>
);


const ContentWarning = ({ imgSrc, alt }) => {
    const [showContent, setShowContent] = React.useState(false);

    return (
      <div>
        <div aria-live="polite">
          <img
            style={{ filter: !showContent ? "blur(2.5rem)" : "none" }}
            src={imgSrc}
            alt={showContent ? alt : ""}
            onClick={() => setShowContent(!showContent)}
          />
        </div>
      </div>
    );
  }; 


export default {
    // Reusing the default mapping
    ...MDXComponents,
    ImageOnClick,
    ModelViewer,
    ReactPlayer,
    ContentWarning,
};