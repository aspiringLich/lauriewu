// enhanced-img only types imports ending in `?enhanced`. This also covers ones with extra
// directives in front, like `image.png?w=400;800&enhanced`.
declare module '*&enhanced' {
	import type { Picture } from 'vite-imagetools';

	const value: Picture;
	export default value;
}
