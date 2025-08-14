declare module 'cursor-effects' {
	interface EmojiCursorOptions {
		emoji: string[];
		// Add other properties if you discover they exist and are used
		// For example:
		// count?: number;
		// fadeOutTime?: number;
	}

	export class emojiCursor {
		constructor(options: EmojiCursorOptions);
		// Add any public methods if they are used, e.g.,
		// destroy(): void;
	}

	export class clockCursor {
		constructor();
	}

	interface RainbowCursorOptions {
		length: number;
		colors: string[];
		size: number;
		// Add other properties if you discover they exist and are used
	}

	export class rainbowCursor {
		constructor(options: RainbowCursorOptions);
	}
}
