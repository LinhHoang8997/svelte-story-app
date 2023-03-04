export type X = {
    readonly "input": X$input;
    readonly "result": X$result | undefined;
};

export type X$result = {
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

export type X$input = null;