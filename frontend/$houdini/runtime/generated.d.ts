import type { Record } from "./public/record";
import type { ValueOf } from "$houdini/runtime/lib/types";
import type { PublicationState } from "$houdini/graphql/enums";

type StringFilterInput = {
    and?: (string | null | undefined)[] | null | undefined;
    between?: (string | null | undefined)[] | null | undefined;
    contains?: string | null | undefined;
    containsi?: string | null | undefined;
    endsWith?: string | null | undefined;
    eq?: string | null | undefined;
    eqi?: string | null | undefined;
    gt?: string | null | undefined;
    gte?: string | null | undefined;
    in?: (string | null | undefined)[] | null | undefined;
    lt?: string | null | undefined;
    lte?: string | null | undefined;
    ne?: string | null | undefined;
    not?: StringFilterInput | null | undefined;
    notContains?: string | null | undefined;
    notContainsi?: string | null | undefined;
    notIn?: (string | null | undefined)[] | null | undefined;
    notNull?: boolean | null | undefined;
    null?: boolean | null | undefined;
    or?: (string | null | undefined)[] | null | undefined;
    startsWith?: string | null | undefined;
};

type DateTimeFilterInput = {
    and?: (any | null | undefined)[] | null | undefined;
    between?: (any | null | undefined)[] | null | undefined;
    contains?: any | null | undefined;
    containsi?: any | null | undefined;
    endsWith?: any | null | undefined;
    eq?: any | null | undefined;
    eqi?: any | null | undefined;
    gt?: any | null | undefined;
    gte?: any | null | undefined;
    in?: (any | null | undefined)[] | null | undefined;
    lt?: any | null | undefined;
    lte?: any | null | undefined;
    ne?: any | null | undefined;
    not?: DateTimeFilterInput | null | undefined;
    notContains?: any | null | undefined;
    notContainsi?: any | null | undefined;
    notIn?: (any | null | undefined)[] | null | undefined;
    notNull?: boolean | null | undefined;
    null?: boolean | null | undefined;
    or?: (any | null | undefined)[] | null | undefined;
    startsWith?: any | null | undefined;
};

type IDFilterInput = {
    and?: (string | null | undefined)[] | null | undefined;
    between?: (string | null | undefined)[] | null | undefined;
    contains?: string | null | undefined;
    containsi?: string | null | undefined;
    endsWith?: string | null | undefined;
    eq?: string | null | undefined;
    eqi?: string | null | undefined;
    gt?: string | null | undefined;
    gte?: string | null | undefined;
    in?: (string | null | undefined)[] | null | undefined;
    lt?: string | null | undefined;
    lte?: string | null | undefined;
    ne?: string | null | undefined;
    not?: IDFilterInput | null | undefined;
    notContains?: string | null | undefined;
    notContainsi?: string | null | undefined;
    notIn?: (string | null | undefined)[] | null | undefined;
    notNull?: boolean | null | undefined;
    null?: boolean | null | undefined;
    or?: (string | null | undefined)[] | null | undefined;
    startsWith?: string | null | undefined;
};

type ArcFiltersInput = {
    and?: (ArcFiltersInput | null | undefined)[] | null | undefined;
    arc_id?: StringFilterInput | null | undefined;
    chapters?: ChapterFiltersInput | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    description?: StringFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    not?: ArcFiltersInput | null | undefined;
    or?: (ArcFiltersInput | null | undefined)[] | null | undefined;
    publishedAt?: DateTimeFilterInput | null | undefined;
    title?: StringFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type ComponentMultimediaHeaderMediaFiltersInput = {
    and?: (ComponentMultimediaHeaderMediaFiltersInput | null | undefined)[] | null | undefined;
    not?: ComponentMultimediaHeaderMediaFiltersInput | null | undefined;
    or?: (ComponentMultimediaHeaderMediaFiltersInput | null | undefined)[] | null | undefined;
};

type InteractiveBlockFiltersInput = {
    and?: (InteractiveBlockFiltersInput | null | undefined)[] | null | undefined;
    chapters?: ChapterFiltersInput | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    interactive_block_id?: StringFilterInput | null | undefined;
    not?: InteractiveBlockFiltersInput | null | undefined;
    or?: (InteractiveBlockFiltersInput | null | undefined)[] | null | undefined;
    publishedAt?: DateTimeFilterInput | null | undefined;
    rich_text_caption?: StringFilterInput | null | undefined;
    type?: StringFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type ComponentSeoSeoInformationFiltersInput = {
    and?: (ComponentSeoSeoInformationFiltersInput | null | undefined)[] | null | undefined;
    language_code?: StringFilterInput | null | undefined;
    meta_description?: StringFilterInput | null | undefined;
    not?: ComponentSeoSeoInformationFiltersInput | null | undefined;
    og_site_name?: StringFilterInput | null | undefined;
    or?: (ComponentSeoSeoInformationFiltersInput | null | undefined)[] | null | undefined;
    page_title?: StringFilterInput | null | undefined;
};

type ChapterFiltersInput = {
    and?: (ChapterFiltersInput | null | undefined)[] | null | undefined;
    arc?: ArcFiltersInput | null | undefined;
    blurb?: StringFilterInput | null | undefined;
    chapter_header_media?: ComponentMultimediaHeaderMediaFiltersInput | null | undefined;
    content?: StringFilterInput | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    interactive_blocks?: InteractiveBlockFiltersInput | null | undefined;
    not?: ChapterFiltersInput | null | undefined;
    or?: (ChapterFiltersInput | null | undefined)[] | null | undefined;
    publishedAt?: DateTimeFilterInput | null | undefined;
    seo_information?: ComponentSeoSeoInformationFiltersInput | null | undefined;
    slug?: StringFilterInput | null | undefined;
    title?: StringFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type PaginationArg = {
    limit?: number | null | undefined;
    page?: number | null | undefined;
    pageSize?: number | null | undefined;
    start?: number | null | undefined;
};

type IntFilterInput = {
    and?: (number | null | undefined)[] | null | undefined;
    between?: (number | null | undefined)[] | null | undefined;
    contains?: number | null | undefined;
    containsi?: number | null | undefined;
    endsWith?: number | null | undefined;
    eq?: number | null | undefined;
    eqi?: number | null | undefined;
    gt?: number | null | undefined;
    gte?: number | null | undefined;
    in?: (number | null | undefined)[] | null | undefined;
    lt?: number | null | undefined;
    lte?: number | null | undefined;
    ne?: number | null | undefined;
    not?: IntFilterInput | null | undefined;
    notContains?: number | null | undefined;
    notContainsi?: number | null | undefined;
    notIn?: (number | null | undefined)[] | null | undefined;
    notNull?: boolean | null | undefined;
    null?: boolean | null | undefined;
    or?: (number | null | undefined)[] | null | undefined;
    startsWith?: number | null | undefined;
};

type UploadFolderFiltersInput = {
    and?: (UploadFolderFiltersInput | null | undefined)[] | null | undefined;
    children?: UploadFolderFiltersInput | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    files?: UploadFileFiltersInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    name?: StringFilterInput | null | undefined;
    not?: UploadFolderFiltersInput | null | undefined;
    or?: (UploadFolderFiltersInput | null | undefined)[] | null | undefined;
    parent?: UploadFolderFiltersInput | null | undefined;
    path?: StringFilterInput | null | undefined;
    pathId?: IntFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type JSONFilterInput = {
    and?: (any | null | undefined)[] | null | undefined;
    between?: (any | null | undefined)[] | null | undefined;
    contains?: any | null | undefined;
    containsi?: any | null | undefined;
    endsWith?: any | null | undefined;
    eq?: any | null | undefined;
    eqi?: any | null | undefined;
    gt?: any | null | undefined;
    gte?: any | null | undefined;
    in?: (any | null | undefined)[] | null | undefined;
    lt?: any | null | undefined;
    lte?: any | null | undefined;
    ne?: any | null | undefined;
    not?: JSONFilterInput | null | undefined;
    notContains?: any | null | undefined;
    notContainsi?: any | null | undefined;
    notIn?: (any | null | undefined)[] | null | undefined;
    notNull?: boolean | null | undefined;
    null?: boolean | null | undefined;
    or?: (any | null | undefined)[] | null | undefined;
    startsWith?: any | null | undefined;
};

type FloatFilterInput = {
    and?: (number | null | undefined)[] | null | undefined;
    between?: (number | null | undefined)[] | null | undefined;
    contains?: number | null | undefined;
    containsi?: number | null | undefined;
    endsWith?: number | null | undefined;
    eq?: number | null | undefined;
    eqi?: number | null | undefined;
    gt?: number | null | undefined;
    gte?: number | null | undefined;
    in?: (number | null | undefined)[] | null | undefined;
    lt?: number | null | undefined;
    lte?: number | null | undefined;
    ne?: number | null | undefined;
    not?: FloatFilterInput | null | undefined;
    notContains?: number | null | undefined;
    notContainsi?: number | null | undefined;
    notIn?: (number | null | undefined)[] | null | undefined;
    notNull?: boolean | null | undefined;
    null?: boolean | null | undefined;
    or?: (number | null | undefined)[] | null | undefined;
    startsWith?: number | null | undefined;
};

type UploadFileFiltersInput = {
    alternativeText?: StringFilterInput | null | undefined;
    and?: (UploadFileFiltersInput | null | undefined)[] | null | undefined;
    caption?: StringFilterInput | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    ext?: StringFilterInput | null | undefined;
    folder?: UploadFolderFiltersInput | null | undefined;
    folderPath?: StringFilterInput | null | undefined;
    formats?: JSONFilterInput | null | undefined;
    hash?: StringFilterInput | null | undefined;
    height?: IntFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    mime?: StringFilterInput | null | undefined;
    name?: StringFilterInput | null | undefined;
    not?: UploadFileFiltersInput | null | undefined;
    or?: (UploadFileFiltersInput | null | undefined)[] | null | undefined;
    previewUrl?: StringFilterInput | null | undefined;
    provider?: StringFilterInput | null | undefined;
    provider_metadata?: JSONFilterInput | null | undefined;
    size?: FloatFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
    url?: StringFilterInput | null | undefined;
    width?: IntFilterInput | null | undefined;
};

type BooleanFilterInput = {
    and?: (boolean | null | undefined)[] | null | undefined;
    between?: (boolean | null | undefined)[] | null | undefined;
    contains?: boolean | null | undefined;
    containsi?: boolean | null | undefined;
    endsWith?: boolean | null | undefined;
    eq?: boolean | null | undefined;
    eqi?: boolean | null | undefined;
    gt?: boolean | null | undefined;
    gte?: boolean | null | undefined;
    in?: (boolean | null | undefined)[] | null | undefined;
    lt?: boolean | null | undefined;
    lte?: boolean | null | undefined;
    ne?: boolean | null | undefined;
    not?: BooleanFilterInput | null | undefined;
    notContains?: boolean | null | undefined;
    notContainsi?: boolean | null | undefined;
    notIn?: (boolean | null | undefined)[] | null | undefined;
    notNull?: boolean | null | undefined;
    null?: boolean | null | undefined;
    or?: (boolean | null | undefined)[] | null | undefined;
    startsWith?: boolean | null | undefined;
};

type LocationFiltersInput = {
    and?: (LocationFiltersInput | null | undefined)[] | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    geography?: StringFilterInput | null | undefined;
    history?: StringFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    laconic_description?: StringFilterInput | null | undefined;
    location_header_media?: ComponentMultimediaHeaderMediaFiltersInput | null | undefined;
    location_id?: StringFilterInput | null | undefined;
    music_album?: MusicAlbumFiltersInput | null | undefined;
    name?: StringFilterInput | null | undefined;
    not?: LocationFiltersInput | null | undefined;
    or?: (LocationFiltersInput | null | undefined)[] | null | undefined;
    present_in_main_story?: BooleanFilterInput | null | undefined;
    publishedAt?: DateTimeFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type DateFilterInput = {
    and?: (any | null | undefined)[] | null | undefined;
    between?: (any | null | undefined)[] | null | undefined;
    contains?: any | null | undefined;
    containsi?: any | null | undefined;
    endsWith?: any | null | undefined;
    eq?: any | null | undefined;
    eqi?: any | null | undefined;
    gt?: any | null | undefined;
    gte?: any | null | undefined;
    in?: (any | null | undefined)[] | null | undefined;
    lt?: any | null | undefined;
    lte?: any | null | undefined;
    ne?: any | null | undefined;
    not?: DateFilterInput | null | undefined;
    notContains?: any | null | undefined;
    notContainsi?: any | null | undefined;
    notIn?: (any | null | undefined)[] | null | undefined;
    notNull?: boolean | null | undefined;
    null?: boolean | null | undefined;
    or?: (any | null | undefined)[] | null | undefined;
    startsWith?: any | null | undefined;
};

type MusicAlbumFiltersInput = {
    and?: (MusicAlbumFiltersInput | null | undefined)[] | null | undefined;
    blurb?: StringFilterInput | null | undefined;
    characters?: CharacterFiltersInput | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    locations?: LocationFiltersInput | null | undefined;
    music_album_id?: StringFilterInput | null | undefined;
    name?: StringFilterInput | null | undefined;
    not?: MusicAlbumFiltersInput | null | undefined;
    or?: (MusicAlbumFiltersInput | null | undefined)[] | null | undefined;
    publishedAt?: DateTimeFilterInput | null | undefined;
    release_date?: DateFilterInput | null | undefined;
    type?: StringFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type CharacterFiltersInput = {
    and?: (CharacterFiltersInput | null | undefined)[] | null | undefined;
    biography?: StringFilterInput | null | undefined;
    character_id?: StringFilterInput | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    faction?: StringFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    laconic_description?: StringFilterInput | null | undefined;
    music_album?: MusicAlbumFiltersInput | null | undefined;
    name?: StringFilterInput | null | undefined;
    not?: CharacterFiltersInput | null | undefined;
    or?: (CharacterFiltersInput | null | undefined)[] | null | undefined;
    publishedAt?: DateTimeFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type I18NLocaleFiltersInput = {
    and?: (I18NLocaleFiltersInput | null | undefined)[] | null | undefined;
    code?: StringFilterInput | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    name?: StringFilterInput | null | undefined;
    not?: I18NLocaleFiltersInput | null | undefined;
    or?: (I18NLocaleFiltersInput | null | undefined)[] | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type UsersPermissionsPermissionFiltersInput = {
    action?: StringFilterInput | null | undefined;
    and?: (UsersPermissionsPermissionFiltersInput | null | undefined)[] | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    not?: UsersPermissionsPermissionFiltersInput | null | undefined;
    or?: (UsersPermissionsPermissionFiltersInput | null | undefined)[] | null | undefined;
    role?: UsersPermissionsRoleFiltersInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
};

type UsersPermissionsUserFiltersInput = {
    and?: (UsersPermissionsUserFiltersInput | null | undefined)[] | null | undefined;
    blocked?: BooleanFilterInput | null | undefined;
    confirmationToken?: StringFilterInput | null | undefined;
    confirmed?: BooleanFilterInput | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    email?: StringFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    not?: UsersPermissionsUserFiltersInput | null | undefined;
    or?: (UsersPermissionsUserFiltersInput | null | undefined)[] | null | undefined;
    password?: StringFilterInput | null | undefined;
    provider?: StringFilterInput | null | undefined;
    resetPasswordToken?: StringFilterInput | null | undefined;
    role?: UsersPermissionsRoleFiltersInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
    username?: StringFilterInput | null | undefined;
};

type UsersPermissionsRoleFiltersInput = {
    and?: (UsersPermissionsRoleFiltersInput | null | undefined)[] | null | undefined;
    createdAt?: DateTimeFilterInput | null | undefined;
    description?: StringFilterInput | null | undefined;
    id?: IDFilterInput | null | undefined;
    name?: StringFilterInput | null | undefined;
    not?: UsersPermissionsRoleFiltersInput | null | undefined;
    or?: (UsersPermissionsRoleFiltersInput | null | undefined)[] | null | undefined;
    permissions?: UsersPermissionsPermissionFiltersInput | null | undefined;
    type?: StringFilterInput | null | undefined;
    updatedAt?: DateTimeFilterInput | null | undefined;
    users?: UsersPermissionsUserFiltersInput | null | undefined;
};

export declare type CacheTypeDef = {
    types: {
        Arc: {
            idFields: never;
            fields: {
                arc_id: {
                    type: string | null;
                    args: never;
                };
                chapters: {
                    type: Record<CacheTypeDef, "ChapterRelationResponseCollection"> | null;
                    args: {
                        filters?: ChapterFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        publicationState?: ValueOf<typeof PublicationState> | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                description: {
                    type: string | null;
                    args: never;
                };
                publishedAt: {
                    type: any | null;
                    args: never;
                };
                title: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ArcEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "Arc"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ArcEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "ArcEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ArcEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "ArcEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        Chapter: {
            idFields: never;
            fields: {
                arc: {
                    type: Record<CacheTypeDef, "ArcEntityResponse"> | null;
                    args: never;
                };
                blurb: {
                    type: string | null;
                    args: never;
                };
                chapter_header_media: {
                    type: ((Record<CacheTypeDef, "ComponentMultimediaHeaderMedia"> | null))[] | null;
                    args: {
                        filters?: ComponentMultimediaHeaderMediaFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                content: {
                    type: string | null;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                emblem: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse"> | null;
                    args: never;
                };
                interactive_blocks: {
                    type: Record<CacheTypeDef, "InteractiveBlockRelationResponseCollection"> | null;
                    args: {
                        filters?: InteractiveBlockFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        publicationState?: ValueOf<typeof PublicationState> | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                publishedAt: {
                    type: any | null;
                    args: never;
                };
                seo_information: {
                    type: Record<CacheTypeDef, "ComponentSeoSeoInformation"> | null;
                    args: never;
                };
                slug: {
                    type: string | null;
                    args: never;
                };
                title: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ChapterEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "Chapter"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ChapterEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "ChapterEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ChapterEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "ChapterEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        ChapterRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "ChapterEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        Character: {
            idFields: never;
            fields: {
                biography: {
                    type: string | null;
                    args: never;
                };
                character_id: {
                    type: string | null;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                faction: {
                    type: ENUM_CHARACTER_FACTION;
                    args: never;
                };
                laconic_description: {
                    type: string | null;
                    args: never;
                };
                music_album: {
                    type: Record<CacheTypeDef, "MusicAlbumEntityResponse"> | null;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                profile_images: {
                    type: Record<CacheTypeDef, "UploadFileRelationResponseCollection"> | null;
                    args: {
                        filters?: UploadFileFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                publishedAt: {
                    type: any | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CharacterEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "Character"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CharacterEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "CharacterEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CharacterEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "CharacterEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        CharacterRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "CharacterEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        ComponentMultimediaHeaderMedia: {
            idFields: {
                id: string;
            };
            fields: {
                hero_carousel: {
                    type: Record<CacheTypeDef, "UploadFileRelationResponseCollection"> | null;
                    args: {
                        filters?: UploadFileFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                hero_image: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse"> | null;
                    args: never;
                };
                hero_video: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse"> | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        ComponentSeoSeoInformation: {
            idFields: {
                id: string;
            };
            fields: {
                id: {
                    type: string;
                    args: never;
                };
                language_code: {
                    type: string | null;
                    args: never;
                };
                meta_description: {
                    type: string | null;
                    args: never;
                };
                og_image: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse"> | null;
                    args: never;
                };
                og_site_name: {
                    type: string | null;
                    args: never;
                };
                page_title: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        I18NLocale: {
            idFields: never;
            fields: {
                code: {
                    type: string | null;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                name: {
                    type: string | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        I18NLocaleEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "I18NLocale"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        I18NLocaleEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "I18NLocaleEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        I18NLocaleEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "I18NLocaleEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        InteractiveBlock: {
            idFields: never;
            fields: {
                chapters: {
                    type: Record<CacheTypeDef, "ChapterRelationResponseCollection"> | null;
                    args: {
                        filters?: ChapterFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        publicationState?: ValueOf<typeof PublicationState> | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                images: {
                    type: Record<CacheTypeDef, "UploadFileRelationResponseCollection"> | null;
                    args: {
                        filters?: UploadFileFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                interactive_block_id: {
                    type: string | null;
                    args: never;
                };
                publishedAt: {
                    type: any | null;
                    args: never;
                };
                rich_text_caption: {
                    type: string | null;
                    args: never;
                };
                sounds: {
                    type: Record<CacheTypeDef, "UploadFileRelationResponseCollection"> | null;
                    args: {
                        filters?: UploadFileFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                type: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        InteractiveBlockEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "InteractiveBlock"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        InteractiveBlockEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "InteractiveBlockEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        InteractiveBlockEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "InteractiveBlockEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        InteractiveBlockRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "InteractiveBlockEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        Location: {
            idFields: never;
            fields: {
                createdAt: {
                    type: any | null;
                    args: never;
                };
                geography: {
                    type: string | null;
                    args: never;
                };
                history: {
                    type: string | null;
                    args: never;
                };
                laconic_description: {
                    type: string | null;
                    args: never;
                };
                location_header_media: {
                    type: Record<CacheTypeDef, "ComponentMultimediaHeaderMedia"> | null;
                    args: never;
                };
                location_id: {
                    type: string | null;
                    args: never;
                };
                music_album: {
                    type: Record<CacheTypeDef, "MusicAlbumEntityResponse"> | null;
                    args: never;
                };
                name: {
                    type: string | null;
                    args: never;
                };
                present_in_main_story: {
                    type: boolean | null;
                    args: never;
                };
                publishedAt: {
                    type: any | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        LocationEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "Location"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        LocationEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "LocationEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        LocationEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "LocationEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        LocationRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "LocationEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        MusicAlbum: {
            idFields: never;
            fields: {
                audio_files: {
                    type: Record<CacheTypeDef, "UploadFileRelationResponseCollection"> | null;
                    args: {
                        filters?: UploadFileFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                blurb: {
                    type: string | null;
                    args: never;
                };
                characters: {
                    type: Record<CacheTypeDef, "CharacterRelationResponseCollection"> | null;
                    args: {
                        filters?: CharacterFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        publicationState?: ValueOf<typeof PublicationState> | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                cover_image: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse"> | null;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                locations: {
                    type: Record<CacheTypeDef, "LocationRelationResponseCollection"> | null;
                    args: {
                        filters?: LocationFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        publicationState?: ValueOf<typeof PublicationState> | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                music_album_id: {
                    type: string | null;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                publishedAt: {
                    type: any | null;
                    args: never;
                };
                release_date: {
                    type: any | null;
                    args: never;
                };
                type: {
                    type: ENUM_MUSICALBUM_TYPE | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        MusicAlbumEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "MusicAlbum"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        MusicAlbumEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "MusicAlbumEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        MusicAlbumEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "MusicAlbumEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        Pagination: {
            idFields: never;
            fields: {
                page: {
                    type: number;
                    args: never;
                };
                pageCount: {
                    type: number;
                    args: never;
                };
                pageSize: {
                    type: number;
                    args: never;
                };
                total: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        __ROOT__: {
            idFields: {};
            fields: {
                arc: {
                    type: Record<CacheTypeDef, "ArcEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                    };
                };
                arcs: {
                    type: Record<CacheTypeDef, "ArcEntityResponseCollection"> | null;
                    args: {
                        filters?: ArcFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        publicationState?: ValueOf<typeof PublicationState> | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                chapter: {
                    type: Record<CacheTypeDef, "ChapterEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                    };
                };
                chapters: {
                    type: Record<CacheTypeDef, "ChapterEntityResponseCollection"> | null;
                    args: {
                        filters?: ChapterFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        publicationState?: ValueOf<typeof PublicationState> | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                character: {
                    type: Record<CacheTypeDef, "CharacterEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                    };
                };
                characters: {
                    type: Record<CacheTypeDef, "CharacterEntityResponseCollection"> | null;
                    args: {
                        filters?: CharacterFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        publicationState?: ValueOf<typeof PublicationState> | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                i18NLocale: {
                    type: Record<CacheTypeDef, "I18NLocaleEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                    };
                };
                i18NLocales: {
                    type: Record<CacheTypeDef, "I18NLocaleEntityResponseCollection"> | null;
                    args: {
                        filters?: I18NLocaleFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                interactiveBlock: {
                    type: Record<CacheTypeDef, "InteractiveBlockEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                    };
                };
                interactiveBlocks: {
                    type: Record<CacheTypeDef, "InteractiveBlockEntityResponseCollection"> | null;
                    args: {
                        filters?: InteractiveBlockFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        publicationState?: ValueOf<typeof PublicationState> | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                location: {
                    type: Record<CacheTypeDef, "LocationEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                    };
                };
                locations: {
                    type: Record<CacheTypeDef, "LocationEntityResponseCollection"> | null;
                    args: {
                        filters?: LocationFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        publicationState?: ValueOf<typeof PublicationState> | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                me: {
                    type: Record<CacheTypeDef, "UsersPermissionsMe"> | null;
                    args: never;
                };
                musicAlbum: {
                    type: Record<CacheTypeDef, "MusicAlbumEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                    };
                };
                musicAlbums: {
                    type: Record<CacheTypeDef, "MusicAlbumEntityResponseCollection"> | null;
                    args: {
                        filters?: MusicAlbumFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        publicationState?: ValueOf<typeof PublicationState> | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                uploadFile: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                    };
                };
                uploadFiles: {
                    type: Record<CacheTypeDef, "UploadFileEntityResponseCollection"> | null;
                    args: {
                        filters?: UploadFileFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                uploadFolder: {
                    type: Record<CacheTypeDef, "UploadFolderEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                    };
                };
                uploadFolders: {
                    type: Record<CacheTypeDef, "UploadFolderEntityResponseCollection"> | null;
                    args: {
                        filters?: UploadFolderFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                usersPermissionsRole: {
                    type: Record<CacheTypeDef, "UsersPermissionsRoleEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                    };
                };
                usersPermissionsRoles: {
                    type: Record<CacheTypeDef, "UsersPermissionsRoleEntityResponseCollection"> | null;
                    args: {
                        filters?: UsersPermissionsRoleFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                usersPermissionsUser: {
                    type: Record<CacheTypeDef, "UsersPermissionsUserEntityResponse"> | null;
                    args: {
                        id?: string | null | undefined;
                    };
                };
                usersPermissionsUsers: {
                    type: Record<CacheTypeDef, "UsersPermissionsUserEntityResponseCollection"> | null;
                    args: {
                        filters?: UsersPermissionsUserFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
            };
            fragments: [];
        };
        ResponseCollectionMeta: {
            idFields: never;
            fields: {
                pagination: {
                    type: Record<CacheTypeDef, "Pagination">;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFile: {
            idFields: never;
            fields: {
                alternativeText: {
                    type: string | null;
                    args: never;
                };
                caption: {
                    type: string | null;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                ext: {
                    type: string | null;
                    args: never;
                };
                formats: {
                    type: any | null;
                    args: never;
                };
                hash: {
                    type: string;
                    args: never;
                };
                height: {
                    type: number | null;
                    args: never;
                };
                mime: {
                    type: string;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                previewUrl: {
                    type: string | null;
                    args: never;
                };
                provider: {
                    type: string;
                    args: never;
                };
                provider_metadata: {
                    type: any | null;
                    args: never;
                };
                related: {
                    type: ((Record<CacheTypeDef, "Arc"> | Record<CacheTypeDef, "Chapter"> | Record<CacheTypeDef, "Character"> | Record<CacheTypeDef, "ComponentMultimediaHeaderMedia"> | Record<CacheTypeDef, "ComponentSeoSeoInformation"> | Record<CacheTypeDef, "I18NLocale"> | Record<CacheTypeDef, "InteractiveBlock"> | Record<CacheTypeDef, "Location"> | Record<CacheTypeDef, "MusicAlbum"> | Record<CacheTypeDef, "UploadFile"> | Record<CacheTypeDef, "UploadFolder"> | Record<CacheTypeDef, "UsersPermissionsPermission"> | Record<CacheTypeDef, "UsersPermissionsRole"> | Record<CacheTypeDef, "UsersPermissionsUser"> | null))[] | null;
                    args: never;
                };
                size: {
                    type: number;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
                url: {
                    type: string;
                    args: never;
                };
                width: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFileEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "UploadFile"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFileEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "UploadFileEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFileEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "UploadFileEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFileRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "UploadFileEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFolder: {
            idFields: never;
            fields: {
                children: {
                    type: Record<CacheTypeDef, "UploadFolderRelationResponseCollection"> | null;
                    args: {
                        filters?: UploadFolderFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                files: {
                    type: Record<CacheTypeDef, "UploadFileRelationResponseCollection"> | null;
                    args: {
                        filters?: UploadFileFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                name: {
                    type: string;
                    args: never;
                };
                parent: {
                    type: Record<CacheTypeDef, "UploadFolderEntityResponse"> | null;
                    args: never;
                };
                path: {
                    type: string;
                    args: never;
                };
                pathId: {
                    type: number;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFolderEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "UploadFolder"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFolderEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "UploadFolderEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFolderEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "UploadFolderEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadFolderRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "UploadFolderEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsCreateRolePayload: {
            idFields: never;
            fields: {
                ok: {
                    type: boolean;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsDeleteRolePayload: {
            idFields: never;
            fields: {
                ok: {
                    type: boolean;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsLoginPayload: {
            idFields: never;
            fields: {
                jwt: {
                    type: string | null;
                    args: never;
                };
                user: {
                    type: Record<CacheTypeDef, "UsersPermissionsMe">;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsMe: {
            idFields: {
                id: string;
            };
            fields: {
                blocked: {
                    type: boolean | null;
                    args: never;
                };
                confirmed: {
                    type: boolean | null;
                    args: never;
                };
                email: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                role: {
                    type: Record<CacheTypeDef, "UsersPermissionsMeRole"> | null;
                    args: never;
                };
                username: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsMeRole: {
            idFields: {
                id: string;
            };
            fields: {
                description: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                type: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsPasswordPayload: {
            idFields: never;
            fields: {
                ok: {
                    type: boolean;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsPermission: {
            idFields: never;
            fields: {
                action: {
                    type: string;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                role: {
                    type: Record<CacheTypeDef, "UsersPermissionsRoleEntityResponse"> | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsPermissionEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "UsersPermissionsPermission"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsPermissionRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "UsersPermissionsPermissionEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsRole: {
            idFields: never;
            fields: {
                createdAt: {
                    type: any | null;
                    args: never;
                };
                description: {
                    type: string | null;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                permissions: {
                    type: Record<CacheTypeDef, "UsersPermissionsPermissionRelationResponseCollection"> | null;
                    args: {
                        filters?: UsersPermissionsPermissionFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
                type: {
                    type: string | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
                users: {
                    type: Record<CacheTypeDef, "UsersPermissionsUserRelationResponseCollection"> | null;
                    args: {
                        filters?: UsersPermissionsUserFiltersInput | null | undefined;
                        pagination?: PaginationArg | null | undefined;
                        sort?: (string | null | undefined)[] | null | undefined;
                    };
                };
            };
            fragments: [];
        };
        UsersPermissionsRoleEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "UsersPermissionsRole"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsRoleEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "UsersPermissionsRoleEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsRoleEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "UsersPermissionsRoleEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsUpdateRolePayload: {
            idFields: never;
            fields: {
                ok: {
                    type: boolean;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsUser: {
            idFields: never;
            fields: {
                blocked: {
                    type: boolean | null;
                    args: never;
                };
                confirmed: {
                    type: boolean | null;
                    args: never;
                };
                createdAt: {
                    type: any | null;
                    args: never;
                };
                email: {
                    type: string;
                    args: never;
                };
                provider: {
                    type: string | null;
                    args: never;
                };
                role: {
                    type: Record<CacheTypeDef, "UsersPermissionsRoleEntityResponse"> | null;
                    args: never;
                };
                updatedAt: {
                    type: any | null;
                    args: never;
                };
                username: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsUserEntity: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: Record<CacheTypeDef, "UsersPermissionsUser"> | null;
                    args: never;
                };
                id: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsUserEntityResponse: {
            idFields: never;
            fields: {
                data: {
                    type: Record<CacheTypeDef, "UsersPermissionsUserEntity"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsUserEntityResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "UsersPermissionsUserEntity">)[];
                    args: never;
                };
                meta: {
                    type: Record<CacheTypeDef, "ResponseCollectionMeta">;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersPermissionsUserRelationResponseCollection: {
            idFields: never;
            fields: {
                data: {
                    type: (Record<CacheTypeDef, "UsersPermissionsUserEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
    };
    lists: {};
    queries: [];
};