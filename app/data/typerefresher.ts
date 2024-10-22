
interface Props {
  size?: number;
  color?: string;
  name?: string;
}
const practice = {
  name: "Michael",
  id: 10,
};

type propKeys<T, K extends keyof T> = T[K];
type SizePropType = propKeys<Props, "size">;
const tester: SizePropType = 0;

type NamePropType = propKeys<Props, "name">;
const tester2: NamePropType = "";

type ColorPropType = propKeys<Props, "color">;
const tester3: ColorPropType = "";

let testObj: propKeys<typeof practice, "name" | "id"> = 19;