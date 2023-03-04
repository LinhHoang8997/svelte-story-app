export default {
    "name": "APIChapterTitles",
    "kind": "HoudiniQuery",
    "hash": "e4e945fff640639e79feb43fc5e9b0fbc7c55051b5b34795a39c3546cb29fc57",

    "raw": `query APIChapterTitles {
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

"HoudiniHash=e4e945fff640639e79feb43fc5e9b0fbc7c55051b5b34795a39c3546cb29fc57";