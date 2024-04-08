interface Image {
	id?: string;
	className?: string;
	src: string;
	alt: string;
}

interface ImageProp extends Image {
     marqueeTurn:marqueeTurn
}

interface MarqueeProp {
	/**
	 * @interface Image[]
	 *   - id?:string,
	 *   - className?:string,
	 *   - src:string,
	 *   - alt:string
	 */
	images: Image[];
	speed: number;
	ease?: gsap.EaseString | gsap.EaseFunction | undefined;
	/**
	 * percent string. (ex. 100%)
	 */
	offset?: string;
	className?: string;
	style?: React.CSSProperties | undefined;
	rounded?: string;
}

type marqueeTurn = "marquee-playing" | "marquee-next" | "marquee-prev" | "";

export { MarqueeProp, Image, ImageProp, marqueeTurn };
