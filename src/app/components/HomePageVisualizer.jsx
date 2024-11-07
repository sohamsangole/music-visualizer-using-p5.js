import React, { useEffect } from 'react';
import p5 from 'p5';

const HomePageVisualizer = () => {
    useEffect(() => {
        const sketch = (p) => {
            p.setup = () => {
                p.createCanvas(400, 400);
                p.background(0);
            };

            p.draw = () => {
                p.fill(255, 0, 0);
                p.ellipse(p.mouseX, p.mouseY, 50, 50);
            };
        };

        const myP5 = new p5(sketch, 'p5-canvas-container');

        return () => {
            myP5.remove();
        };
    }, []);

    return <div
        id="p5-canvas-container"
        style={{
            width: '400px',
            height: '400px',
            borderRadius: '20px',
            overflow: 'hidden',
        }}
    >
    </div>;
};

export default HomePageVisualizer;
