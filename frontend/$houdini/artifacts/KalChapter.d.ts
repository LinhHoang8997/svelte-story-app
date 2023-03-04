export type KalChapter = {
    readonly "input": KalChapter$input;
    readonly "result": KalChapter$result | undefined;
};

export type KalChapter$result = {
    readonly chapters: {
        readonly data: ({
            readonly id: string | null;
            readonly attributes: {
                readonly title: string;
                readonly content: string | null;
                readonly slug: string | null;
                readonly chapter_header_media: ({
                    readonly id: string;
                    readonly hero_image: {
                        readonly data: {
                            readonly id: string | null;
                            readonly attributes: {
                                readonly url: string;
                            } | null;
                        } | null;
                    } | null;
                } | null)[] | null;
            } | null;
        })[];
    } | null;
};

export type KalChapter$input = null;