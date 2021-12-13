/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AwesomeParallax {
        /**
          * Perspective of the parallax container.
         */
        "perspective": number;
    }
    interface AwesomeParallaxLayer {
        /**
          * Depth of the layer. 0 is the base layer, negative means farther and positive means nearer.   The value should be less than the container's perspective value.
         */
        "depth": number;
    }
}
declare global {
    interface HTMLAwesomeParallaxElement extends Components.AwesomeParallax, HTMLStencilElement {
    }
    var HTMLAwesomeParallaxElement: {
        prototype: HTMLAwesomeParallaxElement;
        new (): HTMLAwesomeParallaxElement;
    };
    interface HTMLAwesomeParallaxLayerElement extends Components.AwesomeParallaxLayer, HTMLStencilElement {
    }
    var HTMLAwesomeParallaxLayerElement: {
        prototype: HTMLAwesomeParallaxLayerElement;
        new (): HTMLAwesomeParallaxLayerElement;
    };
    interface HTMLElementTagNameMap {
        "awesome-parallax": HTMLAwesomeParallaxElement;
        "awesome-parallax-layer": HTMLAwesomeParallaxLayerElement;
    }
}
declare namespace LocalJSX {
    interface AwesomeParallax {
        /**
          * Invoke when the content is scrolled.
         */
        "onContentScroll"?: (event: CustomEvent<{ scrollTop: number, scrollHeight: number }>) => void;
        /**
          * Perspective of the parallax container.
         */
        "perspective"?: number;
    }
    interface AwesomeParallaxLayer {
        /**
          * Depth of the layer. 0 is the base layer, negative means farther and positive means nearer.   The value should be less than the container's perspective value.
         */
        "depth"?: number;
    }
    interface IntrinsicElements {
        "awesome-parallax": AwesomeParallax;
        "awesome-parallax-layer": AwesomeParallaxLayer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "awesome-parallax": LocalJSX.AwesomeParallax & JSXBase.HTMLAttributes<HTMLAwesomeParallaxElement>;
            "awesome-parallax-layer": LocalJSX.AwesomeParallaxLayer & JSXBase.HTMLAttributes<HTMLAwesomeParallaxLayerElement>;
        }
    }
}