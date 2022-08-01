import { decode } from "blurhash";
import { useRef, useEffect } from "react";

type Props = {
  small: string;
  large: string;
  blurhash: string;
  width: number;
  height: number;
};

export default function Image({
  small,
  large,
  blurhash,
  width,
  height,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current !== null) {
      const pixels = decode(blurhash, 32, 32);

      const ctx = canvasRef.current.getContext("2d");
      if (ctx !== null) {
        const imageData = new ImageData(pixels, 32, 32);
        ctx.putImageData(imageData, 0, 0);
      }
    }
  }, [blurhash, height, width]);

  return (
    <div className="aspect-w-4 aspect-h-3 mb-6">
      <canvas
        className="rounded-lg object-cover object-center"
        ref={canvasRef}
        width="32"
        height="32"
      />
      <img
        className="rounded-lg object-cover object-center"
        alt=""
        srcSet={`${small} 640w, ${large} 1920w`}
        sizes="(max-width: 700px) 640px, 1920px"
        src={large}
      />
    </div>
  );
}
