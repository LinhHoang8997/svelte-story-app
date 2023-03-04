
type ValuesOf<T> = T[keyof T]
	
export declare const ENUM_CHARACTER_FACTION: {
    readonly essence: "essence";
    readonly first_darkness: "first_darkness";
    readonly golden_palanquin: "golden_palanquin";
    readonly kingdom: "kingdom";
    readonly old_gods: "old_gods";
    readonly second_darkness: "second_darkness";
    readonly third_darkness: "third_darkness";
}

export type ENUM_CHARACTER_FACTION$options = ValuesOf<typeof ENUM_CHARACTER_FACTION>
 
export declare const ENUM_MUSICALBUM_TYPE: {
    readonly extended_play: "extended_play";
    readonly long_play: "long_play";
    readonly single: "single";
}

export type ENUM_MUSICALBUM_TYPE$options = ValuesOf<typeof ENUM_MUSICALBUM_TYPE>
 
export declare const PublicationState: {
    readonly LIVE: "LIVE";
    readonly PREVIEW: "PREVIEW";
}

export type PublicationState$options = ValuesOf<typeof PublicationState>
 