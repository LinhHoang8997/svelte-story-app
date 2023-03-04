export type AllChapterTitles = {
    readonly "input": AllChapterTitles$input;
    readonly "result": AllChapterTitles$result | undefined;
};

export type AllChapterTitles$result = {
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

export type AllChapterTitles$input = null;