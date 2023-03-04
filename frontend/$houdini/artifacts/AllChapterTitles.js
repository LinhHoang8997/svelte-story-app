export default {
    "name": "AllChapterTitles",
    "kind": "HoudiniQuery",
    "hash": "d1e6e2f186dda735e9dca5ae358d42ef6726366220a9f594233766f1d3a31225",

    "raw": `query AllChapterTitles {
  chapters {
    data {
      id
      attributes {
        title
        slug
      }
    }
    meta {
      pagination {
        page
        pageSize
        total
        pageCount
      }
    }
  }
}
`,

    "rootType": "Query",

    "selection": {
        "fields": {
            "chapters": {
                "type": "ChapterEntityResponseCollection",
                "keyRaw": "chapters",
                "nullable": true,

                "selection": {
                    "fields": {
                        "data": {
                            "type": "ChapterEntity",
                            "keyRaw": "data",

                            "selection": {
                                "fields": {
                                    "id": {
                                        "type": "ID",
                                        "keyRaw": "id",
                                        "nullable": true
                                    },

                                    "attributes": {
                                        "type": "Chapter",
                                        "keyRaw": "attributes",
                                        "nullable": true,

                                        "selection": {
                                            "fields": {
                                                "title": {
                                                    "type": "String",
                                                    "keyRaw": "title"
                                                },

                                                "slug": {
                                                    "type": "String",
                                                    "keyRaw": "slug",
                                                    "nullable": true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },

                        "meta": {
                            "type": "ResponseCollectionMeta",
                            "keyRaw": "meta",

                            "selection": {
                                "fields": {
                                    "pagination": {
                                        "type": "Pagination",
                                        "keyRaw": "pagination",

                                        "selection": {
                                            "fields": {
                                                "page": {
                                                    "type": "Int",
                                                    "keyRaw": "page"
                                                },

                                                "pageSize": {
                                                    "type": "Int",
                                                    "keyRaw": "pageSize"
                                                },

                                                "total": {
                                                    "type": "Int",
                                                    "keyRaw": "total"
                                                },

                                                "pageCount": {
                                                    "type": "Int",
                                                    "keyRaw": "pageCount"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    "pluginData": {
        "houdini-svelte": {
            "isManualLoad": true
        }
    },

    "policy": "CacheOrNetwork",
    "partial": false
};

"HoudiniHash=d1e6e2f186dda735e9dca5ae358d42ef6726366220a9f594233766f1d3a31225";