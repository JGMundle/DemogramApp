import { Dimensions, PixelRatio } from "react-native"



const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")


//short dimension = width = X
//longer dimesion = Y
//1st result = portrait
//2nd result = 
const [shortDimension, longDimension] = SCREEN_WIDTH < SCREEN_HEIGHT ? [SCREEN_WIDTH, SCREEN_HEIGHT] :
    [SCREEN_HEIGHT, SCREEN_WIDTH]

const guildlineBaseWidth = 344
const guildlineBaseHeight = 812

//Normalisation Functions
//Takes of the X axis of any device
export const normalizeX = (size: number): number => {
   return Math.round(
     PixelRatio.roundToNearestPixel(
       (shortDimension / guildlineBaseWidth) * size
     )
   );
}

export const normalizeY = (size: number): number => {
   return Math.round(PixelRatio.roundToNearestPixel(longDimension/guildlineBaseHeight) * size);
}
