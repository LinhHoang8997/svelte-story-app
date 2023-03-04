export type APIChapterTitles = {
    readonly "input": APIChapterTitles$input;
    readonly "result": APIChapterTitles$result | undefined;
};

export type APIChapterTitles$result = {
    readonly chapters: {
        readonly data: ({
            readonly id: string | null;
            readonly attributes: {
                readonly title: string;
                readonly slug: string | null;
            } | null;
        })[];
        readonly meta: {
            readonly pagination: {
                readonly page: number;
                readonly pageSize: number;
                readonly total: number;
                readonly pageCount: number;
            };
        };
    } | null;
};

export type APIChapterTitles$input = null;