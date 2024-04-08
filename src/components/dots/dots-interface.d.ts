type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type BasicColor = "AliceBlue"|"AntiqueWhite"|"Aqua"|"Aquamarine"|"Azure"|"Beige"|"Bisque"|"Black"|"BlanchedAlmond"|"Blue"|"BlueViolet"|"Brown"|"BurlyWood"|"CadetBlue"|"Chartreuse"|"Chocolate"|"Coral"|"CornflowerBlue"|"Cornsilk"|"Crimson"|"Cyan"|"DarkBlue"|"DarkCyan"|"DarkGoldenRod"|"DarkGray"|"DarkGrey"|"DarkGreen"|"DarkKhaki"|"DarkMagenta"|"DarkOliveGreen"|"DarkOrange"|"DarkOrchid"|"DarkRed"|"DarkSalmon"|"DarkSeaGreen"|"DarkSlateBlue"|"DarkSlateGray"|"DarkSlateGrey"|"DarkTurquoise"|"DarkViolet"|"DeepPink"|"DeepSkyBlue"|"DimGray"|"DimGrey"|"DodgerBlue"|"FireBrick"|"FloralWhite"|"ForestGreen"|"Fuchsia"|"Gainsboro"|"GhostWhite"|"Gold"|"GoldenRod"|"Gray"|"Grey"|"Green"|"GreenYellow"|"HoneyDew"|"HotPink"|"IndianRed"|"Indigo"|"Ivory"|"Khaki"|"Lavender"|"LavenderBlush"|"LawnGreen"|"LemonChiffon"|"LightBlue"|"LightCoral"|"LightCyan"|"LightGoldenRodYellow"|"LightGray"|"LightGrey"|"LightGreen"|"LightPink"|"LightSalmon"|"LightSeaGreen"|"LightSkyBlue"|"LightSlateGray"|"LightSlateGrey"|"LightSteelBlue"|"LightYellow"|"Lime"|"LimeGreen"|"Linen"|"Magenta"|"Maroon"|"MediumAquaMarine"|"MediumBlue"|"MediumOrchid"|"MediumPurple"|"MediumSeaGreen"|"MediumSlateBlue"|"MediumSpringGreen"|"MediumTurquoise"|"MediumVioletRed"|"MidnightBlue"|"MintCream"|"MistyRose"|"Moccasin"|"NavajoWhite"|"Navy"|"OldLace"|"Olive"|"OliveDrab"|"Orange"|"OrangeRed"|"Orchid"|"PaleGoldenRod"|"PaleGreen"|"PaleTurquoise"|"PaleVioletRed"|"PapayaWhip"|"PeachPuff"|"Peru"|"Pink"|"Plum"|"PowderBlue"|"Purple"|"RebeccaPurple"|"Red"|"RosyBrown"|"RoyalBlue"|"SaddleBrown"|"Salmon"|"SandyBrown"|"SeaGreen"|"SeaShell"|"Sienna"|"Silver"|"SkyBlue"|"SlateBlue"|"SlateGray"|"SlateGrey"|"Snow"|"SpringGreen"|"SteelBlue"|"Tan"|"Teal"|"Thistle"|"Tomato"|"Turquoise"|"Violet"|"Wheat"|"White"|"WhiteSmoke"|"Yellow"|"YellowGreen";
type Color = RGB | RGBA | HEX | BasicColor | string ;

interface DotsProp {
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
    color?:string|undefined;
    gap:string;
    gapX?:string;
    gapY?:string;
    offsetX?:string;
    offsetY?:string;
}

interface DotProp {
    x: string;
    y: string;
    color?: string | undefined;
}
export { DotsProp , DotProp };